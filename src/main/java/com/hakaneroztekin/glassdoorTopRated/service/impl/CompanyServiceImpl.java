package com.hakaneroztekin.glassdoorTopRated.service.impl;

import com.hakaneroztekin.glassdoorTopRated.config.AppConfig;
import com.hakaneroztekin.glassdoorTopRated.dao.CompanyDAO;
import com.hakaneroztekin.glassdoorTopRated.model.Company;
import com.hakaneroztekin.glassdoorTopRated.service.CompanyService;

import lombok.Data;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;

@Service
@Data
public class CompanyServiceImpl implements CompanyService {

    private CompanyDAO companyDAO;

    @PostConstruct
    private void init() {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        companyDAO = context.getBean(CompanyDAO.class);
    }

    @Override
    @Transactional
    public void addCompany(Company company) {
        companyDAO.addCompany(company);
    }
}
