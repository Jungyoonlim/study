# 데이터 구조 + 형
## 7가지 원시 데이터형 
1. Boolean
    - `true`와 `false`
2. null
3. undefined 
4. Number
5. BitInt
6. String
7. Symbol 

## 자료형 변환

`var answer = 42;`

동일한 변수에 문자열 값 할당


## 리터럴
JavaScript에서 값을 나타내기 위해 사용

1. 배열 리터럴
    e.g. `let coffees = ["French Roast", "Colombian", "Kona"];

    - 추가 쉼표
        `let fish = ["Lion", , "Angel"];`
        `var myList = [, "home", , "school"];`
            - myList[1], myList[3]은 값이 빠짐 
2. 불리언 리터럴 
3. 부동 소수점 리터럴

4. 숫자 리터럴
    - 정수 리터럴 
        10진수, 16진수, 8진수 및 2진수로 표현될 수 있음. 
            - 10진수 정수 리터럴은 `0`으로 시작하지 않는 숫자열로 이루어짐 
            - `0x`로 시작하는 숫자열: 16진수 정수 리터럴
            - `0b`로 시작하는 숫자열: 2진수 정수 리터럴 
            - `n`으로 끝나는 숫자열: `BigInt` 리터럴 


    ```
    0, 117, 123435n (10진수)
    015, 0001, 0o7777n (8진수)
    0x1123, 0x00111, 0x1234n (16진수)
    0b11, 0b0011, 0b1110101010110n (2진수)
    ```


5. 객체 리터럴
    - 중괄호 `{}`로 묶인 0개 이상인 객체의 속성명 

    ```
    var sales = "Toyota";

    function carTypes(name) {
        if (name === "Honda"){
            return name;
        } else { 
            return "Sorry, we don't sell " + name + ".";
        }
    }

    var car = { myCar: "Saturn", getCar:
    carTypes("Honda"), special: sales }; 

    console.log(car.myCar);
    console.log(car.getCar);
    console.log(car.special);
    ```

    ```
    var car = { manyCars: { a: "Saab", b: "Jeep" }, 7:
    "Mazda" };
    ```

    향상된 객체 리터럴
    ```
    var obj = {
        __proto__: theProtoObj,
        handler,
        toString() {
            return "d " + super.toString();
        },
        ["prop_" + (() => 42)()]: 42, 
    };
    ```

6. 정규식 리터럴

`var re = /ab+c/;`

7. 문자열 리터럴 
큰 따옴표 (") 혹은 작은 따옴표(')로 묶인 0개 이상의 문자 
