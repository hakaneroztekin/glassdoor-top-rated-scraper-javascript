import List from "@material-ui/core/List";
import Company from "./Company";
import Grid from "@material-ui/core/Grid";
import React from "react";

import {getAllCompanies} from "../api";

class CompanyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: null,
        };
        console.log(this.state.companies);
    }

    componentDidMount() {
        getAllCompanies((allCompanies) => {
            this.setState({companies: allCompanies})
        });
    }

    createCompanyComponents = () => {
        let companyComponents = [];
        let companies = this.state.companies;
        if (companies != null) {
            for (let i = 0; i < companies.length; i++) {
                let component = [];
                component.push(<Company
                    rank={i + 1}
                    name={companies[i]['name']}
                    rating={companies[i]['rate']}
                    review={companies[i]['totalReview']}
                />);
                companyComponents.push(component);
            }
        }
        return companyComponents;
    };

    render() {
        let companies = this.state.companies;
        console.log("companies <");
        console.log(companies);
        return (
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
