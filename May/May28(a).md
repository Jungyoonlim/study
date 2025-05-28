# JS / TS Function Reviews

## 1. Debounce 

Delays invoking a function until after a specified wait time has elapsed since the last time it was invoked.

```js
function debounce(fn, wait){
    let timeoutId; 

    return function debounced(...args){
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
}
```

## 2. Throttle

Implement a throttle function that ensures a function is called at most once in a specified time period.

Leading Edge: 

```js
function throttle(fn, limit){
    let inThrottle = false; 

    return function throttled(...args){
        if (!inThrottle){
            fn.apply(this, args);
            inThrottle = true;

            setTimeout(() => {
                inThrottle = false; 
            }, limit);
        }
    };
}
```

With Trailing Call:

```js
function throttle(fn, limit){
    let inThrottle = false; 
    let lastArgs; 

    return function throttled(...args){
        lastArgs = args;

        if (!inThrottle){
            fn.apply(this, lastArgs);
            inThrottle = true;

            setTimeout(() => {
                inThrottle = false; 
                if (lastArgs){
                    throttled.apply(this, lastArgs)
                    lastARgs = null; 
                }
            }, limit);
        }
    }
}
```

Can be in two states
1. Idle
2. Active 

Only ever invokes your function `fn` at most once per `limit` ms interval.
But still guarantees that the last call you made during that window will eventually fire. 


Walkthrough
1. First Invocation 
- `inThrottle` is false. 
- We do `fn.apply(this.args)`
- We set `inThrottle = true` and start a `setTimeout` for `limit` ms. 
- Any further calls before that timeout will not call `fn` immediately. 

2. Calls during the throttle window 
- `inThrottle` is true. 
- Each call simply does `lastArgs = args`, overwriting any previous stored args. 

3. Timeout fires 
- Clear the throttle flag: `inThrottle = false`. 
- Check `lastArgs`:
    - If no calls happened during the window, stay simply Idle. 
    - If there were calls, we immediately call `throttled.apply(this, lastArgs)`.
        - The recursive call sees `inThrottle === false` (Idle), so it invokes
        `fn(lastArgs)`, sets `inThrottle = true` again, and starts a new timer.
    - Then `lastArgs = null` to reset. 

- Leading Edge: the very first call in a new window fires immediately.
- Trailing Edge: the last call you made during a window also fires, once the window ends -- so you never lose the final invocation. 

## 3. Array Flatten 

```js
function flatten(arr){
    res = [];

    for (const item for arr){
        if (Array.isArray(item)){
            result.push(...flatten(item));
        } else { 
            result.push(item);
        }
    }
    return result; 
}
```

Use reduce

```js
function flatten(arr){
    return arr.reduce((flat, item) =>
        flat.concat(Array.isArray(item) ? flatten(item) : item),
        []  
    );
}
```

## 4. Promise.all Implementation 

```js
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    
    // Handle empty array - Early Exit for empty input. 
    if (promises.length === 0) {
      resolve(results);
      return;
    }
    
    // Iterate over each input, remembering its index 
    promises.forEach((promise, index) => {
      // Wrap in Promise.resolve so non-Promise values are handled too 
      Promise.resolve(promise)
        .then(value => {
          // Store the resolved value at the correct slot 
          results[index] = value;
          completed++;
          
          // Once every promise has fulfilled, resolve the aggregate 
          if (completed === promises.length) {
            resolve(results);
          }
        })
        // if any promise rejcets, short-circuit and reject the outer promise: 
        .catch(reject);
    });
  });
}
```

- Input: An array of values that may be Promises.
- Output: a single Promise that: 
    - resolves with an array of resolved values in the same order as the input, once every input Promise settles successfully.
    - Rejects immediately if any input Promise rejects, with that rejection reason. 

## 5. Deep Clone



## 6. Memoization 



## 7. Event Emitter 



## 8. Curry Function 


## 9. Array Methods Implementation 


## 10. 