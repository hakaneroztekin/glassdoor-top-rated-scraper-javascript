package com.hakaneroztekin.glassdoorTopRated.service.impl;

import com.hakaneroztekin.glassdoorTopRated.dao.CompanyDAO;
import com.hakaneroztekin.glassdoorTopRated.model.Company;
import com.hakaneroztekin.glassdoorTopRated.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {

    private final CompanyDAO companyDAO;

    @Autowired
    public CompanyServiceImpl(CompanyDAO companyDAO) {
        this.companyDAO = companyDAO;
    }

    @Override
    @Transactional
    public List<Company> getAllCompanies() { return companyDAO.getAllCompanies(); }

    @Override
    @Transactional
    public void addCompany(Company company) {
        companyDAO.addCompany(company);
    }
}