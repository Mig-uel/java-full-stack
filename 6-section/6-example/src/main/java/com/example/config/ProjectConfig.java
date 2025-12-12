package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration // Indicates that this class contains Spring configuration
@ComponentScan({"com.example.beans"}) // Specifies the packages to scan for Spring components
public class ProjectConfig {
}
