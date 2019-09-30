import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import {Header} from "./Components/Company";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {blue, indigo} from "@material-ui/core/colors";

import Menu from './Components/Menu.js';
import Company from './Components/Company.js';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
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
  // const classes = useStyles();
  return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <div>
              <Menu />
            </div>
            <div>
              <Grid
                  container
                  justify="space-evenly"
                  alignItems="center"
              >
                <List>
                  <Company />
                  <Company />
                  <Company />
                </List>
              </Grid>
            </div>
          </div>
        </ThemeProvider>
      </div>
  );
}

export default App;
