package com.hakaneroztekin.glassdoorTopRated.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="company")
@ToString
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Company {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", length = 80)
    private String name;

    @Column(name = "profile_url", length = 120)
    private String profileURL;

    @Column(name = "picture_url", length = 120)
    private String pictureURL;

    @Column(name = "rate")
    private Double rate;

    @Column(name = "total_review")
    private Integer totalReview;
}
