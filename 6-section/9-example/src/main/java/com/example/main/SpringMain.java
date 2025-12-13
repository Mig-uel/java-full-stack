package com.example.main;

import com.example.beans.MyService;
import com.example.beans.UserSession;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class); // Create Spring application context using ProjectConfig

//        MyService service1 = context.getBean(MyService.class);
//        MyService service2 = context.getBean(MyService.class);
//        System.out.println(service1 == service2); // Should print 'true' if MyService is a singleton

        UserSession user1 = context.getBean(UserSession.class);
        UserSession user2 = context.getBean(UserSession.class);

        System.out.println(user1 == user2); // Should print 'false' if UserSession is a prototype
        System.out.println("User 1 session ID: " + user1.getSessionId());
        System.out.println("User 2 session ID: " + user2.getSessionId());
    }
}