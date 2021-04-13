# Node's essential patterns
There are two of the most important asynchronous patterns: `callback` and `event emitter`

## The callback pattern
- handlers of the reactor pattern
- handle async operations
- to `replace` the use of `return` instruction that always executes synchronously
- `closure` is to implement the `callback`

See more [closure.js](../../closure.js)

## The continuation-passing style (CPS) pattern
- pass the argument of a function to another function
- the result is propagated by passing it to another function instead of directly returning it to the caller

See more for Sync CPS [cps.js](../../cps.js), Async CPS [async_cps.js](../../async_cps.js)

## Non-continuation-passing style callbacks
`map` function of the array is not a `CPS` function
```
const result = [1, 5, 7].map(element => element - 1);
console.log(result); // [0, 4, 6]
```

## An unpredictable function
One of the most dangerous situations is to have an API that behaves synchronously under certain conditions and  synchronously under others

- pattern: to use unleashing Zalgo 
- Prefer the direct style for `purely` synchronous functions
- changing from `sync to async` and `vice versa` requires a change to the style of all the code `using` it

See more [unpredictable_func.js](../../unpredictable_func.js)

## Deferred execution
- use `process.nextTick` to make it `purely async`
- use `setImmediate`

See more [deferred_execution.js](../../deferred_execution.js)

## Node.js callback conventions
- to understand well the CPS & Callbacks in NodeJS would help us avoid getting into Callback Hell

## Callbacks always come last
## Error always comes first
## Propagating errors
## Uncaught exceptions

# The module system and its patterns

# The observer pattern

## The EventEmitter class

![Event Emitter](../../event_emitter.png)

See more [event_emitter.js](../../event_emitter.js)

## Synchronous and asynchronous events
## EventEmitter versus callbacks
## Combining callbacks and EventEmitter