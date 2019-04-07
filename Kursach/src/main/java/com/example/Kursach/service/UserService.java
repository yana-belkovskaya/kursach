package com.example.Kursach.service;

import com.example.Kursach.model.User;
import com.example.Kursach.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public List<User> findAll() {
        return userRepository.findAll();
    }
    public User addUser(User user)
    {
        return userRepository.save(user);
    }
    public User updateUser(int id, User user) {
        User updatedUser = userRepository.getOne(id);
        updatedUser.setFirstName(user.getFirstName());
        updatedUser.setLastName(user.getLastName());
        updatedUser.setPhone(user.getPhone());
        return userRepository.save(updatedUser);

    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}
