package com.example.beans;

import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
//@Scope("singleton") // This is the default scope, can be omitted
@Scope(BeanDefinition.SCOPE_SINGLETON) // Explicitly defining singleton scope
@Lazy // Bean will be lazily initialized // Created only when requested
public class MyService {
    public MyService() {
        System.out.println("MyService instance created");
    }
}
