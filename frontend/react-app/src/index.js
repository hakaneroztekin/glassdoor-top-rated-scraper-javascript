import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name = 'John';
const signUpYear = 2018;
const element = <h1>Hello {name}, you are a member for {2019 - signUpYear} years.</h1>;

ReactDOM.render(
    element,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
