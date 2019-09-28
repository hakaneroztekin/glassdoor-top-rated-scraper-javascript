package com.hakaneroztekin.glassdoorTopRated.controller.impl;

import com.hakaneroztekin.glassdoorTopRated.controller.CompanyController;
import com.hakaneroztekin.glassdoorTopRated.model.Company;
import com.hakaneroztekin.glassdoorTopRated.service.CompanyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/company")
public class CompanyControllerImpl implements CompanyController {
    private static final Logger LOG = LoggerFactory.getLogger(CompanyController.class);

    private final CompanyService companyService;

    @Autowired
    public CompanyControllerImpl(CompanyService companyService) {
        this.companyService = companyService;
    }

    @Override
    @PostMapping(value = "/add")
    public ResponseEntity addCompany(@RequestBody Company company) {
        System.out.println("add request received");
        companyService.addCompany(company);
        return new ResponseEntity<String>("New company added" + company, HttpStatus.ACCEPTED);
    }
}