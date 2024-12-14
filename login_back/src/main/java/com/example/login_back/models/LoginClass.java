package com.example.login_back.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Data
@Table
public class LoginClass {

    @Id
    @GeneratedValue
    private Integer id;


}
