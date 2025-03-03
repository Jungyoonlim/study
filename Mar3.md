# 자바스크립트 기초

## 선언 
자바스크립트에는 3가지 방법이 있음
### 1. `var`
변수를 선언, 추가로 동시에 값을 초기화.

### 2. `let`
블록 스코프 지역 변수 선언. 추가로 동시에 값을 초기화.
    
### 3. `const`
블록 스코프 읽기 전용 상수를 선언.

## 변수 선언
지정된 초기 값 없이 `var`혹은 `let`문을 사용해서 선언된 변수는 `undefined` 값을 갖는다. 

```
var a; 
console.log("a 값은" + a); 

console.log("b 값은" + b);
var b;  

console.log("c 값은 " + c);

```

```
var input; 
if (input === undefined){
    doThis();
} else { 
    doThat(); 
}
```


```
var myArray = [];
if (!myArray[0]) myFunction(); 
```



https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_types#%EC%B6%94%EA%B0%80_%EC%A0%95%EB%B3%B4