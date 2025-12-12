# Introduction to Spring

## What is Spring?

Spring is a popular open-source framework for building enterprise-level Java applications. It helps developers write clean, modular, and testable code by providing a comprehensive programming and configuration model. Spring provides built-in features for handling databases, security, messaging, and more.

## Why Spring?

Spring makes Java development easier and more efficient by:

- Reducing boilerplate code.
- Promoting best practices like dependency injection and aspect-oriented programming.
- Supporting different architectures and platforms.
- Offering a wide range of modules for various functionalities (e.g., Spring MVC, Spring Data, Spring Security).
- Works well with other frameworks and libraries.

> Introduced in 2003, the Spring Framework is a comprehensive solution designed to simplify Java enterprise application development. It was created to tackle the challenges of building large-scale applications by promoting a unified programming model and providing a wide range of features that enhance productivity and maintainability.

## Introduction to Spring Core

### What is Spring Core?

Spring Core is the foundation of the entire Spring Framework ecosystem. It provides the fundamental principles, base classes, and core mechanisms that power all other Spring modules and projects.

The entire Spring Framework is built upon the Spring Core module.

### Key Features of Spring Core

Spring Core consists of the following essential components:

- **Inversion of Control (IoC)**: A design principle where the control of object creation and management is transferred from the application code to the Spring container. This promotes loose coupling and enhances testability.
- **Dependency Injection (DI)**: A specific implementation of IoC that allows objects to receive their dependencies from an external source (the Spring container) rather than creating them internally. This makes it easier to manage and test components.
- **Beans**: The objects that are managed by the Spring container. Beans are defined in configuration files or through annotations, and the container is responsible for their lifecycle and dependencies.
- **Application Context**: The central interface for accessing the Spring container. It provides methods for retrieving beans, managing their lifecycle, and handling configuration.
- **IoC Container**: The core component that manages the lifecycle of beans, including their creation, configuration, and destruction. It reads the configuration metadata and instantiates the beans accordingly.

## Spring vs Spring Boot

**Spring Framework** is a powerful **foundation** for building Java applications, providing a wide range of features and modules for various functionalities. It requires significant configuration and setup to get started.

**Spring Boot**, on the other hand, is a **framework built on top of Spring** that simplifies the development process by providing convention over configuration. It offers auto-configuration, starter dependencies, and embedded servers, allowing developers to quickly create standalone applications with minimal setup.

**Spring Boot is NOT a replacement for Spring Framework**, but rather an extension that enhances productivity and reduces boilerplate code.

> Think of **Spring** as a toolbox full of various tools (modules) for building Java applications, while **Spring Boot** is like a pre-assembled kit that provides you with the essential tools and configurations to get started quickly.

## What is Inversion of Control (IoC) and Dependency Injection (DI)?

### Inversion of Control (IoC)

Inversion of Control (IoC) is a software design principle that defines how objects are created and managed in an application. It does not create objects directly; instead, it outlines a way for their creation and dependency management to be handled by an external entity, typically a framework or container.

With IoC, the control flow of the application is reversed. Instead of the programmer managing the flow of the application, a framework or service takes over this responsibility, ensuring objects and their dependencies are handled appropriately.

- Normally, in Java, we create objects manually using the `new` keyword.
- With IoC, Spring manages object creation and dependencies automatically.
- It reduces manual coding and makes the application more modular, flexible, and testable.

### Dependency Injection (DI)

Dependency Injection (DI) is a design pattern used to implement IoC.

With DI, the responsibility of creating and managing objects is transferred from the application to the Spring IoC container. The container injects the required dependencies into the objects at runtime, rather than the objects creating their own dependencies. This approach reduces coupling between objects by allowing the framework to dynamically provide the required dependencies at runtime.

- DI is a way of providing dependencies to a class instead of creating them inside the class.
- Helps in brining loose coupling between objects.
- Spring automatically injects the required dependencies into the objects when they are created by the IoC container.

## Advantages of IoC & DI

### Loose Coupling

Loose coupling means that different parts of a system are not tightly dependent on each other. This makes it easier to change or replace components without affecting the entire system. Instead, they are connected in a way that changes in one part have little to no impact on others.

- Ex: Imagine using a TV remote control. The remote can control different TVs, and the TVs can work with different remotes. They are not tightly bound to each other. Nether depends on the specific details of the other - they just need to follow a common interface (like using infrared signals).

#### Why is Loose Coupling Important?

