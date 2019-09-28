package com.hakaneroztekin.glassdoorTopRated.controller.impl;

import com.hakaneroztekin.glassdoorTopRated.controller.CompanyController;
import com.hakaneroztekin.glassdoorTopRated.model.Company;
import com.hakaneroztekin.glassdoorTopRated.service.CompanyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping(value = "/get/all")
    public ResponseEntity getAllCompanies() {
        List<Company> allCompanies = companyService.getAllCompanies();
        return new ResponseEntity<>(allCompanies, HttpStatus.ACCEPTED);
    }

    @Override
    @PostMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addCompany(@RequestBody Company company) {
        System.out.println("add request received");
        companyService.addCompany(company);
        return new ResponseEntity<>(company, HttpStatus.ACCEPTED);
    }
}