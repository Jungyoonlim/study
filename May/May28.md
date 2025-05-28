# Node.js / SQL / Postgres 정리

## Node.js 

## What's Node.js?
A Javascript runtime built on Chrome's v8 engine that enables Javascript to run on the server

## What's the Node.js event loop?
The mechanism that allows Node.js to perform non-blocking I/O operations despite Javascript being single-threaded.

## What are the phases of the Node.js event loop?
- 1. Timers (setTimeout/setInterval)
- 2. Pending callbacks
- 3. Idle, prepare
- 4. Poll (I/O)
- 5. Check (setImmediate)
- 6. Close callbacks 

## What is the difference between `process.nextTick()` and `setImmediate()`?
- `process.nextTick()`: executes after current operation, before event loop
- `setImmediate()`: executes in the check phase of the next event loop

## How do you create a simple HTTP server in Node.js?

```javascript
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
})
server.listen(3000);
```

## What is the `require` function?
Node.js function to import modules. Part of CommonJS module system.

## What's middleware in Node.js?
Functions that execute during the request-response cycle, can modify req/res objects.

## What are streams in Node.js?
Objects that let you read/write data continuously. Types: Readable, Writable, Duplex, Transform

## What's the Buffer class?
A global class for bundling binary data in Node.js.

## What is cluster module?
Allows creation of child processes that share server ports for load balancing.

## What is EventEmitter?
A class that facilitates communication between objects using events.

## How do you handle errors in Node.js?
Try/catch for sync code, callbacks with error-first pattern, Promise rejection, error events

---
## SQL

## What are the basic SQL commands?
SELECT, INSERT, UPDATE, DELETE

## What is a PRIMARY KEY?
A column or combination of columns that uniquely identifies each row in a table.

## What is a FOREIGN KEY?
A column that creates a relationship between two tables by referencing the primary key of another table.

## How do you implement paginatin in SQL?
Using LIMIT and OFFSET:

```sql
SELECT * FROM users LIMIT 10 OFFSET 20; 
```

## What is better for pagination: OFFSET or cursor-based?
Cursor-based is better for large datasets as OFFSET performance degrades with higher values.

## Write a cursor-based pagination query

```sql
SELECT * FROM users WHERE id > last_seen_id ORDER BY id LIMIT 10; 
```

## What's an index?
A data structure that improves query performance by providing quick access to rows. 

## When should you create an index?
On columns frequently used in WHERE, JOIN, ORDER BY clauses, but not on columns with few unique values.

## What's the difference between clustered and non-clustered index?
- Clustered: Physically reorders table data
- Non-clustered: Separate structure with pointers to data

## What is a composite index?
An index on multiple columns.
Order matters for query optimization.

## How do you optimize a slow query?
Use EXPLAIN ANALYZE, add appropriate indexes, optimize JOINs, reduce data scanned. 

## What is normalization?
Process of organizing data to reduce redundancy and improve data integrity. 

# What are the normal forms?

- 1NF (atomic values)
- 2NF (no partial dependencies)
- 3NF (no transitive dependencies)

# What is denormalization?

Intentionally adding redundancy to improve query performance 

# What is transaction?

A unit of work that is atomic, consistent, isolated, and durable (ACID)

# What are ACID properties?

- Atomicity: All or nothing
- Consistency: Valid state to valid state
- Isolation: Concurrent transactions don't interfere
- Durability: Committed changes persist 

# What is a view?

A virtual table based on a SELECT query.

# What is a stored procedure?

Precompiled SQL code that can be saved and reused.

# What are aggregate functions?

Functions that perform calculations on sets: COUNT, SUM, AVG, MIN, MAX

# How do you use GROUP BY?

Group rows with same values in specified columns, often used with aggregate functions.

# What is HAVING clause?

Filters groups after GROUP BY 

## What is a subquery?

A query nested inside another query.

## What is the difference between DELETE and TRUNCATE?

- DELETE: Removes specific rows, can be rolled back, triggers fire
- TRUNCATE: Removes all rows, faster, cannot be rolled back

## What are window functions?

Functions that perform calculations across rows related to current row.

```sql
ROW_NUMBER() OVER (PARTITION BY category ORDER BY price)
```

## What is a CTE (Common Table Expression)?

A temporary named result set defined within a query

```sql
WITH user_counts AS (
    SELECT COUNT(*) FROM users
)
```

## What is PostgreSQL?

An advanced open-source relational database with support for JSON, arrays, and custom types.

## What are PostgreSQL-specific features?

## How do you create an index for fast filtering?

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);
```

## What is EXPLAIN in PostgreSQL?

Shows the execution plan for a query to help optimize performance.

## What is vacuum in PostgreSQL?

Process that reclaims storage occupied by dead tuples.

## How do you handle JSON in PostgreSQL?

Using JSON or JSONB types with operators like ->, ->>, @>, #>.

## What is a partial index?

An index built only on rows matching a condition

```sql
CREATE INDEX idx_active_users ON users(email) WHERE active = true;
```

## What are the isolation levels in PostgreSQL?

Read Uncommitted, Read Committed, Repeatable Read, Serializable 