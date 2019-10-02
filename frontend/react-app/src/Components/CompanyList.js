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

    createCompanyComponents = () => {
        let companyComponents = [];

        for(let i = 0; i < 1; i++) {
            let component = [];
            component.push(<Company name='Goog' rating='4.9' />);
            companyComponents.push(component);
        }
        return companyComponents;
    };

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
                    {this.createCompanyComponents()}
                </List>
            </Grid>
        );
    }
}

export default CompanyList;
