package com.example.Kursach.repository;


import com.example.Kursach.model.LogIn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogInRepository extends JpaRepository<LogIn,String> {
}
