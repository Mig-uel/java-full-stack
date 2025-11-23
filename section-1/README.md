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
