# The TODOlist core application
The core application will expose the RESTful APIs of TODOlist which support for user to manage their TODO authorized

## API specification

| Method | Path | Handlers | Purpose | Authorized |
| --- | --- | --- | --- | --- |
| GET | `/api/user` | Users.current | to return current user info | Yes | 
| GET | `/api/login` | Auths.login | To login user with basic authentication | No | 
| GET | `/api/todos` | Todos.all | To return a TODOs from current user | Yes | 
| POST | `/api/todos` | Todos.create | To create a TODO for current user | Yes | 
| PUT | `/api/todos/{id}` | Todos.update | To update a TODO for current user | Yes | 
| DELETE | `/api/todos/{id}` | Todos.delete | To delete a TODO for current user by id | Yes | 

## Dependencies
- npm i @dotenv
- npm i --save-dev @types/dotenv
- npm i @hapi/hapi
- npm i --save-dev @types/hapi__hapi
- npm i @hapi/joi
- npm i --save-dev @types/hapi__joi
- npm i @hapi/boom
- npm i --save-dev @types/hapi__boom
- npm i @hapi/inert
- npm i --save-dev @types/hapi__inert
- npm i @hapi/vision
- npm i --save-dev @types/hapi__vision
- npm i winston

Visit more [todo core](../todos/core/package.json)