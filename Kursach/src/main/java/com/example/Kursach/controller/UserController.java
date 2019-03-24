package com.example.Kursach.controller;
import java.util.*;

import javax.validation.Valid;

import com.example.Kursach.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1")
public class UserController {

    @CrossOrigin
    @GetMapping("/users")

    public List<User> getAllUsers() {
        User user1= new User("Yana","Belkovskaya");
       User  user2= new User("yvvu","uhihijij");
        List <User> users=new ArrayList<>();
        users.add(user1);
        users.add(user2);
        return users;
    }


}