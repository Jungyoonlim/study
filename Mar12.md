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



### 배열과 `Set` 비교 





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
- Shallow Copy: 객체 또는 배열을 복사 할 때, 내부 객체의 참조만 복사하여 부분적으로 새로운 객체를 생성하는 것. 내부 객체는 동일한 메모리 주소 참조 

## 확장된 배열 메서드
### `map()`


### `filter()`


### `reduce()`


https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Indexed_collections
https://yjym33.tistory.com/150