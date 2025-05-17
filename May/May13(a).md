# 자바스크립트 클로저 리뷰 

함수가 선언된 시점의 외부 변수를 계속 참조할 수 있는 메커니즘.
함수를 반환하거나 콜백으로 전달하며 그 함수 내부에서 외부 변수를 사용하면 클로저 생성. 
클로저 덕분에 외부 함수가 종료된 뒤에도 변수 상태를 유지하거나 데이터 은닉 같은 패턴 구성 가능. 


```typescript
let x: number = 1; 

function outer(): () => void {
    let y: number = 2; 

    function inner(): void{
        console.log(x,y);
    }
    return inner; 
}

const fn: () => void = outer();
fn();
```

자바스크립트는 정적 스코프를 따름. 
함수가 어디에서 선언됐느냐에 따라 변수 접근 범위가 결정됌. 
`inner`는 선언 시점의 스코프 체인에 `x`와 `y`가 포함되어 있음. 


```javascript
for (var i = 1; i <=3; i++){
    setTimeout(function (){
        console.log(i);
    }, i * 100);
}
```

### Debounce 
```typescript 
export default function debounce(
    func: Function,
    wait: number =0
): Function {
    let timeoutID: ReturnType<typeof setTimeout> | null = null; 
    return function (this: any, ...args: any[]){
        const context = this; 

        // 전 스케줄 콜 다 캔슬하기 
        clearTimeout(timeoutID ?? undefined);

        // 타이머 콜백을 setTimeout으로 패스 
        timeoutID = setTimeout(function (){
            // 저장된 ID 클리어 
            timeoutID = null;
            // original Func 부르기 
            func.apply(context, args);
            // ms 딜레이 
        }, wait);
    };
}
```

## `this` 
JavaScript에서 `this`는 함수가 실행되는 문맥을 가르킴.

### 1. 전역 컨텍스트 
함수나 객체 밖에서 사용하면 전역 객체.
- 브라우저에서: window
- Node.js: global

```javascript
console.log(this); // window
```

### 2. 객체의 메서드 내부 
객체의 메서드로 호출될 때, `this`는 객체 자신을 가리킴. 

```javascript
const person = { 
    name: "Alice",
    greet: function(){
        console.log(this.name); // this는 person
    }
};

person.greet();
```

### 3. 일반 함수 내부 
일반 함수가 단독으로 호출될 때, `this`는 전역 개체를 가리킴. 

```javascript
function show(){
    console.log(this);
}

show(); // 브라우저: window, 엄격 모드: undefined
```

### 4. 생성자 함수 내부 
```javascript
function Car(brand){
    this.brand = brand; 
}

const myCar = new Car("Toyota");
console.log(myCar.brand); // Toyota 
```

### 5. 화살표 함수 
바깥 스코프의 `this`를 그대로 사용.

```javascript
const obj = { 
    value: 42, 
    show: function(){
        const arrow = () => {
            console.log(this.value); // this는 show의 this 그대로 사용 
        };
        arrow();
    }
};

obj.show(); // 출력: 42 
```

### 6. 명시적 바인딩: `call`, `apply`, `bind` 

```javascript 
function sayHello(){
    console.log(this.name);
}

const user = { name: "Bob" };

sayHello.call(user); // call Bob 
```
