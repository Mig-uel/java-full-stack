package com.example.beans;

public class Vehicle {
    private String name;

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

    @Override
    public String toString() {
        return "Vehicle{" +
                "name='" + name + '\'' +
                '}';
    }
}
