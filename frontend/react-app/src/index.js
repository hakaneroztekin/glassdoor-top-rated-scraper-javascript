import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from "react";

const API_URL = "http://localhost:8080";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

function executeHTTPRequest(value, request, endpoint, callback) {
    endpoint = API_URL + endpoint;
    if (request === 'GET') {
        console.log("not implemented");
        // get(endpoint, callback);
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


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();