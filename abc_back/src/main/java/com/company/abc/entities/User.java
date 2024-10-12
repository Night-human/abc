package com.company.abc.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "pk_id")
    private int id;

    @Column(name = "u_name")
    private String name;

    @Column(name = "u_lastName")
    private String lastName;

    @Column(name = "u_phone")
    private String phone;

    @Column(name = "u_position")
    private String position;

}
