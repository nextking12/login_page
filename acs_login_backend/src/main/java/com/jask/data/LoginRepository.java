package com.jask.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jask.models.LoginClass;

@Repository
public interface LoginRepository extends JpaRepository<LoginClass, Integer> {

}
