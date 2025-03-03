# 자바스크립트 기초 (기본, 주석, 선언)

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


선언되지 않은 변수에 접근을 시도하면 `ReferenceError` 예외 발생. 
```
var a; 
console.log("a 값은" + a); 

console.log("b 값은" + b);
var b;  

console.log("c 값은 " + c);

let x; 
console.log("x 값은 " + x);

console.log("y 값은 " + y);

let y; 
```

`undefined`을 사용해 변수 값이 있는지 확인.
아래에 `input` 변수는 값이 할당되지 않고 `if`문은 `true`로 평가.

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

`undefined` 값은 수치 맥락에서 사용될때 `NaN`으로 변환.

예시:
```
var a; 
a + 2; // NaN 으로 평가 
```

`null` 값을 평가할 때, 수치 맥락에서는 `0`으로, 불리언 맥락에서는 `false`로 동작. 


예시: 
```
var n = null;
console.log(n * 32); // 콘솔에 0으로 로그가 남음. 
```

## 변수 스코프 

```
if (true){
    var x = 5;
}
console.log(x); // 5 
```

이 동작을 `let` 선언을 사용해서 바뀜.

```
if (true){
    let y = 5;
}
console.log(y); // ReferenceError: y is not defined. 
```
## 변수 호이스팅 

예외를 받지 않고도 나중에 선언된 변수를 참조할 수 있음. (호이스팅)
자바스크립트 변수가 어떤 의미에서 함수나 문의 최상단으로 올려지는 것을 말함.

```
// Example 1 
console.log(x === undefined); // true
var x = 3; 

// Example 2 
// undefined 값 반환. 
var myvar = "my value";

(function () {
    console.log(myvar);
    var myvar = "local value";
})();
```

아래와 동일
```
// Example 1 
var x; 
console.log(x === undefined);
x = 3; 

// Example 2 
var myvar = "my value";

(function () {
    var myvar; 
    console.log(myvar);
    myvar = "local value";
})();
```

## 함수 호이스팅 
```
foo();

function foo(){
    console.log("bar");
}

// 함수 표현식 
baz();

var baz = function (){
    console.log("bar2");
}
```


## 상수 
`const` 키워드로 읽기 전용 상수를 만들 수 있음. 

상수에 대한 스코프 규칙은 `let` 블록 스코프 변수와 동일.

`const PI = 3.14;`

```
function f(){}
const f = 5; 

// 오류 발생
function f() {
    const f = 5; 
    var g; 

    // statements
}
```

```
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue"
```



https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_types#%EC%B6%94%EA%B0%80_%EC%A0%95%EB%B3%B4
https://blog.naver.com/sucessmh25/223096249176
