package com.example.beans;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Vehicle {
    private String name;

    /*
        This approach is called Field Injection
        This approach is not recommended for production code
        @Autowired also has a 'required' attribute which is true by default
        If we set required = false, then if there is no bean of type Engine,
        Spring will not throw an exception and will inject null instead
    */
    // @Autowired(required = false)
    private Engine engine; // Dependency on Engine bean

    public Vehicle() {
        System.out.println("Vehicle beans created by Spring");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void sayHello() {
        System.out.println("Printing hello from Vehicle class");
    }

    public Engine getEngine() {
        return engine;
    }

    /*
        This approach is called Setter Injection
        This approach is also not recommended for production code
    */
    @Autowired
    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "name='" + name + '\'' +
                '}';
    }

    @PostConstruct
    public void init() {
        this.name = "Kia";
    }
}
