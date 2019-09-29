import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    item: {
        width: '100%',
        maxWidth: 720,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Grid
                    container
                    xs = "12"
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <List className={classes.item}>
                            <Company />
                            <Company />
                        </List>
                    </Grid>
                </Grid>
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
            <ListItem sp>
                <ListItemAvatar>
                    <Avatar>
                        G
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Google" secondary="12000 reviews"
                />
                <Divider orientation="vertical"/>
                <ListItemText primary="4.5 stars"/>
            </ListItem>
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
