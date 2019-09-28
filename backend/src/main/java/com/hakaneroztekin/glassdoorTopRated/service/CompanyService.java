package com.hakaneroztekin.glassdoorTopRated.service;


import com.hakaneroztekin.glassdoorTopRated.model.Company;

import java.util.List;

public interface CompanyService {
    List<Company> getAllCompanies();

    void addCompany(Company companyDAO);
}
