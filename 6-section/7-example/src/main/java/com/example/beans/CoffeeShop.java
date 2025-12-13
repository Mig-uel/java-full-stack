package com.example.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class CoffeeShop {
    private final Coffee coffee;

    @Autowired
    // @Qualifier is used to specify which bean to inject when multiple beans of the same type exist
    // It takes higher precedence than @Primary
    public CoffeeShop(@Qualifier("cappuccino") Coffee coffee) {
        this.coffee = coffee;
    }

    public Coffee getCoffee() {
        return coffee;
    }
}
