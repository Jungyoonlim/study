# 제어 흐름과 오류 처리 

## 블록문 

명령문들을 그룹으로 묶을 수 있는 블록문 
블록은 한 쌍의 중괄호로 감쌈. 
```
{
    statement_1;
    statement_2; 
    ...
    statement_n;
}
```

예제 (`if`, `for`, `while`)

```
while (x < 10){
    x++;
}
```

`x++`가 블록문임.

## 조건문
### `if...else` 문 
명령문을 논리 조건이 참일 때 실행하려면 `if`문 사용. 
`else`절을 추가해서 조건이 거짓인 경우에 실행할 명령문 지정 가능.

```
if (condition){
    statement_1;
} else { 
    statement_2; 
}
```

`else if`를 사용 가능 

```
if (condition_1){
    statement_1;
} else if (condition_2){
    statement_2; 
} else if (condition_n) {
    statement_n;
} else { 
    statement_last;
}
```


### `switch` 

`switch`문은 프로그램이 표현식을 평가한 후, 그 값과 `case` 레이블 값을 비교해 일치하는 `case`의 명령문을 실행.

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

### break 문 
각각의 `case`에는 선택적으로 `break`문 추가 가능. 
`break`은 `case`의 명령문 실행 후 프로그램이 `switch`의 밖으로 나가도록 함. 

`break`을 생략하면 프로그램은 `switch`문을 탈출하지 않고,
다음 `case`의 명령문 실행. 

## 예외 처리 명령문 
### `throw`문

`throw expression;`
 

### `try ... catch`문 
실행을 시도할 블록 표시 
그 안에서 예외가 발생할 경우 처를 맡을 하나 이상의 반응 명령문 

### `catch` 블록

```
catch (catchID){
    statements; 
}
```


```
try { 
    throw "myException";
} catch (e) {
    logMyErrors(e); 
}
```

### `finally` 블록
`finally`블록은 `try`와 `catch`블록 실행이 끝난 후 이어서, 그리고 `try...catch...finally`문 이후의 명령문들보다는 먼저 실행할 명령문을 담습니다. 

`finally`블록은 `try` 블록 안에서 예외가 발생했는지 여부와 관계 없이, `catch`블록이 따로 존재하지 않더라도 항상 실행됌. 

### `Error` 객체 활용하기 
Error 객체의 `name`과 `message` 속성으로부터 오류의 유형에 따라 좀 더 정제된 메시지를 가져올 수 있음. 

```
function doSomethingErrorProne(){
    if (ourCodeMakesAMistake()){
        throw (new Error('메시지'))
    } else { 
        doSomethingToGetAJSError();
    }
}
try {
    doSthErrorProne();
} catch (e) {
    console.log(e.name); // 'Error' 기록
    console.log(e.message); // '메시지' 또는 JS 오류 메시지 
}

```
---
## 생성자 (generator)
객체를 생성하기 위한 함수
new 키워드와 함께 생성자 함수를 호출하면 새로운 객체 생성됌

## async와 await이 무엇인가요
async와 await은 Promise를 더 잘 다루기 위한 자바스크립트의 키워드와
async 함수 내에서 await 키워드를 사용하여 Promise가 이행될 때까지 기다리고 결과 반환
- async: 항상 Promise 반환
- await: Promise가 아닌 값도 받을 수 있음. 


## 클로져 
함수와 그 함수가 선언된 스코프의 조합
함수가 자신이 선언된 스코프 외부에서 호출되더라도 해당 스코프의 변수에 접근할 수 있는 기능을 가짐.
주로 private 변수를 구현 / 함수 팩토리로 사용됌. 

https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
https://yjym33.tistory.com/150
