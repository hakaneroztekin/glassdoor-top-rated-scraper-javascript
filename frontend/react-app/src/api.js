
const API_URL = "http://localhost:8080";

export function getAllCompanies(callback) {
    executeHTTPRequest(null, 'GET', '/company/get/all', callback);
    console.log("Returned from the get call..");
    console.log(callback);
}

function executeHTTPRequest(value, request, endpoint, callback) {
    endpoint = API_URL + endpoint;
    if (request === 'GET') {
        get(endpoint, callback);
    } else if (request === 'POST') {
        console.log("not implemented");
        // post(value, endpoint, callback);
    } else if (request === 'DELETE') {
        console.log("not implemented");
        // deleteRequest(value, endpoint);
    } else if (request === 'PUT') {
        console.log("not implemented");
        // update(value, endpoint);
    }
}

function get(endpoint, callback) {
    let request = new XMLHttpRequest();
    console.log("GET from " + endpoint);
    request.open('GET', endpoint);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();

    request.addEventListener('load', () => {
        console.log("Response received");
        let responseJSON = JSON.parse(request.responseText);
        console.log(responseJSON);
        if (responseJSON.error) return console.log(responseJSON.error);
        if (callback) callback(responseJSON);
    });

    request.addEventListener('error', (e) => {
        console.log("Error occurred");
        console.log(e);
    });

}

