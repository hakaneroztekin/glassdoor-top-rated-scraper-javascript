import List from "@material-ui/core/List";
import Company from "./Company";
import Grid from "@material-ui/core/Grid";
import React from "react";


class CompanyList extends React.Component {
    render() {
        return(
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
            >
                <List>
                    <Company/>
                    <Company/>
                    <Company/>
                </List>
            </Grid>
        );
    }
}

export default CompanyList;
