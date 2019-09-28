const requestPromise = require('request-promise');
const $ = require('cheerio');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API_URL = "http://localhost:8080";
const GLASSDOOR_URL = "https://www.glassdoor.com";
let companyList = [];
let totalCompanyCount;
let companyCountPerPage;
run();

function run() {
    // For the first version of the app, we choose companies at Istanbul
    // We'll iterate each page until the end
    // But first, we need to scrape total company count to find out how many pages are there
    // Also, pages after the first page has almost the same format, so we'll take advantage of it
    let URL = "https://www.glassdoor.com/Reviews/istanbul-reviews-SRCH_IL.0,8_IM1160.htm";
    connect(URL, callback => {
        let totalPages = Math.ceil((totalCompanyCount / companyCountPerPage));
        console.log("➡ " + totalPages + " pages found");
    });
}

function connect(URL, callback) {
    requestPromise({
        url: URL,
        headers: {
            'User-Agent': 'Request-Promise'
        }
    })
        .then(function (response) {
            console.log("✔ Fetching page");
            parseHTML(response, callback);
        })
        .catch(function (err) {
            console.log("Error occurred app");
            console.log(err);
        });
}

function parseHTML(html, callback) {
    console.log("✔ Parsing the page");
    parseCompanyCount(html);
    parseCompaniesOnPage(html, callback);
}

function parseCompanyCount(html) {
    console.log("✔ Parsing results size");
    let companyCount = $('.count', html)
        .children()
        .last()
        .text();
    console.log("➡ " + companyCount + " companies found");
    totalCompanyCount = parseFloat(companyCount.replace(/,/g, ''));
}

function parseCompaniesOnPage(html, callback) {
    // empInfo
    console.log("✔ Parsing companies");
    // companies is the parent HTML block where companies on the page are the children of.
    let companies = $('.eiHdrModule', html);
    console.log("➡ " + companies.length + " companies found on the page");
    companyCountPerPage = companies.length;
    /* We need 5 attributes for each company in our application
     * Company name, profile URL, picture URL, rate and total review count
     * We'll extract each info through the iteration
     */
    for (let i = 0; i < companies.length; i++) {
        console.log("✔ Parsing a company (" + (i + 1) + "/" + companies.length + ")");
        let company = companies.get(i);
        extractInfo(company);
    }
    console.log("✔ Page is parsed completely");
    callback();
    // console.log(companyList);
}

/*
 * The design of the website consists of 4 info blocks;
 * Logo block, Title block, Summary block, Review block.
 * Logo block and title block are contained together
 *
 * 1- Logo block includes company logo and company profile URL
 * 2- Title block includes company name, rating and company website
 * 3- Summary block includes total reviews, salaries and interviews
 * 4- Review block includes a review about the company
 *
 * We'll use the first 3 blocks for our app.
*/
function extractInfo(company) {
    // 1- Logo block
    let logoBlock = JSON.parse(scrapeLogoBlock(company));

    // 2- Title block
    let titleBlock = JSON.parse(scrapeTitleBlock(company));

    // 3- Summary block
    let summaryBlock = JSON.parse(scrapeSummaryBlock(company));

    generateCompanyJSON(logoBlock, titleBlock, summaryBlock);
}

// Logo block includes company logo and company profile URL
// We'll extract both
function scrapeLogoBlock(company) {
    let logoBlockHTML = $('.sqLogoLink', company);
    // extract profile URL
    let profileURL = GLASSDOOR_URL + logoBlockHTML.attr('href');
    // go inside 'sqLogo' and then 'img' and get src attribute
    let imageSource = $('img', $('.sqLogo', logoBlockHTML)).attr('src');
    // get exact URL
    let pictureURL = GLASSDOOR_URL + imageSource;
    return (JSON.stringify(
        {
            profileURL: profileURL,
            pictureURL: pictureURL
        }
    ));
}

// Title block includes company name, rating and company website
// We'll extract name and rating
function scrapeTitleBlock(company) {
    let titleBlockHTML = $('.header', company);

    // extract company name
    let name = $('a', $('div', titleBlockHTML)).text();
    // Remove unnecessary whitespace at the beginning
    name = name.trim();

    // company rating
    let spanBlock = $('span', $('.hideDesk .ratingsSummary', titleBlockHTML));
    let rate = $('.bigRating', spanBlock).text();
    return (JSON.stringify({
        name: name,
        rate: rate
    }))
}

// Summary block includes total reviews, salaries and interviews
// We'll extract total review count
function scrapeSummaryBlock(company) {
    let summaryBlockHTML = $('.empLinks', company);

    let totalReview = $('.num', $('.reviews', summaryBlockHTML)).text();
    totalReview = convertToInteger(totalReview);

    return (JSON.stringify({
        totalReview: totalReview
    }))
}

/*
 * Convert 3k -> 3000
 * We'll need that because in backend & DB, we use Integer
 * to keep 'sort by review count' option open
 * and instead of sending string values like 3k until database
 * then converting there, it's better to handle it at the first step.
 */
function convertToInteger(val) {
    let multiplier = val.substr(-1).toLowerCase();
    if (multiplier === "k")
        return parseFloat(val) * 1000;
    else if (multiplier === "m")
        return parseFloat(val) * 1000000;
    else
        return parseFloat(val);
}

function generateCompanyJSON(logoBlock, titleBlock, summaryBlock) {
    let companyJSON = JSON.stringify({
        name: titleBlock['name'],
        rate: titleBlock['rate'],
        profileURL: logoBlock['profileURL'],
        pictureURL: logoBlock['pictureURL'],
        totalReview: summaryBlock['totalReview']
    });
    companyList.push(companyJSON);
}

// POST Method for sending to-do item to API
function saveCompany(value) {
    executeHTTPRequest(value, 'POST', '/company/add');
}

function executeHTTPRequest(value, request, endpoint, callback) {
    endpoint = API_URL + endpoint;
    if (request === 'GET') {
        console.log("not implemented");
        // get(endpoint, callback);
    } else if (request === 'POST') {
        post(value, endpoint, callback);
    } else if (request === 'DELETE') {
        console.log("not implemented");
        // deleteRequest(value, endpoint);
    } else if (request === 'PUT') {
        console.log("not implemented");
        // update(value, endpoint);
    }
}

function post(value, endpoint, callback) {
    let request = new XMLHttpRequest();
    console.log('POST ' + value + " to " + endpoint);
    console.log(value);

    // Configure the request: POST method to the endpoint
    request.open('POST', endpoint);

    // Let API know it's JSON data
    request.setRequestHeader('Content-Type', 'application/json');

    // Send the request
    request.send(value);

    request.addEventListener('load', () => {
        console.log('Response received');
        console.log(request.responseText);
        let responseJSON = JSON.parse(request.responseText);
        if (responseJSON.error) return console.log(responseJSON.error);
        if (callback) callback(responseJSON);
    });

    request.addEventListener('error', (e) => {
        console.log('Error occurred.');
        console.log(e);
    });
}