import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { typography } from '@material-ui/system';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundRepeat: 'cover',
        backgroundColor: 'rgba(235, 235, 235, 0.85)',
    },
    header: {
        backgroundColor: 'rgba(184, 15, 65, 1)'
    },
    list: {
        display: 'block',
        borderRadius: '3px',
        background: 'transparent',
        width: '60%',
        alignItems: 'center',
        padding: 20,
        color: 'palevioletred',
    },
    item: {
        color: 'crimson',
        marginTop: 25,
        border: '2px solid rgba(245, 233, 233, 1)',
        borderRadius: '4px',
        height: 100,
        flexGrow: 1,
        backgroundColor: 'white',
        overflow: 'hidden',
    }
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Header />
            </div>
            <div>
                <Grid
                    container
                    justify="space-evenly"
                    alignItems="center"
                >
                        <List className={classes.list}>
                            <Company />
                            <Company />
                            <Company />
                        </List>
                </Grid>
            </div>
        </div>
    );
}

export function Header(props) {
    const classes = useStyles();
    return (
        <div className="Header">
            <AppBar position="static" className={classes.header}>
                <Toolbar color="red">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography variant="h6">
                                Top Rated Companies @ Glassdoor
                    </Typography>
                {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </div>
    );
}

function Company(props) {
    const classes = useStyles();
    return (
        <div>
            <ListItem className={classes.item}>
                <ListItemAvatar>
                    <Avatar>
                        G
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Google" secondary="12000 reviews"
                />
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
