package com.hakaneroztekin.glassdoorTopRated.model;

import javax.persistence.*;

@Entity
@Table(name="company")
public class Company {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "rate")
    private Double rate;

    @Column(name = "total_review")
    private Integer totalReview;
}
