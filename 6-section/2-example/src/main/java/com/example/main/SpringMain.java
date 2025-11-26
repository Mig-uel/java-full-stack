package com.example.main;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle audi = context.getBean("audiVehicle",Vehicle.class);
        System.out.println("Vehicle name: " + audi.getName());

        Vehicle honda = context.getBean("hondaVehicle",Vehicle.class);
        System.out.println("Vehicle name: " + honda.getName());

        Vehicle porsche = context.getBean("porscheVehicle",Vehicle.class);
        System.out.println("Vehicle name: " + porsche.getName());
    }
}
