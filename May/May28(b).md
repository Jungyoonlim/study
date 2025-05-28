# Questions to anticipate

## JavaScript 
### What's the difference between a `setTimeout` callback and a resolved `Promise.then`?

### Explain how the JS event loop handles I/O and timers.









## TypeScript 

### What's the difference between `Partial<T>` and `Required<T>`?

### How does `Pick<T, K>` compare to `Omit<T, K>` under the hood?

### Show how to model a discriminated-union for a shape: `{ kind: 'circle', radius } | { kind: 'square', size }` and write a type-safe area function.

### Explain `keyof`, `infer`, or write your own `Readonly<T>`.


## Node.js 
### Walk me through the phases on Node's event loop.

### Why might a long-running synchronous loop block I/O.

### Build a minimal HTTP server from `require('http')` that routes `/users/:id`.

## How would you implement middleware chaining?

## Explain Node streams - readable vs. writable vs. transform -- and implement a simple line-splitter transform stream. 

## How do you handle uncaught exceptions in production?

## How could you scale Node across CPU cores?



## SQL / Postgrs / Supabase
### Write a paginated `SELECT * FROM images ORDER BY created_at DESC LIMIT 20 OFFSET 40;`


### When and how would you use a composite index? B-tree vs. hash vs. GIN?

### Explain why a slow query with `LIKE '%foo%' might be unindexable.

### Use a CTE to compute running totals or hierarchical tree data.


### How do you model many-to-many in Postgres, and how do you query it?


