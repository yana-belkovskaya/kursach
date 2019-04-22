package com.example.Kursach.service;

import com.example.Kursach.model.Deposit;
import com.example.Kursach.model.User;
import com.example.Kursach.repository.DepositRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepositService {
    @Autowired
    DepositRepository depositRepository;
    public List<Deposit> findAll(){return depositRepository.findAll();}
    public Optional<Deposit> findById(int id){
        return depositRepository.findById(id);
    }
    public Deposit addDeposit(Deposit deposit)
    {
        return depositRepository.save(deposit);
    }
    public void deleteDeposit(int id) {
        depositRepository.deleteById(id);
    }
    public Deposit updateDeposit(int id,Deposit deposit){
        Deposit updatedDeposit=depositRepository.getOne(id);
        updatedDeposit.setCurrency(deposit.getCurrency());
        updatedDeposit.setDepositType(deposit.getDepositType());
        updatedDeposit.setSum(deposit.getSum());
        updatedDeposit.setFinishDate(deposit.getFinishDate());
        updatedDeposit.setStartDate(deposit.getStartDate());
        updatedDeposit.setPercent(deposit.getPercent());
        return depositRepository.save(updatedDeposit);
    }
}
