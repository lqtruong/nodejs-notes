Self training on NodeJS - A quick notes

NodeJS application is **ADVISED** for **Data Intensive** Real-time Applications (DIRT) **NOT** for **CPU intensive** applications

# Hello world
Simple example to print `hello world`

See more [hello_word.js](hello_word.js)
# Http Server
Use `require("<module name>")` to import module. For instance 

```var http = require("http");```

See more [http_server.js](http_server.js)

# Non-blocking
We can use callback function implement the async call 

See more [call_back.js](call_back.js)

# Event Loop
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

# Express - minimal Node.js web application framework
We can use Express module to create a minimal and flexible web-based application

See more [express.js](express.js)

We can make express to serve the static files. Let's see the image `nodejs.png` in the public folder

```
app.use(express.static('public'));
```

See more [express_static.js](express_static.js)

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

# Unpublishing the module from npm repository
We can remove the published module from the [**npm repository**](https://www.npmjs.com/) whenever we want by using command `npm unpublish <module name>`