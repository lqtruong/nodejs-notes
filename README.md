Self training on NodeJS - A quick notes
# Hello world
Simple example to print `hello world`

# Http Server
Use `require("<module name>")` to import module. For instance 

```var http = require("http");```

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