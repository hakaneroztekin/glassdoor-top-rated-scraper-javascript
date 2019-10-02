import List from "@material-ui/core/List";
import Company from "./Company";
import Grid from "@material-ui/core/Grid";
import React from "react";

import {getAllCompanies} from "../api";

class CompanyList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            companies: null,
        };
        console.log(this.state.companies);
    }
    componentDidMount() {
       getAllCompanies((allCompanies) => {
               this.setState({companies : allCompanies})
           });
    }

    render() {
        let companies = this.state.companies;
        console.log("companies <");
        console.log(companies);
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
