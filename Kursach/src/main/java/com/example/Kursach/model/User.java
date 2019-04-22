package com.example.Kursach.model;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
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
    @OneToMany(mappedBy="user",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Deposit> depositList;
public User(){}
public User(int id, String firstName, String middleName, String lastName, String dob, String sex, String phone, String address, String passportNumber, List<Deposit> depositList)
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
    this.depositList = depositList;
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

    public List<Deposit> getDepositList() {
        return depositList;
    }

    public void setDepositList(List<Deposit> depositList) {
        this.depositList = depositList;
    }
}



