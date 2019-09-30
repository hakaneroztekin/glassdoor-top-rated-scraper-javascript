import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core";
// import './index.css';
const useStyles = makeStyles(theme => ({
    menu: {

    }
}));

export default function Menu(props) {
    const classes = useStyles();
    return (
        <div className="Menu">
            <AppBar position="static">
                <Toolbar>
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
