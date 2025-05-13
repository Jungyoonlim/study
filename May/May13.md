# FE 75
## Debounce 

- Only execute this function if it has been 1000 ms since it was last invoked. 
- Common use case: search bars. Don't want to make expensive http requests while the user is still typing their query, so we debounce the requesting function and only invoke it once the user has stopped typing. 
- Free function invocations in javascript have `this` bound to the context in which it was invoked. 
- With normal JS functions, `this` is bound when the function is called. With arrow functions, `this` is bound to the context in which the function is originally created. 

```javascript
export default function debounce(func, wait=0){
    let timeout = null; 
    return function (...args){
        const context = this; 
        clearTimeout(timeoutID);


    }


}

```

```typescript



```

## `this` in JavaScript 
`this` refers to the context in which a function is executed. Its value depends on how a function is called, not where or how it is defined. 



http://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e
