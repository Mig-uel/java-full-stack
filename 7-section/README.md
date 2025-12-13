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

## Building RESTful APIs with Spring Boot

**What is a RESTful API?**

RESTful APIs (Representational State Transfer) are a set of architectural principles for designing networked applications. They use standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources, which are identified by unique URIs (Uniform Resource Identifiers). RESTful APIs are stateless, meaning that each request from a client to a server must contain all the information needed to understand and process the request.

A REST API:

- Allows clients (e.g., web browsers, mobile apps) to interact with server-side resources.
- Returns data in a structured format, typically JSON or XML.
- Is widely used for building web services and enabling communication between different systems.

| HTTP Method | Action                                      |
| ----------- | ------------------------------------------- |
| GET         | Retrieve a resource or a list of resources. |
| POST        | Create a new resource.                      |
| PUT         | Update an existing resource.                |
| DELETE      | Remove a resource.                          |
| PATCH       | Partially update a resource.                |

In Spring Boot, a REST API is created using the `@RestController` annotation, which combines `@Controller` and `@ResponseBody`. This means that the methods in a `@RestController` return data directly in the response body, typically in JSON format.

`@RestController` = `@Controller` + `@ResponseBody`

- `@Controller`: Indicates that the class is a Spring MVC controller.
- `@ResponseBody`: Indicates that the return value of a method should be bound to the web response body.

In simple terms:

1. The class is treated as a controller that handles HTTP requests.
2. Each method in the class automatically serializes the return value to JSON (or XML) and sends it back in the HTTP response.

Example:

```java
@RestController // Marks the class as a REST controller
@RequestMapping("/api/v1/users") // Base URL for all endpoints in this controller
public class UserController {
  @GetMapping("/all") // Handles GET requests to /api/v1/users/all
  public List<User> getAllUsers() {
    // Logic to retrieve and return a list of users
    return List.of("User1", "User2", "User3");
  }
}
```

## REST API Best Practices

When designing and building RESTful APIs, it's important to follow best practices to ensure that your API is efficient, maintainable, and easy to use.

1. **Use Nouns for Resource Names**: Use nouns, not verbs, to represent resources. For example, use `/users` instead of `/getUsers`.

- `GET /api/v1/users` - Retrieve a list of users.
- `POST /api/v1/users` - Create a new user.
- `GET /api/v1/users/{id}` - Retrieve a specific user by ID.
- `PUT /api/v1/users/{id}` - Update a specific user by ID.
- `DELETE /api/v1/users/{id}` - Delete a specific user by ID.

Avoid using actions in the endpoint names.

- Bad: `GET /api/v1/getAllUsers`
- Good: `GET /api/v1/users`

2. **Use API Versioning**: Include versioning in your API endpoints to manage changes and updates without breaking existing clients.

When you build REST APIs, over time, you may need to make changes that are not backward compatible.

- Adding new fields.
- Changing request/response formats.
- Modifying business logic.
- Deprecating old features.

To handle these changes gracefully, it's essential to version your API from the beginning. This allows clients to continue using the older version while you introduce new features in a new version.

There are several ways to version your API:

- URL Versioning (Path Versioning): Include the version number in the URL path.
  - Example: `/api/v1/users`, `/api/v2/users`
- Request Parameter Versioning: Use a query parameter to specify the version.
  - Example: `/api/users?version=1`, `/api/users?version=2`
- Header Versioning: Use custom headers to specify the version.
  - Example: `X-API-Version: 1`, `X-API-Version: 2`
- Media Type Versioning (Content Negotiation): Use the `Accept` header to specify the version.
  - Example: `Accept: application/vnd.example.v1+json`, `Accept: application/vnd.example.v2+json`

Choose the versioning strategy that best fits your use case and team preferences. URL versioning is the most common and straightforward approach.

## H2 In-Memory Database

H2 is a lightweight, open-source relational database management system written in Java. It is designed to be fast, efficient, and easy to use, making it an excellent choice for development, testing, and prototyping applications.

H2 is used for:

- Development and Testing: H2 is often used as an in-memory database during development and testing phases. It allows developers to quickly set up a database without the need for complex configurations or installations.
- Embedded Applications: H2 can be embedded directly into Java applications, making it suitable for applications that require a lightweight database solution.
- Standalone Database: H2 can also be run as a standalone database server, allowing multiple applications to connect to it.

H2 supports standard SQL and JDBC API, making it compatible with most Java applications. It also provides a web-based console for managing and querying the database, which can be accessed through a web browser.

**Why Use H2 Database?**

- No need to install or configure a separate database server. It runs in-memory or as a file-based database.
- Fast and lightweight, making it ideal for development and testing.
- Supports standard SQL and JDBC, ensuring compatibility with Java applications.
- Provides a web-based console for easy database management.
- Can be easily integrated with Spring Boot applications using the `spring-boot-starter-data-jpa` dependency.

