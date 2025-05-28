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



```