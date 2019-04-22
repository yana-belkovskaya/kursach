package com.example.Kursach.model;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Deposit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int deposit_id;
    private Date startDate;
    private Date finishDate;
    private float sum;
    private String depositType;
    private  String currency;
    private float percent;
    @ManyToOne
    @JoinColumn(name = "client_id")
    @JsonBackReference
    private User user;
    public Deposit(){};
    public Deposit(int deposit_id, Date startDate, Date finishDate, float sum, String depositType, String currency, float percent, User user){
        this.deposit_id=deposit_id;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.sum = sum;
        this.depositType = depositType;
        this.currency = currency;
        this.percent = percent;
        this.user = user;
    };

    public int getDeposit_id() {
        return deposit_id;
    }

    public void setDeposit_id(int deposit_id) {
        this.deposit_id = deposit_id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    public float getSum() {
        return sum;
    }

    public void setSum(float sum) {
        this.sum = sum;
    }

    public String getDepositType() {
        return depositType;
    }

    public void setDepositType(String depositType) {
        this.depositType = depositType;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public float getPercent() {
        return percent;
    }

    public void setPercent(float percent) {
        this.percent = percent;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
