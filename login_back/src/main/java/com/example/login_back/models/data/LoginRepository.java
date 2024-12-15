package com.example.login_back.models.data;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.login_back.models.LoginClass;

@Repository 
public interface LoginRepository extends JpaRepository<LoginClass, Integer> {

}
