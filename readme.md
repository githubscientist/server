# Node.js (http) Vs Express.js

- Node.js is a runtime environment that allows you to run JavaScript on the server side. It provides a built-in HTTP module that can be used to create web servers and handle HTTP requests and responses. However, building web applications with Node.js alone can be cumbersome and requires a lot of boilerplate code.

- Express.js is a web application framework built on top of Node.js. It simplifies the process of building web applications by providing a set of features and tools that make it easier to handle routing, middleware, and other common tasks. Express.js allows developers to create robust and scalable web applications with less code and more flexibility.

MVC Architecture:

Model

View

Controller

nodemon:

- Nodemon is a utility that automatically restarts your Node.js application when it detects changes in the source code. It helps developers save time by eliminating the need to manually stop and restart the server every time they make changes to their code. Nodemon can be installed globally or as a development dependency in your project.

dotenv:

- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. It allows developers to manage configuration settings and sensitive information (like API keys and database credentials) in a separate file, keeping them out of the source code. This makes it easier to manage different environments (development, testing, production) and enhances security by preventing sensitive data from being exposed in the codebase.

CRUD Operations:

Create: The process of adding new data to a database or data store.
Read: The process of retrieving data from a database or data store.
Update: The process of modifying existing data in a database or data store.
Delete: The process of removing data from a database or data store.

Status Codes:

1xx: Informational responses (e.g., 100 Continue)
2xx: Successful responses (e.g., 200 OK, 201 Created)
3xx: Redirection messages (e.g., 301 Moved Permanently, 302 Found)
4xx: Client error responses (e.g., 400 Bad Request, 404 Not Found)
5xx: Server error responses (e.g., 500 Internal Server Error, 503 Service Unavailable)

200 OK: The request was successful, and the server returned the requested data.
201 Created: The request was successful, and a new resource was created as a result.
400 Bad Request: The server could not understand the request due to invalid syntax.
404 Not Found: The server could not find the requested resource.
500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
503 Service Unavailable: The server is currently unable to handle the request due to temporary overload or maintenance.
403 Forbidden: The server understood the request but refuses to authorize it.

Middleware: 

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can execute code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function. Middleware is commonly used for tasks such as logging, authentication, error handling, and parsing request bodies.

incoming request -> middleware 1 (ex: request body parser) -> middleware 2 (ex: authentication) -> route handler -> response

1. Built-In Middleware - Express.js comes with several built-in middleware functions that can be used to handle common tasks. Some of the built-in middleware includes:
  - express.json(): Parses incoming requests with JSON payloads.
  - express.static(): Serves static files from a specified directory.
2. Third-party middleware 
    - body-parser: Parses incoming request bodies in a middleware before your handlers, available under the req.body property.
    - cookie-parser: Parses Cookie header and populates req.cookies with an object keyed by the cookie names.
    - cors: Enables Cross-Origin Resource Sharing (CORS) for your Express.js application, allowing you to specify which domains are allowed to access your resources.
3. Custom middleware 
    - logging
    - authentication
    - error handling

Authentication and Authorization:

- Authentication is the process of verifying the identity of a user or system. It ensures that the user is who they claim to be, typically through the use of credentials such as usernames and passwords, tokens, or biometric data. Common authentication methods include:
  - Basic Authentication
  - Token-based Authentication (e.g., JWT)
  - OAuth
  - Multi-factor Authentication (MFA)

- Authorization is the process of determining whether an authenticated user has the necessary permissions to access a specific resource or perform a particular action. It ensures that users can only access resources and perform actions that they are allowed to, based on their roles or privileges. Common authorization methods include:
  - Role-based Access Control (RBAC)