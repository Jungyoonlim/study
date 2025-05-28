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

With trailing call:

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