To use H2 in a Spring Boot application, you can include the following dependency in your `pom.xml` file:

```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

Once the dependency is added, Spring Boot will automatically configure H2 as the default database for your application. You can access the H2 console by navigating to `http://localhost:8080/h2-console` in your web browser (make sure to enable it in your application properties if needed).

## Spring Boot Database Initialization

Spring Boot automatically initializes the database schema and data at application startup using SQL scripts or Java-based configuration. This feature is particularly useful for setting up the database schema and populating it with initial data during development and testing.

Spring Boot auto-creates DB schema and inserts initial data using the following files:

- `schema.sql`: This file contains SQL statements to create the database schema, such as creating tables, indexes, and constraints. Spring Boot executes this script at startup to set up the database structure.
- `data.sql`: This file contains SQL statements to insert initial data into the database tables. Spring Boot executes this script after the schema has been created to populate the database with sample or default data.

By default, Spring Boot looks for these files in the `src/main/resources` directory of your project. If the files are present, Spring Boot will automatically execute them during application startup.

You can customize the behavior of database initialization by setting properties in the `application.properties` file. For example:

```properties
spring.datasource.initialization-mode=always
spring.datasource.schema=classpath:schema.sql
spring.datasource.data=classpath:data.sql
```

- `spring.datasource.initialization-mode`: Controls when the database initialization should occur. The default value is `embedded`, which means it only runs for embedded databases like H2, HSQL, or Derby. You can set it to `always` to run the scripts for any database.
- `spring.datasource.schema`: Specifies the location of the schema SQL file.
- `spring.datasource.data`: Specifies the location of the data SQL file.

## Spring Data

Before Spring Data, developers had to write a lot of boilerplate code to interact with databases using JDBC or JPA. This involved creating entity classes, repositories, and writing SQL queries manually.

1. Establish a connection to the database.
2. Create SQL queries to perform CRUD operations.
3. Execute the queries.
4. Process the results and convert them into POJO (Plain Old Java Object) classes.
5. Close resources and connections.
6. Handle exceptions and errors.

Spring Data simplifies this process by providing a set of abstractions and utilities that reduce the amount of boilerplate code required for database interactions. It offers a consistent programming model across different data stores, including relational databases, NoSQL databases, and more.

## Introduction to Spring Data & Spring Data JPA

Spring Data is part of the larger Spring ecosystem and provides a unified way to access different types of data stores. It offers a set of abstractions and utilities that simplify the process of working with databases, making it easier for developers to perform CRUD operations, pagination, sorting, and more.

Spring Data is an umbrella project that includes various modules for different data stores, such as:

- Spring Data JPA: For relational databases using JPA (Java Persistence API).
- Spring Data MongoDB: For MongoDB NoSQL database.
- Spring Data Redis: For Redis key-value store.
- Spring Data Cassandra: For Apache Cassandra NoSQL database.
- Spring Data Elasticsearch: For Elasticsearch search engine.

### Why Use Spring Data?

Spring Data offers several benefits that make it a popular choice for database interactions in Java applications:

- Reduces boilerplate code: Spring Data provides a repository abstraction that eliminates the need for writing repetitive CRUD operations.
- Consistent programming model: It offers a unified way to access different data stores, making it easier to switch between databases.
- Powerful query capabilities: Spring Data supports derived queries, custom queries, and query methods, allowing developers to perform complex database operations with ease.
- Integration with Spring ecosystem: Spring Data seamlessly integrates with other Spring projects, such as Spring Boot, Spring Security, and Spring MVC.
- Community support: Spring Data has a large and active community, providing extensive documentation, tutorials, and support.

Spring Data supports various data stores, including relational databases (e.g., MySQL, PostgreSQL), NoSQL databases (e.g., MongoDB, Cassandra), key-value stores (e.g., Redis), and search engines (e.g., Elasticsearch). This versatility allows developers to choose the most suitable data store for their application's requirements while still benefiting from the consistent programming model provided by Spring Data.

### Spring Data vs Spring Data JPA

Spring Data and Spring Data JPA are related but distinct components within the Spring ecosystem.

Spring Data

- Spring Data is an umbrella project that provides a unified way to access different types of data stores.
- It provides common abstractions and utilities for working with various databases, including relational databases, NoSQL databases, key-value stores, and search engines.
- Think of Spring Data as a collection of modules that cater to different data stores.

Spring Data JPA

- Spring Data JPA is a specific module within the Spring Data project that focuses on relational databases using JPA (Java Persistence API).
- It helps you interact with relational databases like MySQL, PostgreSQL, Oracle, etc., using JPA as the underlying technology.
- Spring Data JPA provides a repository abstraction that simplifies CRUD operations, query generation, and pagination for JPA-based applications.
- It uses Hibernate (or other JPA providers) under the hood to handle the actual database interactions.

The most commonly used sub-project of Spring Data is Spring Data JPA, which is specifically designed for working with relational databases using JPA.
