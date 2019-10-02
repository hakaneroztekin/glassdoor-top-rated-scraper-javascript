import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {blue, indigo} from "@material-ui/core/colors";

import Menu from './Components/Menu.js';
import CompanyList from "./Components/CompanyList";

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: blue[900]
        },
        primary: {
            main: indigo[700]
        },
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Lato"',
            'sans-serif'
        ].join(',')
    }
});

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <div>
                    <div>
                        <Menu />
                    </div>
                    <div>
                        <CompanyList />
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
