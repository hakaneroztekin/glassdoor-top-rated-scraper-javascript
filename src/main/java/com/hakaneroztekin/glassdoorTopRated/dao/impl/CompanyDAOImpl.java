package com.hakaneroztekin.glassdoorTopRated.dao.impl;

import com.hakaneroztekin.glassdoorTopRated.dao.CompanyDAO;
import com.hakaneroztekin.glassdoorTopRated.model.Company;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class CompanyDAOImpl implements CompanyDAO {
    private static final Logger LOG = LoggerFactory.getLogger(CompanyDAOImpl.class);

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public void addCompany(Company company) {
        entityManager.persist(company);
        LOG.info("Company saved. Details= " + company);
    }
}