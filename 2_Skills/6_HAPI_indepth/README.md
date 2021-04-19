# HAPI in-depth
hapi's router `works differently` than Express's
- it `doesn't care about the order` in which you add routes
- it maintains the `routing table`
- it `does not allow` the conflict routes
- we can use `multiple methods` in the routes. For instance `method: ['GET', 'POST']`
- we can `parameterize` the paths. For instance `path: '/nature/flowers/orchilds/{image}.{ext}'`
- we can use `multiple categories` for the path. For instance, `path: '/images/{category*3}/{image}.{ext}'`

In this `multiple categories`, we the path is something like: `/images/nature/flowers/roses/dog-­rose.jpg` then we have the the `request.params` having something as below

```
{
    "category": "nature/flowers/roses",
    "image": "dog-­rose",
    "ext": "jpg"
}
```

- we can route using `optional path parameters`, for instance `path: '/team/{name?}`
- we can use `catch-all route` for implementing custom 404 error page

## Internationalization (i18n) 

Plugins used
- node [`libs`](https://github.com/nodejs/node/tree/v15.14.0/lib)
- hapi
- [`path`](https://github.com/nodejs/node/blob/v15.14.0/lib/path.js): `file system path` manipulation
- [`handlebars`](https://github.com/handlebars-lang/handlebars.js): to `build semantic templates`
- [`@hapi/accept`](https://github.com/jshttp/accepts): Higher level `content negotiation` based on negotiator. Extracted from koa for general use.
- `netmask`: for IP address & network

When a request is received, we want to check if we have a matching template for any of the `languages in the Accept­-Language header`.

## Route prerequisite
A `route prerequisite`, or pre, is an asynchronous function that’s run immediately before the handler for a route is executed. 

- A hapi application’s purpose in life is to serve HTTP requests
- `Extension points` along with the request lifecycle
    - `onPreAuth` extension point
    - `onRequest` extension point 
    - and [others](https://hapi.dev/api/?v=20.1.2#request-lifecycle)

## Programmer errors vs. operational errors
- `Programmer errors` are things that occur from writing code with `invalid syntax`, referencing a variable that doesn't exist, or performing an operation on the wrong type
- `Operational errors` are those that occur during the `runtime of our program` due to factors often beyond our control

## Streaming with big data
We can use `wreck` plugin that is a part of `hapi` ecosystem e.g. `@hapi/wreck` to streaming, secure the request...

See more [hapi_wreck.js](../../hapi_wreck.js)
