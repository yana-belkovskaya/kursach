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
   private String middleName;
    private String lastName;
    //@Column(name = "phone")
    private String dob;
    private String sex;
    private String phone;
    private String address;
    private String passportNumber;
public User(){}
public User(int id, String firstName, String middleName, String lastName, String dob, String sex, String phone, String address, String passportNumber)
{
    this.id=id;
    this.firstName=firstName;
    this.middleName = middleName;
    this.lastName=lastName;
    this.dob = dob;
    this.sex = sex;
    this.phone = phone;
    this.address = address;
    this.passportNumber = passportNumber;
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

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassportNumber() {
        return passportNumber;
    }

    public void setPassportNumber(String passportNumber) {
        this.passportNumber = passportNumber;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }
}



