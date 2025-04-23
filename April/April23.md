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



## 요소 또는 노드 속성에 접근 
요소 또는 노드 속성에 접근하여 `textContent`, `value`, `className`, `id` 사용자 정의 속성과 같은 데이터를 읽거나 업데이트 가능 

- 텍스트는 `textContent`, HTML 콘텐트는 `innerHTML` 사용.
- 




## 이벤트 위임
상위 요소에 단일 이벤트 리스너를 부착하여 여러 하위 요소의 이벤트를 처리하는 방법 
이벤트 버블링을 활용 


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