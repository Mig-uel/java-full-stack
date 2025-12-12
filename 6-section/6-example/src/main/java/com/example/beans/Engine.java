package com.example.beans;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component // This annotation indicates that this class is a Spring bean
public class Engine {
    private  String name;

    public Engine() {
        System.out.println("Engine bean created by Spring");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Engine{" +
                "name='" + name + '\'' +
                '}';
    }

    @PostConstruct
    public void init() {
        this.name = "V8";
    }
}
