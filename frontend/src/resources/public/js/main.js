const requestPromise = require('request-promise');
const $ = require('cheerio');

connect();

function connect() {
    // for version 1 of the app, Istanbul is used as the city
    let URL = "https://www.glassdoor.com/Reviews/istanbul-reviews-SRCH_IL.0,8_IM1160.htm";
    requestPromise({
        url: URL,
        headers: {
            'User-Agent': 'Request-Promise'
        }
    })
        .then(function(response) {
            console.log("✔ Fetching page");
            parseHTML(response);
        })
        .catch(function(err){
            console.log("error on connection");
            console.log(err);
        });
}

function parseHTML(html) {
    console.log("✔ Parsing the page");
    let companyCount = parseCompanyCount(html);
    parseCompaniesOnPage(html);
}

function parseCompanyCount(html) {
    console.log("✔ Parsing results size");
    let companyCount = $('.count', html)
        .children()
        .last()
        .text();
    console.log("➡ " + companyCount + " companies found");
    return companyCount;
}

function parseCompaniesOnPage(html) {
    // empInfo
    console.log("✔ Parsing companies");
    let companies = $('.empInfo', html);
    console.log("Found: " + companies.length);
    console.log("➡ " + companies + " found on the page");
}