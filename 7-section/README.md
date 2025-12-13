# Building Backend with Spring Boot

## Spring Boot: The HERO of Spring Framework

- Spring Boot was introduced in April 2014 to reduce some of the burdens of configuring and setting up Spring applications.
- With Spring Boot, developers can create web applications and microservices within minutes, thanks to its convention-over-configuration approach.
- Spring Boot is now one of the most popular frameworks for building Java-based backend applications.
- Spring Boot is a mandatory skill for Java developers due to the latest trends like Full Stack Development, Microservices, Serverless Architecture, Containerization, etc.
- Spring Boot simplifies the development process by providing pre-configured templates and starter dependencies, allowing developers to focus on writing business logic rather than boilerplate code.
- It also offers features like embedded servers (e.g., Tomcat, Jetty), which eliminate the need for deploying applications to external servers.
- Spring Boot's auto-configuration capabilities automatically set up the application based on the dependencies present in the classpath, further reducing the need for manual configuration.
- Additionally, Spring Boot provides production-ready features such as health checks, metrics, and monitoring, making it easier to manage and maintain applications in production environments.
- Overall, Spring Boot has revolutionized the way Java applications are built, making it faster, easier, and more efficient for developers to create robust backend systems.
- For more information, visit the [official Spring Boot website](https://spring.io/projects/spring-boot).

## What Are Spring Boot Starters?

Spring Boot Starters are a set of ready-made dependency bundles that simplify the process of adding commonly used libraries and frameworks to a Spring Boot application. They provide a convenient way to include all the necessary dependencies for a specific functionality with just a single dependency declaration in the project's build configuration file (e.g., `pom.xml` for Maven or `build.gradle` for Gradle).

Each Spring Boot Starter is designed to cater to a specific use case or technology stack, such as web development, data access, security, testing, and more. By using starters, developers can avoid the hassle of manually managing individual dependencies and their versions, as the starters handle this automatically.

**Why Use Spring Boot Starters?**

- They reduce manual setup of dependencies.
- They avoid version conflicts between libraries.
- They help you focus on writing application logic rather than managing dependencies.
- They speed up the development process by providing pre-configured setups for common use cases.

**How Do They Work?**

Instead of adding multiple dependencies for a specific functionality manually, you can simply include the relevant Spring Boot Starter in your build configuration. For example, to create a web application, you can add the `spring-boot-starter-web` dependency, which includes all the necessary libraries for building web applications with Spring MVC.

## `@SpringBootApplication` Annotation

The `@SpringBootApplication` annotation is a convenience annotation that combines three important annotations in Spring Boot:

- `@SpringBootConfiguration`: Indicates that the class is a Spring Boot configuration class.
- `@EnableAutoConfiguration`: Enables Spring Boot's auto-configuration mechanism, which automatically configures the application based on the dependencies present in the classpath.
- `@ComponentScan`: Enables component scanning, allowing Spring to discover and register beans in the application context.

By using the `@SpringBootApplication` annotation on the main application class, developers can simplify the configuration and setup of their Spring Boot applications. It serves as the entry point for the application and allows Spring Boot to bootstrap the application context, scan for components, and apply auto-configuration based on the dependencies.

**Why Use `@SpringBootApplication`?**

- Saves time - No need for long XML configurations.
- Auto-configures - Detects and configures beans based on classpath settings.
- Simplifies setup - Combines multiple annotations into one.
- Enhances readability - Makes it clear that this is the main application class.

## Spring Boot Auto-Configuration

Spring Boot Auto-Configuration is a powerful feature that automatically configures your Spring application based on the dependencies present in the classpath. It eliminates the need for manual configuration by providing sensible defaults and configurations for various components and libraries.

In simple terms, when you include a specific dependency in your project, Spring Boot's auto-configuration mechanism detects it and applies the necessary configurations to make it work seamlessly within your application.

**How Does Auto-Configuration Work?**

1. You add a dependency to your project (e.g., `spring-boot-starter-web`).
2. Spring Boot scans the classpath and identifies the presence of specific libraries.
3. Based on the detected libraries, Spring Boot applies default configurations to set up components like web servers, data sources, security settings, etc.
4. You can override these default configurations by providing your own custom configurations if needed.

For example, if `spring-boot-starter-web` is included in your project, Spring Boot will automatically configure an embedded web server (like Tomcat) and set up the necessary components for handling web requests.

Few of the default values assumed by Spring Boot Auto-Configuration are:

- `server.port=8080` - default port number
- `server.servlet.context-path=/` - default context path
- `logging.level.root=INFO` - default logging level

If you were using traditional Spring Framework, you would have to manually configure a web server, database connections, and other components. With Spring Boot Auto-Configuration, much of this setup is done for you automatically, allowing you to focus on writing your application logic rather than dealing with boilerplate configuration code.

Auto-Configuration is enabled by default in Spring Boot applications through the `@EnableAutoConfiguration` annotation, which is included in the `@SpringBootApplication` annotation. This makes it easy to get started with Spring Boot and take advantage of its powerful auto-configuration capabilities.

Mentioning `debug=true` in `application.properties` will give you a report of auto-configuration decisions made by Spring Boot.

If you want to disable a specific auto-configuration class, you can use the `@EnableAutoConfiguration(exclude={...})` attribute or set the property `spring.autoconfigure.exclude` in `application.properties`.
