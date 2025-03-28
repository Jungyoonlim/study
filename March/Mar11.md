# 루프와 반복
## `for` 문 
어떤 특정한 조건이 거짓으로 판별될 때까지 반복 


## `do...while` 문 

```
do
    문장
while (조건문)
```

## `while` 문 

```
while (조건문)
    문장
```

```
while (n<3){
    n++;
    x += n; 
}
```

## 레이블 문 

```
label:
    statement
```

```
markLoop: while(theMark == true){
    doSomething();
}
```

## `break` 문 
반복문 / switch 문 / 레이블 문과 결합한 문장을 빠져나올 때 씀.

- 레이블 문을 안 쓰고 `break`로 쓸 때: `while`/`do-while`/`for`/`switch`문 종료 후 다음 명령어로 넘어감.
- 레이블 문을 쓸 때: 특정 레이블 문에서 끝날 때.

1. break;
2. break[레이블];

```
for (i = 0; i < a.length; i++){
    if (a[i] == theValue){
        break; 
    }
}
```

```
var x = 0; 
var z = 0; 
labelCancelLoops: while (true){
    console.log("inner loops: " + z);
    z += 1; 
    if (z === 10 && x === 10){
        break labelCancelLoops; // exit both loops completely 
    } else if (z === 10){
        break; // exit current loop only 
    }
}
```

- A labeled infinite loop named: `labelCancelLoops`

## `continue` 문 
1. continue; 
2. continue label; 

```
i = 0; 
n = 0; 
while (i < 5){
    i++; 
    if (i === 3){
        continue; // skips 3 
    }
    n += i;
} // 1, 2, 4, 5
```

```
checkiandj: while (i < 4){
    console.log(i);
    i += 1;
    checkj: while (j > 4){
        console.log(j);
        j -= 1; 
        if (j % 2 == 0){
            continue checkj; 
        }
        console.log(j + " is odd.");
    }
    console.log("i= " + i);
    console.log("j= " + j);
}
```

## `for ... in` 문과 `for ... of` 문

```
for (variable in object){
    statement 
}
```

```
for (variable of object){
    statement
}
```

```
let arr = [3, 5, 7];
arr.foo = "hello";

// iterates over cell enumerable properties of an object
for (let i in arr){
    console.log(i); // logs 0, 1, 2, foo
}

// iterates over the values of an iterable object 
for (let i of arr){
    console.log(i); // logs 3, 5, 7, hello 
}
```

## Closure 
Javascript는 함수의 중첩을 허용하고 내부 함수가 외부 함수 안에서
정의된 모든 변수와 함수에 대해 전체 접근 권한 부여 

```
function outer(){
    let outerVar = 10; 

    function inner(){
        console.log(outerVar);
    }

    return inner; 
}
const closureFn = outer();
closureFn(); 
```

- `var` 대신 `let` 사용 