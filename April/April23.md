# DOM 

html 태그를 브라우저가 이해할 수 있는 객체 형태로 구성한 것 
브라우저가 html을 읽으면, 각 태그와 텍스트를 노드 단위로 나눔 그리고 트리로 정리.

## DOM Traversal / 순회

`parentNode`, `children`, `nextElementSibling`, `previousElementSibling`, `firstElementChild`, `lastElementChild`와 같은 속성을 사용해 DOM 트리에서 요소나 노드를 탐색하는 것 

e.g.
```javascript
const list = document.getElementById('list');
console.log(list.children[0].textContent);
console.log(list.firstElementChild.nextElementSibling.textContent);
console.log(list.parentNode.tagName);
```

## DOM 생성
`document.createElement()`를 사용해 새로운 요소나 노드를 만듬
`appendChild()`, `append()`, `prepend()`와 같은 메서드로 DOM에 추가.

```javascript
const div = document.createElement('div');
div.textContent = 'New Div';
div.className = 'box';
document.body.appendChild(div);

// Create a list dynamically
const ul = document.createElement('ul');
for (let i = 1; i <= 3; i++){
    const li = document.createElement('li');
    li.textContent = `아이탬 ${i}`;
    ul.append(li);
}
document.body.append(ul);
```

## DOM 조작 
기존 요소의 콘텐츠, 속성, 스타일, 클래스를 수정 

- `textContent` 또는 `innerHTML`로 콘텐츠 업데이트
- `element.style.property`로 스타일 수정
- `classList.add()`, `classList.remove()`, `classList.toggle()`로 클래스 변경 
- `setAttribute()` 또는 직접 속성 접근으로 속성 설정 


## 요소 또는 노드 속성에 접근 
요소 또는 노드 속성에 접근하여 `textContent`, `value`, `className`, `id` 사용자 정의 속성과 같은 데이터를 읽거나 업데이트 가능 

- 텍스트는 `textContent`, HTML 콘텐트는 `innerHTML` 사용.
- `<input>`과 같은 폼 입력은 `value`로 접근
- `getAttribute()` 또는 직접 속성으로 속성 가져오기

```javascript
const input = document.getElementById('myInput');
console.log(input.value);
console.log(input.getAttribute('data-type'));
console.log(input.dataset.type);
console.log(input.id);

input.value = '새 값';
```

## 이벤트 위임
상위 요소에 단일 이벤트 리스너를 부착하여 여러 하위 요소의 이벤트를 처리하는 방법 
이벤트 버블링을 활용 

- 이벤트는 대상에서 상위 요소로 버블링 됌
- `event.target`으로 클릭된 요소 식별
- `event.target` 속성을 확인하여 작업 필터링 


```javascript
<ul id="itemList">
    <li>아이템 1</li>
    <li>아이템 2</li>
</ul>
```

```javascript
const list = document.getElementById('itemList');
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI'){
        console.log(`클릭됨: ${event.target.textContent}`);
    }
});

const newItem = document.createElement('li');
newItem.textContent = '아이템 3';
list.append(newItem);
```