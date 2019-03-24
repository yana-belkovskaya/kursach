package com.example.Kursach.model;
import javax.persistence.*;
import org.springframework.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class User {

    private String firstName;
    private String lastName;
public User(String firstName,String lastName)
{
    this.firstName=firstName;
    this.lastName=lastName;

}
    @Column(name = "firstName", nullable = false)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    @Column(name = "lastName", nullable = false)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
}