- **Easier Maintenance**: When components are loosely coupled, you can change or update one part of the system without affecting others. This makes it easier to maintain and evolve the system over time.
- **Improved Flexibility**: Loose coupling allows you to swap out components or replace them with different implementations without major changes to the overall system. This flexibility is crucial in dynamic environments where requirements may change frequently.
- **Better Reusability**: Loosely coupled components can be reused in different contexts or applications. Since they are not tightly bound to specific implementations, they can be easily integrated into new systems.
- **Enhanced Testability**: Loosely coupled components are easier to test in isolation. You can mock or stub dependencies during testing, allowing you to focus on testing individual components without worrying about their interactions with others.
- **Scalability**: As systems grow in complexity, loose coupling helps manage that complexity by keeping components independent. This makes it easier to scale the system by adding or modifying components without introducing tight dependencies.
- **Easier Collaboration**: In team environments, loose coupling allows different developers or teams to work on separate components without interfering with each other's work. This promotes parallel development and reduces conflicts.

### More Advantages of IoC & DI

- Minimizes the amount of code required for dependency management.
- Makes Unit testing easier by allowing dependencies to be mocked or stubbed.
- Increases system maintainability and modularity.
- Allows for concurrent and independent development of components.
- Replacing modules has minimal impact on the overall system.
- Enhances code readability and organization.
- Facilitates better separation of concerns.

## What is Spring Bean, Spring Context, and IoC Container?

### Spring Bean

A Spring Bean is any normal Java class that is instantiated and managed by the Spring IoC container. These beans form the backbone of a Spring application and are created, configured, and managed by the Spring framework.

#### How Beans Are Created

Beans are instantiated by the container based on the **configuration metadata** provided by the developer. This metadata can be defined in various ways:

- **XML Configuration**: Beans can be defined in XML files using `<bean>` tags (legacy approach).
- **Annotations**: Using annotations like `@Component`, `@Service`, `@Repository`, and `@Controller` to mark classes as beans.
- **Java Configuration**: Using `@Configuration` classes with `@Bean` methods to define beans programmatically.

#### Bean Lifecycle Management

The Spring IoC container manages the entire lifecycle of beans, including:

- Instantiation
- Dependency Injection
- Initialization
- Destruction
- Scope management (singleton, prototype, request, session, etc.)

It also ensures that any required dependencies are injected into the beans when they are created.

### Spring Context

The Spring Context, also known as the Application Context, is like the "memory" of your Spring application, where Spring manages all the objects (beans) it needs to run your application. It is a central interface that provides configuration information to the application and allows access to the beans managed by the Spring IoC container.

By default, Spring does not know about the objects or components you define in your application.

To make Spring aware of them, you need to register these components with the Spring Context using:

- Annotations like `@Component`, `@Service`, etc.
- Explicit bean definitions in XML or Java configuration.

Once registered, the Spring Context can create, configure, and manage these components throughout the application's lifecycle.

### IoC Container

The IoC (Inversion of Control) Container is the core component of the Spring Framework. Its main job is to manage the objects (beans) in your application. It is responsible for:

- Creating instances (beans) of your classes.
- Configuring these instances based on the metadata you provide (like XML, annotations, or Java config) (e.g., setting properties, injecting dependencies).
- Managing the lifecycle of these instances (initialization, destruction, etc.).

#### Types of IoC Containers in Spring

There are two main types of IoC containers in Spring:

1. **BeanFactory**

- The simplest container that provides basic support for dependency injection.
- It provides the basic functionality of managing beans.
- Suitable for lightweight applications with minimal features.
- It is lazy-loaded, meaning beans are created only when requested.
- `org.springframework.beans.factory.BeanFactory` is the root interface.

2. **ApplicationContext**

- A more advanced container that builds on top of BeanFactory.
- It provides additional features like internationalization, event propagation, and integration with Spring's AOP.
- It is eager-loaded, meaning all singleton beans are created at startup.
- `org.springframework.context.ApplicationContext` is the root interface.

## Stereotype Annotations in Spring

Spring provides stereotype annotations, which are special annotations used to mark classes as Spring-managed components. These annotations automatically register Spring Beans in the application context, making it easier to manage and organize your code. These annotations help simplify bean configuration and promote a more modular and maintainable codebase.

Stereotype annotations help Spring identify and manage different types of components in your application, such as services, repositories, and controllers.

Here are some commonly used stereotype annotations in Spring:

- `@Component`: A generic stereotype annotation used to mark a class as a Spring component. It is the base annotation for all other stereotype annotations.
- `@Service`: A specialization of `@Component` used to mark a class as a service layer component. It indicates that the class contains business logic.
- `@Repository`: A specialization of `@Component` used to mark a class as a data access component. It indicates that the class interacts with the database or data source.
- `@Controller`: A specialization of `@Component` used to mark a class as a web controller component. It indicates that the class handles HTTP requests and responses in a web application.
- `@RestController`: A combination of `@Controller` and `@ResponseBody`, used to create RESTful web services. It indicates that the class handles HTTP requests and returns data directly in the response body.

