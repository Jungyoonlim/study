# 인덱스 / key 기반의 컬렉션 / `Promise` 

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

## 희소 배열 




## key 기반 
### `Map` 객체 


### `Object`와 `Map` 비교


### `Set` 오브젝트 
`Set` 객체는 값들의 집합 



### 배열과 `Set` 비교 



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

https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Indexed_collections