# 

## Generator 
함수의 실행을 일시 중지하고 나중에 다시 시작할 수 있는 함수 
function* 키워드를 사용하여 정의 
yield 키워드를 통해 값을 반환, 실행을 일시 중지 할 수 있음 

```
function* fruitList(){
    yield 'Banana';
    yield 'Apple';
    yield 'Orange';
}

const fruits = fruitList();

fruits.next();
fruits.next();
fruits.next();
fruits.next();
```