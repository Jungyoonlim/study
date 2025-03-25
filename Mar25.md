# generator, proxy 

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

## Proxy 
기본 작업 (예: 속성 조회, 할당, 열거, 함수 호출) 등에 대해 사용자 지정 동작을 추가로 정의하는데 사용

```
var x = new Proxy(target, handler);
```

```
const dog = {breed: "German Shephard", age: 5};

const dogProxy = new Proxy(dog, { 
    get(target, breed){
        return target[breed].toUpperCase()
    }
})

```