These stereotype annotations help Spring automatically detect and register the annotated classes as beans in the application context, allowing for easier dependency injection and management of components throughout the application.

Use `@ComponentScan` on a configuration class to enable component scanning, which allows Spring to automatically discover and register beans based on these stereotype annotations.

Example:

```java
@Configuration
@ComponentScan(basePackages = "com.example.myapp")
public class AppConfig {
    // Configuration code
}
```

This configuration class tells Spring to scan the specified package for classes annotated with stereotype annotations and register them as beans in the application context.

### Layers in a Backend Application

In a typical backend application, the code is organized into different layers, each responsible for specific functionalities. Here are the common layers found in a backend application:

1. **Controller/Presentation Layer**: This layer handles incoming HTTP requests, processes them, and returns appropriate responses. It acts as the entry point for the application and is responsible for managing user interactions.
   - Receives requests, calls the service layer, and returns responses (e.g., JSON, HTML).
2. **Service/Business Logic Layer**: This layer contains the core business logic of the application. It processes data, applies business rules, and coordinates interactions between different components. Services are typically marked with the `@Service` annotation.
   - Implements the main functionality of the application, validates data, and enforces business rules.
3. **Data Access Layer (Repository Layer)**: This layer is responsible for interacting with the database or data source. It performs CRUD (Create, Read, Update, Delete) operations and abstracts the underlying data access logic. Repositories are typically marked with the `@Repository` annotation.
   - Handles data persistence (CRUD operations), uses Spring JPA or JDBC to interact with the database.
   - Performs queries using JPQL or native SQL.
4. **Model/Domain Layer**: This layer represents the data structures and entities used in the application. It defines the business objects and their relationships. Models are typically plain Java objects (POJOs) that encapsulate data and behavior.
   - Represents the core business entities and data structures used in the application.
5. **Configuration Layer**: This layer contains configuration classes and settings for the application. It defines beans, component scanning, and other application-level configurations. Configuration classes are typically marked with the `@Configuration` annotation.
   - Defines beans, component scanning, and other application-level configurations.

By organizing the code into these layers, developers can achieve better separation of concerns, modularity, and maintainability in their backend applications. Each layer has a specific role and interacts with other layers to fulfill the application's requirements.

## `@Bean` vs `@Component`

In Spring, both `@Bean` and `@Component` are used to define beans that are managed by the Spring IoC container, but they serve different purposes and are used in different contexts.

### `@Bean`

- `@Bean` is used to define a bean explicitly within a Java configuration class.
- It is typically used when you want to create and configure a bean programmatically.
- The method annotated with `@Bean` returns an instance of the bean, and Spring manages its lifecycle.
- It is often used for third-party classes or when you need more control over the bean creation process.
- One or more instances of the bean can be created based on the method's return type and scope.
- We can create an object instance of any type of class including present inside libraries like Spring, etc.
- Developer will have full control in creating and configuring the bean.
- Spring framework creates the bean based on the instructions provided by the developer inside the method.

Example:

```java
@Configuration
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyServiceImpl();
    }
}
```

### `@Component`

- `@Component` is a class-level annotation used to mark a class as a Spring-managed component.
- It is typically used for classes that are part of your application and can be automatically detected through component scanning.
- When a class is annotated with `@Component`, Spring automatically detects it and registers it as a bean in the application context.
- It is often used for application-specific classes like services, repositories, and controllers.
- The class itself is the bean, and Spring manages its lifecycle.
- Only one instance of teh class is created by default (singleton scope) and added to the Spring context.
- We can create an object instance for application class only which are part of our project.
- Bean instances can be created with very less code by using stereotype annotations like `@Component`, `@Service`, etc.
- Developer has less control over the bean creation process as Spring handles it automatically.
- Spring framework is in charge of creating the bean and post that the developer can use it wherever required.

Example:

```java
@Component
public class MyServiceImpl implements MyService {
    // Implementation code
}
```

## Introduction to Beans Wiring Inside Spring

In Java web applications, object often delegate tasks to other objects, creating dependencies between them. Similarly, in Spring, when we define multiple beans, some beans may rely on other beans to function properly. Bean wiring is the process of connecting these dependent beans together so that they can work seamlessly within the Spring IoC container.

Manually managing these dependencies can be cumbersome and error-prone, so Spring provides automatic wiring capabilities (Autowiring) to simplify this process. Autowiring allows Spring to automatically resolve and inject the required dependencies into beans based on their types or names.

## What is Autowiring in Spring?

