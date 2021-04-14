Self training on NodeJS - A quick notes

NodeJS application is **ADVISED** for **Data Intensive** Real-time Applications (DIRT) **NOT** for **CPU intensive** applications

# Mentioned patterns & techniques
- SOLID
- DRY
- busy-waiting
- small surface area
- Reactor
- actively poll
- Continuation-Passing Style - CPS
- callback
- callback hell
- dependency hell
- Unleashing Zalgo
- unpredictable functions
- Deferred execution
- Single Responsibility Principle (SRP)
- monkey patching
- The observer pattern
- flow control
- Streams
  - composability
  - back-pressure
  - asynchronous control flow

# Hello world
Simple example to print `hello world`

See more [hello_word.js](hello_word.js)
# Http - Core
Use `require("<module name>")` to import module. For instance 

```var http = require("http");```

See more [http_server.js](http_server.js)

# Non-blocking
We can use callback function implement the async call 

See more [call_back.js](call_back.js)

# Event Loop - Core
Node.js is a **single-threaded** application but it can support concurrency via the concept of **event** and **callbacks**

![Event loop](event_loop.jpg)

- **Callback** functions run when async function returns **results**
- Event handling works on **Observer** pattern

Note: In Node Application, **any async function** accepts a callback as the **last parameter** and a callback function accepts an error as the first parameter.

See more [event_loop.js](event_loop.js)

# Global Objects
We can access the global objects which are used across modules

```
console.log( __filename );
```

See more [global_objects.js](global_objects.js)

# [Express](https://expressjs.com/) - 3rd web framework
We can use Express module to create a minimal and flexible web-based application

See more [express.js](express.js)

We can make express to serve the static files. Let's see the image `nodejs.png` in the public folder

```
app.use(express.static('public'));
```

See more [express_static.js](express_static.js)

# [HAPI](https://hapi.dev/) - 3rd HTTP API framework

See more [HAPI Overview](2_Skills/4_HAPI_overview/README.md)

## JOI - validation

## LOUT - Documentation

## HAPI vs Express
- Hapi: is a newer framework that abstracts the existing Node API
- Express: is older and more established. Express code looks and feels more like native Node
- Hapi has more in the core: in some cases, Express needs [middleware](Terms/middleware.md) to perform a task that Hapi handles internally
- Hapi: more abstraction from Node while Express is closer to Node
- Hapi uses plugins, and Express uses middleware

# Mongoose

# Tests
## Unit tests
## Integration tests
## End-to-End (e2e) tests

# Security

## API Authorization - OAuth2

## Secure APIs using HAPI

# Exercise
In this exercise, we attempt to implement a NodeJS app using HAPI framework & other relevant stacks

# Packaging
Packaging & publishing into [**npm repository**](https://www.npmjs.com/) is a nice process to modularize our code & reuse in another module. To do that, we have to create a `package.json`

Use command `npm init` to create the `package.json` file's content

```
{
  "name": "njstesting",
  "version": "1.0.0",
  "description": "NodeJS training",
  "main": "hello_word.js",
  "scripts": {
    "test": "hw"
  },
  "keywords": [
    "nodejs",
    "training"
  ],
  "author": "Le Quoc Truong",
  "license": "MIT"
}
```

Use command `npm adduser` to connect to [**npm repository**](https://www.npmjs.com/)

Use command `npm publish` to build & publish the module to the repository

# Unpublishing
We can remove the published module from the [**npm repository**](https://www.npmjs.com/) whenever we want by using command 

```
npm unpublish <module name>
```

# References
Books
- Node.js Design Patterns-Mario Casciaro-2nd Edition.pdf
- Node.js in Action.pdf - Manning publisher
- HAPI.js in Action.pdf - Manning publisher