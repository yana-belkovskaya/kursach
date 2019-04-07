package com.example.Kursach.model;
import javax.persistence.*;

@Entity
//@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
   // @Column(name = "firstName")
    private String firstName;
   // @Column(name = "lastName")
    private String lastName;
    //@Column(name = "phone")
    private String phone;
public User(){}
public User(int id,String firstName, String lastName, String phone)
{
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone = phone;
}

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}



