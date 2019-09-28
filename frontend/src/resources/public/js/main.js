const requestPromise = require('request-promise');
const cheerio = require('cheerio');

connect();

function connect() {
    console.log("Connecting the website");
    // for version 1 of the app, Istanbul is used as the city
    let URL = "https://www.glassdoor.com/Reviews/istanbul-reviews-SRCH_IL.0,8_IM1160.htm";
    requestPromise({
        url: URL,
        headers: {
            'User-Agent': 'Request-Promise'
        }
    })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err){
            console.log("error on connection");
            console.log(err);
        });
}