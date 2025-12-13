package com.example.main;

import com.example.beans.Engine;
import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class); // Create Spring application context using ProjectConfig

        Vehicle v = context.getBean(Vehicle.class);
        Engine e = context.getBean(Engine.class);
    }
}