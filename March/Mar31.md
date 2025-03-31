# JavaScript Proxy (복습) && 알고리즘 효율도, 필수 문법 (3,4장)

## Proxy 란?
프록시 객체는 기본 작업에 대해 사용자 지정 동작을 추가로 정의하는 데 사용됌. 

## 프록시 생성 

```
var x = new Proxy(target, handler);
```

```
const dog = {breed: "German Shephard", age: 5};

const dogProxy = new Proxy(dog, {
    get(target, breed){
        return target[breed].toUpperCase();
    },
    set(target, breed, value){
        console.log("changing breed to...");
        target[breed] = value;
    },
});

console.log(dogProxy.breed);
console.log(dogProxy.breed = "Labrador");
console.log(dogProxy.breed);
```

연습 1: 

3/10 리뷰: 
- `switch` 문 

```
switch (expression){
    case label_1: 
        statements_1; 
        break; 
    case label_2: 
        statements_2; 
        break;
        ...
    default: 
        statements_default; 
}
```

```
const validationProxy = new Proxy(targetObject, { 
    set(target, property, value){
        switch (property){
            // if date is `typeof` date?
            case 'price':
                if (typeof value !=='number' || value < 0){

                }
                break; 
            case 'productName':
                if (typeof value !== 'string'){
                    throw new TypeError('Product names must be string');
                }
            case 'date': 
                if (value > new Date()){
                    throw new RangeError('Date cannot be in the future');
                }
                break;
        }
        target[property] = value;
        return true; 
    }
})

// usage
validationProxy.price = 30;
validationProxy.productName = 'Watch';
validationProxy.date = new Date('2025-03-31'); 
```

연습 2: 

Review: Map Object
```
const imageStates = new Map();



```


```
// Lazy Loader 
// Loads low-res previews initially
// automatically loads full-res when accessed
// Caches loaded images 

// Image() constructor

const imageProxy = new Proxy(,{
    get (images){
        for (let img in images){
            // maintain cache? 
            
            // return placeholder
            return 
        }
    }
})





```




```
// API circuit breaker 

// Automatically retries failed requests 
// Blocks new requests for 30s after 5 failures 
// Tracks success and failure rates 

// 

const APIProxy = new Proxy(,{
    
})

```




-------------------------------

