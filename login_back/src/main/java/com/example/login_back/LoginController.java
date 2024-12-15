package com.example.login_back;

import java.util.List;

import javax.security.auth.login.AppConfigurationEntry.LoginModuleControlFlag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.login_back.models.LoginClass;
import com.example.login_back.models.data.LoginRepository;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")

public class LoginController {

    @Autowired 
    private LoginRepository loginRepository;

    @GetMapping
    public List<LoginClass> getAllLogins(){
        return loginRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoginClass> getUserById(@PathVariable int id) {
        return loginRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
            
    }

    @PostMapping("/logins")
    public LoginClass createLogin(@RequestBody LoginClass user) {
        return loginRepository.save(user);
    }


}