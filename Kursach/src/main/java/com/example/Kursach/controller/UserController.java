package com.example.Kursach.controller;
import java.util.*;

import com.example.Kursach.config.AppConfig;
import com.example.Kursach.model.User;
import com.example.Kursach.service.UserService;
import com.example.Kursach.service.UserServiceImpl;
import org.apache.catalina.core.ApplicationContext;
import org.hibernate.service.spi.InjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    UserService userService;


    @CrossOrigin
    @GetMapping("/users")

    public List<User> getAllUsers() {

        List <User> users=userService.getAllUsers();

        return null;

    }


}