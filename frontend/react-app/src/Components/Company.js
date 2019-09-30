import React from 'react';
// import './index.css';

import {makeStyles} from '@material-ui/core/styles';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
    listItem: {
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

export default function Company(props) {
    const classes = useStyles();
    return (
        <div>
            <ListItem button className={classes.listItem}>
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

