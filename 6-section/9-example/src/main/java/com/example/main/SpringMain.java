package com.example.main;

import com.example.beans.MyService;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class); // Create Spring application context using ProjectConfig

        MyService service1 = context.getBean(MyService.class);
        MyService service2 = context.getBean(MyService.class);

        System.out.println(service1 == service2); // Should print 'true' if MyService is a singleton
    }
}