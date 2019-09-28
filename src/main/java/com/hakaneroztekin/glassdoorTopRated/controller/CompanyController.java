package com.hakaneroztekin.glassdoorTopRated.controller;

import com.hakaneroztekin.glassdoorTopRated.model.Company;
import org.springframework.http.ResponseEntity;

public interface CompanyController {
    ResponseEntity addCompany(Company company);
}