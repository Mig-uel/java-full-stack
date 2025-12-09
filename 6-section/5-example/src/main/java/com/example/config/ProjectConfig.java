package com.example.config;

import com.example.beans.Person;
import com.example.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProjectConfig {
    @Bean
    Vehicle vehicle() {
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Toyota");
        return vehicle;
    }

 /* @Bean
    Person person() {
        Person person = new Person();
        person.setName("Omar");

        // Manually wire the Vehicle bean into the Person bean by calling the vehicle() method
        person.setVehicle(vehicle());

        return person;
    } */

    @Bean
    Person person(Vehicle vehicle) { // Method parameter injection
        Person person = new Person();
        person.setName("Omar");

        // Manually wire the Vehicle bean into the Person bean by using method parameter
        person.setVehicle(vehicle);

        return person;
    }
}