Autowiring is a feature in the Spring Framework that allows the Spring IoC container to automatically resolve and inject dependencies into beans. Instead of manually specifying how beans should be wired together, autowiring enables Spring to automatically identify and inject the required dependencies based on certain criteria.

- It eliminates the need for manual object creating using the `new` keyword.
- Spring finds the right dependencies and injects them into the beans automatically.
- Makes applications loosely coupled and easier to maintain.

### Why Use Autowiring?

- Reduces boilerplate code for dependency management - No need for manual new object creation.
- Improves code readability - Dependencies are clearly defined through annotations.
- Supports loose coupling - Beans can be easily replaced or modified without affecting other components.
- Spring manages dependencies automatically, reducing the risk of errors.

### Ways to Autowire Beans in Spring

- Spring provides three main ways to perform autowiring:
  - By Field Injection (using `@Autowired` on fields)
  - By Setter Injection (using `@Autowired` on setter methods)
  - By Constructor Injection (using `@Autowired` on constructors)

Each method has its own advantages and use cases, and developers can choose the one that best fits their needs.

## Autowiring Using Field Injection

Field injection is a way to automatically inject dependencies directly into the fields of a class using the `@Autowired` annotation. This method allows Spring to set the value of the field without requiring explicit setter methods or constructors.

Spring looks for a matching bean type and injects it automatically into the annotated field. This is a simple and commonly used method for autowiring dependencies.

Example:

```java
@Component // Marks this class as a Spring component
class Engine {}

@Component // Marks this class as a Spring component
class Car {
   @Autowired // Automatically injects the Engine bean into this field
   private Engine engine; // Field Injection
}
```

While `@Autowired` by type (field injection) is convenient, it has some drawbacks:

- When using field-based autowiring, dependencies cannot be easily mocked or replaced during unit testing, making it harder to isolate and test individual components.
- With field injection, it is not immediately clear which dependencies a class requires. This can make the code less readable and harder to understand, especially for new developers joining the project.
- Field injection does not allow for immutability, or dependencies cannot be declared as `final`, which can lead to unintended modifications of the dependencies after the object is created.

`@Autowired(required = false)` can be used to avoid the `NoSuchBeanDefinitionException` when a matching bean is not found. However, this can lead to `NullPointerException` if the dependency is accessed without checking for null.

## Autowiring Using Setter Injection

Setter injection is a method of autowiring dependencies in Spring by using setter methods. In this approach, the `@Autowired` annotation is placed on the setter method of a class, allowing Spring to inject the required dependency when the setter is called.

Spring injected the dependency using a setter method defined in the class. This method provides more flexibility compared to field injection, as it allows for optional dependencies and better testability.

Example:

```java
@Component // Marks this class as a Spring component
class Engine {}

@Component // Marks this class as a Spring component
class Car {
   private Engine engine;

   @Autowired // Automatically injects the Engine bean using this setter method
   public void setEngine(Engine engine) { // Setter Injection
       this.engine = engine;
   }
}
```

Setter injection has the same drawbacks as field injection.

- Less commonly used compared to constructor injection.
- Dependencies can still be modified after object creation, which may lead to unintended side effects.
- Requires additional boilerplate code for setter methods, which can clutter the class definition.
- Like field injection, it can make it harder to identify required dependencies at a glance.

## Autowiring Using Constructor Injection

Constructor injection is a method of autowiring dependencies in Spring by using constructor parameters. In this approach, the `@Autowired` annotation is placed on the constructor of a class, allowing Spring to inject the required dependencies when the object is created.

Spring injects the dependencies through the constructor parameters. This method is considered the most robust and preferred way of autowiring, as it ensures that all required dependencies are provided at the time of object creation.

Example:

```java
@Component // Marks this class as a Spring component
class Engine {}

@Component // Marks this class as a Spring component
class Car {
   private final Engine engine;

   @Autowired // Automatically injects the Engine bean using this constructor
   public Car(Engine engine) { // Constructor Injection
       this.engine = engine;
   }
}
```

Constructor injection is the preferred modern approach and works well with immutability and testing.

- Ensures that all required dependencies are provided at the time of object creation, making the object fully initialized and ready to use.
- Promotes immutability by allowing dependencies to be declared as `final`, preventing unintended modifications after the object is created.
- Enhances testability by allowing dependencies to be easily mocked or replaced during unit testing, enabling better isolation of components.
- Makes it clear which dependencies a class requires, improving code readability and maintainability.
- Avoids the possibility of `NullPointerException` since all dependencies must be provided when the object is created.
- Reduces boilerplate code compared to setter injection, as there is no need for additional setter methods.
- Encourages better design practices by promoting the use of constructor parameters for dependency management.
