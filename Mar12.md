# 인덱스 / key 기반의 컬렉션 / `Promise` / deep, shallow copy

## 인덱스 기반 
### 배열 생성 
```
const arr1 = new array(element0, element1, /* ... */, elementN);
const arr2 = Array(element0, element1, /* ... */, elementN);
const arr3 = [element0, element1, /* ... */, elementN];
```

### `forEach()` 메서드 
```
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
```

## key 기반 
### `Map` 객체 
값들을 매핑하기 위한 새로운 데이터 구조 


### `Object`와 `Map` 비교








### `Set` 오브젝트 
`Set` 객체는 값들의 집합 

```
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
```

두개가 동시에 있는 것 빼기

```
const numbers = [1,2,3,2,4,3,5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
```

```
let fruits = new Set(["apple", "banana", "mango"]);

fruits.forEach(fruit => console.log(fruit));

for (let fruit of fruits){
    console.log(fruit);
}
```

Union 
```
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union);
```

Intersection 
```
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);
```

--- 
# `Promise`
비동기 작업의 최종 완료 또는 실패를 나타내는 객체 

세가지 상태를 가질 수 있음
- 1. 대기 (pending)
- 2. 이행 (fulfilled/resolved)
- 3. 거부 (rejected)

```
function asyncOperation(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            const success = true;
            if (success){
                resolve("작업이 성공적으로 완료되었습니다!");
            } else { 
                reject("작업이 실패했습니다!");
            }
        }, 1000);
    });
}

asyncOperation()
    .then(result => console.log(result)); // 성공 시 처리 
    .catch(error => console.error(error)); // 에러 발생 시 처리 
```

## 깊은 복사 / 얕은 복사 
- Deep Copy: 객체 또는 배열의 모든 내용 복사 후 새로운 객체 / 배열 생성하는 것 

```
const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the nested object in the original
original.b.c = 42; 

console.log(shallowCopy.b.c); // 42, because it's a reference copy 
console.log(deepCopy.b.c); // 2, because it's an independent copy 
```

- Shallow Copy: 객체 또는 배열을 복사 할 때, 내부 객체의 참조만 복사하여 부분적으로 새로운 객체를 생성하는 것. 내부 객체는 동일한 메모리 주소 참조 

## 확장된 배열 메서드
### `map()`
원본 배열의 모든 요소에 주어진 함수를 적용하여 새로운 배열 생성

```
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);
console.log(doubled);
```

### `filter()`
제공된 조건을 만족하는 요소들만 포함하는 새로운 배열 생성

```
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
```

### `reduce()`
배열의 각 요소에 대해 누산기 (Accumulator)를 사용해
하나의 값으로 줄이는 작업 수행 

```
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);
```


https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Indexed_collections
https://yjym33.tistory.com/150