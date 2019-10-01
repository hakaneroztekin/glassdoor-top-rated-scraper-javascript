import List from "@material-ui/core/List";
import Company from "./Company";
import Grid from "@material-ui/core/Grid";
import React from "react";



class CompanyList extends React.Component {
    render() {
        let mockCompany = JSON.stringify({
            "name": "LinkedIn",
            "rating": 4.4
        });
        console.log(JSON.parse(mockCompany)['name']);
        return(
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
            >
                <List>
                    <Company name={JSON.parse(mockCompany)['name']}/>
                    <Company/>
                    <Company/>
                </List>
            </Grid>
        );
    }
}

export default CompanyList;
