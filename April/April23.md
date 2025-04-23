# DOM 
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



```
