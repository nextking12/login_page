package com.jask.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jask.data.LoginRepository;
import com.jask.models.LoginClass;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired LoginRepository loginRepository;

    @GetMapping("/login")
    public List <LoginClass> getLogins() {
        return loginRepository.findAll();
    }

    @PostMapping
    public LoginClass createLogin(@RequestBody LoginClass login){
        return loginRepository.save(login);
    }


    @GetMapping("/{id}")
    public ResponseEntity<LoginClass> getUserById(@PathVariable int id) {
        return loginRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
}
