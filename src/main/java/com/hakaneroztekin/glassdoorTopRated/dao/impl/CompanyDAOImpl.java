package com.hakaneroztekin.glassdoorTopRated.dao.impl;

import com.hakaneroztekin.glassdoorTopRated.dao.CompanyDAO;
import com.hakaneroztekin.glassdoorTopRated.model.Company;
import lombok.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

@Repository
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class CompanyDAOImpl implements CompanyDAO {
    private static final Logger LOG = LoggerFactory.getLogger(CompanyDAOImpl.class);

    private SessionFactory sessionFactory;

    @Override
    public void addCompany(Company company){
        Session session = sessionFactory.getCurrentSession();
        session.persist(company);
        LOG.info("Company saved. Details= " + company);
    }
}
