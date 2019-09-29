import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// 'Google',
//     'https://www.glassdoor.com/Overview/Working-at-Google-EI_IE9079.11,17.htm',
//     'https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png',
//     4.4,
//     12000
function Company(props) {
    return (
        <div className="Company">
            <h1>Google</h1>
            <h2>4.4 Point</h2>
            <h2>12000 Reviews</h2>
        </div>
    )
}

function App() {
    return (
        <div>
            <Company />
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
