package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.component.Mycomponent;
import com.example.demo.repository.Myrepository;

@Service
public class Myservice {

    @Autowired
    private Mycomponent myComponent;

    @Autowired
    private Myrepository myRepository;

    public void processTask() {
        myComponent.showMessage();

        String data = myRepository.getDataFromDatabase();
        System.out.println("📢 Service Received Data: " + data);
    }
}
