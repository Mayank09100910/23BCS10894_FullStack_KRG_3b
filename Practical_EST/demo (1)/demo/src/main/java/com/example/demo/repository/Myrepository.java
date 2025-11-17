package com.example.demo.repository;

import org.springframework.stereotype.Repository;

@Repository
public class Myrepository {

    public String getDataFromDatabase() {
        return "Dummy Data Retrieved From Database";
    }
}
