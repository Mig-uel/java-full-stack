package com.example.main;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    public static void main(String[] args) {
        /*
         * The 'var' keyword was introduced in Java 10. Type inference is used in 'var' declarations,
         * in which it detects automatically the type of the variable based on the value assigned to it.
         */
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        // Retrieving the Vehicle bean from the Spring application context
        Vehicle v = context.getBean(Vehicle.class);
        System.out.println("Vehicle name: " + v.getName());

        // Retrieving the String bean from the Spring application context
        String str = context.getBean(String.class);
        System.out.println("String bean: " + str);

        // Retrieving the Integer bean from the Spring application context
        Integer num = context.getBean(Integer.class);
        System.out.println("Integer bean: " + num);

        /*
         * We do not need to explicitly cast the retrieved beans to their respective types
         * because the 'getBean' method is generic and infers the type based on the
         * class passed as an argument.
         * If such bean does not exist, Spring will throw a NoSuchBeanDefinitionException at runtime.
         */
    }
}
