import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function App() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Company />
            </div>
        </div>
    );
}

function Header(props) {
    return (
            <head>
                <title>Top Rated Companies @ Glassdoor</title>
            </head>
    );
}

function Company(props) {
    return (
        <div className="Company">
            <h1>Google</h1>
            <h2>4.4 Point</h2>
            <h2>12000 Reviews</h2>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
