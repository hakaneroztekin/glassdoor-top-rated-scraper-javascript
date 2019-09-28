package com.hakaneroztekin.glassdoorTopRated.dao;

import com.hakaneroztekin.glassdoorTopRated.model.Company;

import java.util.List;

public interface CompanyDAO {
    List<Company> getAllCompanies();

    void addCompany(Company company);
}