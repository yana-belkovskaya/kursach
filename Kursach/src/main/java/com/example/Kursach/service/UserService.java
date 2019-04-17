package com.example.Kursach.service;

import com.example.Kursach.model.User;
import com.example.Kursach.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public List<User> findAll() {
        return userRepository.findAll();
    }
    public Optional<User> findById(int id){
        return userRepository.findById(id);
    }
    public User addUser(User user)
    {
        return userRepository.save(user);
    }
    public User updateUser(int id, User user) {
        User updatedUser = userRepository.getOne(id);
        updatedUser.setFirstName(user.getFirstName());
        updatedUser.setMiddleName(user.getMiddleName());
        updatedUser.setLastName(user.getLastName());
        updatedUser.setDob(user.getDob());
        updatedUser.setSex(user.getSex());
        updatedUser.setPhone(user.getPhone());
        updatedUser.setAddress(user.getAddress());
        updatedUser.setPassportNumber(user.getPassportNumber());
        return userRepository.save(updatedUser);

    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}
