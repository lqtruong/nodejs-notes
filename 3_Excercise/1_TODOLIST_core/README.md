# The TODOlist core application
The core application will expose the RESTful APIs of TODOlist which support for user to manage their TODO authorized

## API specification

| Method | Path | Handlers | Purpose | Authorized |
| --- | --- | --- | --- | --- |
| GET | `/api/user` | AuthController.current | To return current user info | Yes | 
| POST | `/api/login` | AuthController.login | To login user with basic authentication | No | 
| GET | `/api/users` | PersonController.getAll | To return all users | Yes | 
| GET | `/api/users/{id}` | PersonController.getById | To return a user by id | Yes | 
| POST | `/api/users` | PersonController.create | To create a user| Yes | 
| PUT | `/api/users/{id}` | PersonController.updateById | To update a user | Yes | 
| DELETE | `/api/users/{id}` | PersonController.deleteById | To delete a user by id | Yes | 
| GET | `/api/todos` | TodoController.getAll | To return a TODOs from current user | Yes | 
| GET | `/api/todos/{id}` | TodoController.getById | To return a TODO by id from current user | Yes | 
| POST | `/api/todos` | TodoController.create | To create a TODO for current user | Yes | 
| PUT | `/api/todos/{id}` | TodoController.updateById | To update a TODO for current user | Yes | 
| DELETE | `/api/todos/{id}` | TodoController.deleteById | To delete a TODO for current user by id | Yes | 

## Dependencies
- npm i dotenv
- npm i --save-dev @types/dotenv
- npm i @hapi/hapi
- npm i --save-dev @types/hapi__hapi
- npm i @hapi/joi
- npm i --save-dev @types/hapi__joi
- npm i @hapi/boom
- npm i --save-dev @types/hapi__boom
- npm i winston
- npm i tsc-watch --save-dev
- npm i hapi-swagger 
- npm i @hapi/vision
- npm i --save-dev @types/hapi__vision
- npm i @hapi/inert
- npm i --save-dev @types/hapi__inert
- `npm i mongoose` for MongoDB connnection
- `npm i nconf` for configuration file loading
- `npm i --save-dev @types/nconf` for nconf types
- `npm i hapi-auth-jwt2` for jwt authentication & authorization
- `npm i hapijs-status-monitor` for hapijs status monitoring
- `npm i bcrypt` for password hashing
- `npm i --save-dev @types/bcrypt`
- `nom i jsonwebtoken` for jwt generator
- `npm i --save-dev @types/jsonwebtoken`

Visit more [todo core](../todos/core/)

# Authorization
These apis except `/api/login` are authorized.

# Start watching for Development

We can use command ```npm run start```. This will enable the watching mechanism when file changes

The API can be seen under server `localhost:4000/api/todos`

# Start for Production

We can use command ```npm run start--prod```

The API can be seen under server `localhost:4000/api/todos`

# Start on Docker container
We can use command ```npm run docker:start```
To stop the container, use ```npm run docker:stop```

# Play

GET /api/todos

```
curl --location --request GET 'localhost:4000/api/todos'
```

Results 

```
```
