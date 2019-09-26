package com.hakaneroztekin.glassdoorTopRated.config;

import com.hakaneroztekin.glassdoorTopRated.dao.CompanyDAO;
import com.hakaneroztekin.glassdoorTopRated.dao.impl.CompanyDAOImpl;
import com.hakaneroztekin.glassdoorTopRated.model.Company;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public CompanyDAO companyDao() {
        return new CompanyDAOImpl();
    }
}
