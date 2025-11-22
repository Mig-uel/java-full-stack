# Java Full-Stack Developer with React & Spring Boot

## Evolution of Web Apps

- Static websites of the early 1990s used simple HTML and CSS.
- Dynamic websites came in during the early 2000s that used HTML, CSS, JS, PHP, ASP.NET, JSP, and databases like MySQL, SQL Server, and Oracle.
- By the mid-2000s, something revolutionary happened with the introduction of AJAX, which allowed asynchronous data loading without refreshing the entire page.
- Fast-forward to the 2010s, we saw the rise of Single Page Applications (SPAs) using frameworks like Angular, React, and Vue.js on the front end, with RESTful APIs on the back end.
- Today, we have advanced front-end frameworks like React, Angular, and Vue.js, paired with robust back-end technologies like Spring Boot, Node.js, and Django, often utilizing microservices architecture.

## Library vs Framework

When working in programming, you may have come across the terms "library" and "framework." While they are related, they serve different purposes in software development.

Have you ever wondered:

- What's the difference between a library and a framework?
- Are they interchangeable?
- Which one should I use for my project?

Both libraries and frameworks are pre-written code components created by experienced developers to solve common problems efficiently. Their goal is the same: to simplify the development process and enhance productivity.

Here's a simple explanation of both:

- **Library**: A library is a collection of reusable code, functions, or modules that you can call when needed. You are in control of the flow of the program and decide when and how to use the library. For example, React is a library for building user interfaces.
- **Framework**: A framework, on the other hand, is a more comprehensive structure that provides a foundation for building applications. It dictates the architecture and flow of the application, and you typically have to follow its conventions. The framework calls your code at specific points. For example, Spring Boot is a framework for building Java-based web applications.

### Library

A library is a collection of reusable code designed to perform specific tasks (e.g. manipulating data, making HTTP requests, or handling user interfaces). When you use a library, you are in control of the application's flow and decide when and how to call the library's functions.

- You call the library's methods/ directly from your code.
- It offers flexibility and freedom to choose how to structure your application and which parts to use and when.
- Typically easier to learn because you only need to understand the specific functions you want to use.
- Best suited for modular tasks where control remains with the developer.
- Examples: React (UI library), Lodash (utility library), Axios (HTTP client)

### Framework

A framework is a more comprehensive structure that provides a foundation and architecture for building applications. It often includes predefined conventions and patterns that developers must follow. In a framework, the control is inverted; the framework calls your code at specific points in the application's lifecycle.

- It follows the principle of "Inversion of Control" (IoC), meaning the framework calls your code, not the other way around.
- Frameworks impose structure — you follow predefined patterns and conventions.
- Often has a steeper learning curve due to its complexity and the need to understand the entire framework.
- Best suited for large-scale applications where consistency and maintainability are crucial.
- Examples: Spring Boot (Java framework), Angular (front-end framework), Django (Python framework)

---

**Quick Takeaway**

- If you are calling the code, it's a Library.
- If the code is calling you, it's a Framework.

### Library vs Framework (continued)

Take this analogy: Imagine you are building a house.

- Using a **library** is like having a toolbox. You can pick and choose the tools you need (hammer, saw, screwdriver) and use them whenever you want. You are in charge of the construction process.
- Using a **framework** is like having a pre-designed blueprint for the house. The blueprint dictates how the house should be built, and you must follow its design and structure. The framework provides the overall architecture, and you fill in the details.

## Introduction to React

React is a popular JavaScript library used for building user interfaces, particularly single-page applications where you need a fast and interactive user experience. Developed by Facebook, React allows developers to create reusable UI components that manage their own state, making it easier to build complex UIs.

### What is React?

- Developed and maintained by Facebook (now Meta).
- Focuses on building reusable UI components.
- Efficiently updates and renders components when data changes using a virtual DOM.
- Follow a component-based architecture, promoting reusability and maintainability.

### Key Features of React

- **Component-Based Architecture**: Build encapsulated components that manage their own state and compose them to create complex UIs.
- **Declarative Syntax**: Describe what the UI should look like for a given state, and React takes care of updating the DOM.
- **Virtual DOM**: React uses a virtual representation of the DOM to optimize updates without manipulating the actual DOM directly.
- **Unidirectional Data Flow**: Data flows in one direction, making it easier to understand and debug applications.
- **JSX Syntax**: A syntax extension that allows you to write HTML-like code within JavaScript, making it easier to create and visualize UI components.

### Why Use React?

- **Reusable Components**: Write once, use multiple times.
- **Fast Rendering**: Thanks to the virtual DOM.
- **Scalable Applications**: Easy to manage even as applications grow in complexity.
- **Strong Community Support**: A large ecosystem of libraries, tools, resources, and more importantly, backed by Facebook.

### How React Works

- Write components using JSX.
- React creates a virtual DOM representation of the UI.
- Compare with the real DOM and update only the parts that have changed.
- Update only the necessary components, improving performance.

This makes React **fast and efficient** for building dynamic web applications.

## React In-Depth

### `React.createElement()`

In React, `createElement()` and `createRoot()` are methods that allow you to interact with the DOM and create elements dynamically.

This method is used to create React elements (JSX-like elements) in JavaScript. It is a core function that React uses under the hood to create elements that are later rendered to the DOM.

Syntax:

```js
React.createElement(type, [props], [...children]);
```

- `type`: The type of the element to create (e.g., 'div', 'span', or a custom component).
- `props`: An object containing properties/attributes for the element (e.g., className, id, style).
- `children`: The child elements or text content of the element.

Example:

```js
React.createElement("h1", null, "Hello, World!");
```

This creates an `<h1>` element with the text "Hello, World!". In JSX, this would be written as:

```js
<h1>Hello, World!</h1>
```

### `ReactDOM.createRoot()`

This method initializes the React rendering process by creating a React root and attaching it to a specified DOM element. It serves as the entry point for rendering React components ore element trees into the DOM. The process involves setting up a root container for the application and rendering the React elements within that container.

Syntax:

```js
const root = ReactDOM.createRoot(container); // Creates a React root and attaches it to the specified DOM container
root.render(element); // Renders the specified React element into the root
```

- `container`: The DOM element where the React application will be mounted (e.g., a `<div>` with a specific ID).
- `element`: The React element or component to be rendered within the root.

Example:

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement("h1", null, "Hello, World!"));
```

In a typical React application, `createElement()` is used to define what the UI should look like, while `createRoot()` is used to mount that UI into the actual DOM.

## Introduction to Spring

### What is Spring?

Spring is a popular open-source framework for building enterprise-level Java applications. It helps developers write clean, modular, and testable code by providing a comprehensive programming and configuration model. Spring provides built-in features for handling databases, security, messaging, and more.

### Why Spring?

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
