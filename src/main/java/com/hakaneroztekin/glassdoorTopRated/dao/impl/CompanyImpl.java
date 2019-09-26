package com.hakaneroztekin.glassdoorTopRated.dao.impl;

import com.hakaneroztekin.glassdoorTopRated.dao.Company;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

@Repository
public class CompanyImpl implements Company {
    private static final Logger LOG = LoggerFactory.getLogger(CompanyImpl.class);

    private SessionFactory sessionFactory;

    @Override
    public void addCompany(Company company){
        Session session = sessionFactory.getCurrentSession();
        session.persist(company);
        LOG.info("Company saved. Details= " + company);
    }
}
