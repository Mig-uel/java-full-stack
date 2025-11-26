package com.example.beans;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component // This annotation makes the class a Spring bean
public class Vehicle {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void sayHello() {
        System.out.println("Printing hello from Vehicle class");
    }

    @PostConstruct
    public void init() {
        this.name = "Honda";
    }
}
