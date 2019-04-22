package com.example.Kursach.service;

import com.example.Kursach.model.LogIn;
import com.example.Kursach.repository.LogInRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogInService {
    @Autowired
    LogInRepository logInRepository;
    public List<LogIn> findAll(){
        return logInRepository.findAll();
    }
}
