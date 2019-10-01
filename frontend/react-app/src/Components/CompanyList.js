import List from "@material-ui/core/List";
import Company from "./Company";
import Grid from "@material-ui/core/Grid";
import React from "react";



class CompanyList extends React.Component {
    render() {
        // let mockCompany = JSON.stringify({
        //     "name": "Google",
        //     "rating": 4.5
        // });
        // let company = JSON.parse(mockCompany);
        // console.log(JSON.parse(mockCompany)['name']);
        return(
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
            >
                <List>
                    {/*<Company name={company['name']} rating={company['rating']}/>*/}
                    <Company/>
                </List>
            </Grid>
        );
    }
}

export default CompanyList;
