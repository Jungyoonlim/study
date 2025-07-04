# Study Notes - Topic-Based Index

A comprehensive collection of programming, web development, and computer science study notes organized by topic with direct links to detailed explanations and implementations.

## 📚 Table of Contents

### Frontend Technologies
- [JavaScript](#javascript) - Fundamentals, Advanced Functions, Event Loop, Browser APIs
- [TypeScript](#typescript) - Types, Utility Types, Advanced Features  
- [React](#react) - Components, Hooks, State Management
- [CSS](#css) - Layout, Positioning, Advanced Properties, Preprocessors

### Backend & Infrastructure  
- [Node.js](#nodejs) - Runtime, Event Loop, Streams, HTTP Servers
- [Django](#django) - MVT Architecture, ORM, URL Routing, Templates
- [SQL](#sql) - Queries, Joins, Optimization, Transactions
- [PostgreSQL](#postgresql) - Advanced Features, JSON, Performance
- [Docker](#docker) - Containerization

### System Design & Architecture
- [System Design](#system-design) - CDN, Load Balancing, Caching, Scalability
- [Web Development](#web-development) - Performance, Security, Browser APIs

### Specialized Topics
- [WebGL and Graphics](#webgl-and-graphics) - Shaders, GPU Programming
- [Design Systems](#design-systems) - Component Architecture, Tokens
- [Data Structures & Algorithms](#data-structures--algorithms) - Complexity, Sorting, Trees, Graphs
- [Operating Systems](#operating-systems) - Memory, Processes, Hardware

### Study Resources
- [Interview Preparation](#interview-preparation) - MCQs, Common Questions

---

## JavaScript
- **Basics, Variable Declarations, Hoisting, Constants** [(Mar3.md)](March/Mar3.md)
- **Data Structures, Primitive Types, Literals** [(Mar5.md)](March/Mar5.md)
- **Control Flow, Error Handling, Block Statements, Conditionals, `switch`, `finally`** [(Mar10.md)](March/Mar10.md)
- **Generators** [(Mar10.md)](March/Mar10.md), [(Mar25.md)](March/Mar25.md)
- **`async`/`await`** [(Mar10.md)](March/Mar10.md)
- **Closures** [(Mar10.md)](March/Mar10.md), [(May13(a).md)](May/May13(a).md)
- **Loops and Iterations, `for`, `do...while`, `break`, `continue`** [(Mar11.md)](March/Mar11.md)
- **Indexes, Key-based Collections** [(Mar12.md)](March/Mar12.md)
- **`Promise`** [(Mar12.md)](March/Mar12.md)
- **Deep vs Shallow Copy** [(Mar12.md)](March/Mar12.md)
- **Proxies** [(Mar25.md)](March/Mar25.md), [(Mar31.md)](March/Mar31.md)
- **Advanced Function Implementations**
  - **Debounce** [(May13.md)](May/May13.md), [(May13(a).md)](May/May13(a).md), [(May28(a).md)](May/May28(a).md), [(May29.md)](May/May29.md)
  - **Throttle** [(May13.md)](May/May13.md), [(May28(a).md)](May/May28(a).md), [(May29.md)](May/May29.md)
  - **Array.prototype.reduce** [(May13.md)](May/May13.md)
  - **Array Flatten** [(May13.md)](May/May13.md), [(May28(a).md)](May/May28(a).md)
  - **Promise.all Implementation** [(May28(a).md)](May/May28(a).md)
  - **Deep Clone** [(May28(a).md)](May/May28(a).md)
- **`this` Context** [(May13(a).md)](May/May13(a).md)
- **Event Loop and Browser APIs** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Modules (CommonJS vs ES Modules)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Storage APIs (localStorage, sessionStorage, cookies)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Event Handling (Bubbling, Delegation)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)

## TypeScript
- **Basics** [(Mar27.md)](March/Mar27.md)
- **Utility Types (Partial, Required, Pick, Omit)** [(May28(b).md)](May/May28(b).md)
- **Discriminated Unions** [(May28(b).md)](May/May28(b).md)
- **Advanced Types (`keyof`, `infer`)** [(May28(b).md)](May/May28(b).md)

## React
- **Principles, Features, Pros/Cons** [(Mar26.md)](March/Mar26.md)
- **Virtual DOM** [(Mar26.md)](March/Mar26.md)
- **Elements vs Components** [(Mar26.md)](March/Mar26.md)
- **Props and Props Drilling** [(Mar26.md)](March/Mar26.md)
- **Context API and Redux** [(Mar26.md)](March/Mar26.md)
- **Higher Order Components (HOC)** [(Mar26.md)](March/Mar26.md)
- **Hooks (useState, useEffect, useContext, useRef, useMemo)** [(Mar26.md)](March/Mar26.md)

## Web Development
- **Browser Rendering Process** [(Mar27.md)](March/Mar27.md)
- **CSR vs SSR** [(Mar27.md)](March/Mar27.md)
- **CORS (Cross-Origin Resource Sharing)** [(Mar27.md)](March/Mar27.md)
- **Storage (Session, Local)** [(Mar27.md)](March/Mar27.md)
- **HTTP/HTTPS** [(Mar27.md)](March/Mar27.md)
- **SEO** [(Mar27.md)](March/Mar27.md)
- **Browser Request Flow** [(Mar27.md)](March/Mar27.md)
- **Script Loading (`<script>`, `async`, `defer`)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Performance Optimization** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)

## CSS
- **Selectors and Combinators** [(May11.md)](May/May11.md)
- **Specificity and Cascade** [(May11.md)](May/May11.md), [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
  - **Specificity Calculation (A, B, C, D)** [(May11.md)](May/May11.md)
  - **Cascade Priority Rules** [(May11.md)](May/May11.md)
- **Inheritance** [(May11.md)](May/May11.md)
  - **Inheritable vs Non-inheritable Properties** [(May11.md)](May/May11.md)
  - **`inherit`, `initial`, `unset` Keywords** [(May11.md)](May/May11.md)
- **Box Model and Layout** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
  - **`box-sizing: border-box`** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
  - **Block Formatting Context (BFC)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Positioning** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
  - **`relative`, `absolute`, `fixed`, `sticky`, `static`** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
  - **`z-index` and Stacking Context** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Display Property** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
  - **`block`, `inline`, `inline-block`** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Advanced Layout Systems** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
  - **CSS Grid vs Flexbox** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **CSS Variables (Custom Properties)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **CSS Units (`em`, `rem`, `px`, `%`, `vh`, `vw`)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Animations and Transitions** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **CSS Preprocessors (Sass, Less)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Performance Properties (`will-change`, `contain`)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Logical Properties and Internationalization** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)

## Design Systems
- **Design System Fundamentals** [(May19.md)](May/May19.md), [(May13(b).md)](May/May13(b).md)
- **Core Values** [(May19.md)](May/May19.md)
  - **Consistency, Efficiency, Scalability** [(May19.md)](May/May19.md)
- **Component Hierarchy** [(May19.md)](May/May19.md)
  - **Tokens → Primitives → Composites → Patterns** [(May19.md)](May/May19.md)
- **Design Tokens** [(May19.md)](May/May19.md)
  - **Colors, Typography, Spacing** [(May19.md)](May/May19.md)
- **Component Architecture** [(May19.md)](May/May19.md)
- **Documentation and Governance** [(May19.md)](May/May19.md)

## Django
- **MVT Architecture** [(May17.md)](May/May17.md)
  - **Model-View-Template Pattern** [(May17.md)](May/May17.md)
  - **Django vs MVC Comparison** [(May17.md)](May/May17.md)
- **Models and ORM** [(May17.md)](May/May17.md)
  - **Database Schema Definition** [(May17.md)](May/May17.md)
  - **Object-Relational Mapping** [(May17.md)](May/May17.md)
  - **Migrations (`makemigrations`, `migrate`)** [(May17.md)](May/May17.md)
- **URL Configuration** [(May17.md)](May/May17.md)
  - **URL Patterns and Routing** [(May17.md)](May/May17.md)
  - **Hierarchical URL Design** [(May17.md)](May/May17.md)
  - **URL Namespacing** [(May17.md)](May/May17.md)
- **Views** [(May17.md)](May/May17.md)
  - **Function-Based Views** [(May17.md)](May/May17.md)
  - **Class-Based Views** [(May17.md)](May/May17.md)
  - **Generic Views and CRUD** [(May17.md)](May/May17.md)
- **Templates** [(May17.md)](May/May17.md)
  - **Template System** [(May17.md)](May/May17.md)
  - **Template Tags and URL Reversal** [(May17.md)](May/May17.md)
- **Forms and HTTP** [(May17.md)](May/May17.md)
  - **POST Data Handling** [(May17.md)](May/May17.md)
  - **Form Processing** [(May17.md)](May/May17.md)

## System Design
- **Infrastructure Components** [(May21.md)](May/May21.md)
  - **CDN (Content Delivery Network)** [(May21.md)](May/May21.md)
  - **Load Balancing** [(May21.md)](May/May21.md)
  - **Redis Caching** [(May21.md)](May/May21.md)
- **Scalability and Performance** [(May21.md)](May/May21.md)
  - **Rate Limiting** [(May21.md)](May/May21.md)
  - **Database Sharding/Partitioning** [(May21.md)](May/May21.md)
  - **Monitoring and Observability** [(May21.md)](May/May21.md)
- **File Storage** [(May21.md)](May/May21.md)
  - **Cloud Storage (AWS S3, Supabase)** [(May21.md)](May/May21.md)
  - **Presigned URLs** [(May21.md)](May/May21.md)
- **Database Design** [(May21.md)](May/May21.md)
  - **Indexes and Query Optimization** [(May21.md)](May/May21.md)

## WebGL and Graphics
- **Shader Programming** [(May25.md)](May/May25.md)
  - **GPU Programming Fundamentals** [(May25.md)](May/May25.md)
  - **Vertex Shaders vs Fragment Shaders** [(May25.md)](May/May25.md)
  - **GLSL (OpenGL Shading Language)** [(May25.md)](May/May25.md)
- **Graphics Pipeline** [(May25.md)](May/May25.md)
  - **Shader Processing Flow** [(May25.md)](May/May25.md)
  - **Rasterization Process** [(May25.md)](May/May25.md)
- **WebGL Integration** [(May25.md)](May/May25.md)
  - **JavaScript WebGL Context** [(May25.md)](May/May25.md)
  - **Shader Compilation and Usage** [(May25.md)](May/May25.md)

## Docker
- **Containerization** [(May20.md)](May/May20.md)
  - **Reference Resources** [(May20.md)](May/May20.md)

## Node.js
- **Runtime and JavaScript Engine** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Event Loop and Phases** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
  - **Timers, Pending Callbacks, Poll, Check, Close Callbacks** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Execution Order** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **`process.nextTick()` vs `setImmediate()`** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **HTTP Server Creation** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
- **Module System** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **`require` Function and CommonJS** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Middleware** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
- **Streams (Readable, Writable, Duplex, Transform)** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
- **Buffer Class** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Cluster Module and Load Balancing** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
- **EventEmitter** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Error Handling** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)

## SQL
- **Basic Commands** [(May21.md)](May/May21.md), [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
  - **SELECT, INSERT, UPDATE, DELETE** [(May21.md)](May/May21.md), [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Database Keys** [(May21.md)](May/May21.md), [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **PRIMARY KEY** [(May21.md)](May/May21.md), [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **FOREIGN KEY** [(May21.md)](May/May21.md), [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **JOIN Operations** [(May21.md)](May/May21.md)
  - **INNER, LEFT, RIGHT, FULL OUTER JOIN** [(May21.md)](May/May21.md)
- **Pagination** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
  - **LIMIT and OFFSET** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **Cursor-based Pagination** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Indexes** [(May21.md)](May/May21.md), [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
  - **Clustered vs Non-clustered** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **Composite Indexes** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
  - **B-tree vs Hash vs GIN** [(May28(b).md)](May/May28(b).md)
- **Query Optimization** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
- **Normalization** [(May21.md)](May/May21.md), [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **Normal Forms (1NF, 2NF, 3NF)** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **Denormalization** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Transactions and ACID** [(May21.md)](May/May21.md), [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **Atomicity, Consistency, Isolation, Durability** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Views** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Stored Procedures** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Aggregate Functions** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **COUNT, SUM, AVG, MIN, MAX** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **GROUP BY and HAVING** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Subqueries** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **DELETE vs TRUNCATE** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Window Functions** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Common Table Expressions (CTE)** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md), [(May28(b).md)](May/May28(b).md)
- **Many-to-Many Relationships** [(May28(b).md)](May/May28(b).md)

## PostgreSQL
- **Advanced Database Features** [(May21.md)](May/May21.md), [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Data Types** [(May21.md)](May/May21.md)
  - **Integer, Text, Varchar, Boolean, TIMESTAMP** [(May21.md)](May/May21.md)
- **JSON and JSONB Data Types** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **JSON Operators (->, ->>, @>, #>)** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Index Creation and Optimization** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **EXPLAIN Query Analysis** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **VACUUM Process** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Partial Indexes** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
- **Transaction Isolation Levels** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)
  - **Read Uncommitted, Read Committed, Repeatable Read, Serializable** [(May28.md)](May/May28.md), [(May30.md)](May/May30.md)

## Interview Preparation
- **Multiple Choice Questions (MCQ)** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
  - **JavaScript, CSS, HTML, Browser APIs** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
  - **Performance, Internationalization** [(May13-MCQ.md)](May/May13-MCQ.md), [(May13(c).md)](May/May13(c).md)
- **Common Interview Questions** [(May28(b).md)](May/May28(b).md)
  - **JavaScript Functions and Concepts** [(May28(b).md)](May/May28(b).md)
  - **Node.js and Backend** [(May28(b).md)](May/May28(b).md)
  - **SQL and Database** [(May28(b).md)](May/May28(b).md)
  - **Front-End System Design** [(May28(b).md)](May/May28(b).md)

## Data Structures & Algorithms
- **Algorithm Efficiency Analysis / Time Complexity** [(Mar31.md)](March/Mar31.md), [(April4-DSA.md)](April/April4-DSA.md)
- **Algorithm Types** [(April4-DSA.md)](April/April4-DSA.md)
- **Brute Force** [(April4-DSA.md)](April/April4-DSA.md)
- **Greedy Algorithms** [(April4-DSA.md)](April/April4-DSA.md)
- **Divide and Conquer** [(April4-DSA.md)](April/April4-DSA.md)
- **Sorting Algorithms (Merge Sort, Quick Sort)** [(April4-DSA.md)](April/April4-DSA.md)
- **Binary Search** [(April4-DSA.md)](April/April4-DSA.md)
- **Dynamic Programming** [(April4-DSA.md)](April/April4-DSA.md)
- **Backtracking** [(April4-DSA.md)](April/April4-DSA.md)
- **Graph Traversal (BFS/DFS)** [(April4-DSA.md)](April/April4-DSA.md)
- **Data Structures (Stack, Queue, Heap, BST)** [(April4-DSA.md)](April/April4-DSA.md)
- **Advanced Algorithms (Dijkstra, Floyd)** [(April4-DSA.md)](April/April4-DSA.md)
- **Priority Queue** [(April4-DSA.md)](April/April4-DSA.md)
- **Prefix Sum** [(April4-DSA.md)](April/April4-DSA.md)
- **Flood Fill** [(April4-DSA.md)](April/April4-DSA.md)
- **Union Find** [(April4-DSA.md)](April/April4-DSA.md)
- **Segment Tree** [(April4-DSA.md)](April/April4-DSA.md)
- **Algorithm Practice**
  - April 6-8: [(April6.md)](April/April6.md), [(April7.md)](April/April7.md), [(April8.md)](April/April8.md)
  - April 10-12: [(April10.md)](April/April10.md), [(April11.md)](April/April11.md), [(April12.md)](April/April12.md)
  - April 14-15: [(April14.md)](April/April14.md), [(April15.md)](April/April15.md), [(April15(a).md)](April/April15(a).md)
  - April 21-23: [(April21.md)](April/April21.md), [(April21(a).md)](April/April21(a).md), [(April23.md)](April/April23.md)
  - April 28-30: [(April28.md)](April/April28.md), [(April28(2).md)](April/April28(2).md), [(April30.md)](April/April30.md)

## Operating Systems
- **Basics** [(April3.md)](April/April3.md)
- **Computer System Components** [(April16.md)](April/April16.md), [(April17.md)](April/April17.md)
- **Processor, Memory, Peripherals** [(April16.md)](April/April16.md), [(April17.md)](April/April17.md)
- **System Bus** [(April16.md)](April/April16.md), [(April17.md)](April/April17.md)
- **Memory Types (Register, Main Memory, Cache)** [(April16.md)](April/April16.md), [(April17.md)](April/April17.md)
- **Instruction Execution Cycle** [(April16.md)](April/April16.md), [(April17.md)](April/April17.md)
- **Interrupts** [(April16.md)](April/April16.md), [(April17.md)](April/April17.md)

---

## 🗺️ Navigation

For chronological study progression, see the main [Study Index](study_index.md) organized by date.

💡 **Quick Search Tips:**
- Use `Ctrl/Cmd + F` to search for specific topics
- Click the topic headers to jump to sections  
- Many topics have both English and Korean versions
- Links marked with dates show chronological learning progression 