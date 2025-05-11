# CSS 정리
## 박스 모델, 플렉스 박스, 그리드, 위치 지정 

### 1. 박스 모델 
- 콘텐츠 + 패딩 + 테두리 + 마진
- `box-sizing`: 
    - `content-box`: 콘텐츠 크기만 `width`/`height`로 계산
    - `border-box`: 페딩 + 테두리까지 포함해 크기 계산
    - 수직 마진은 겹쳐져 큰 값만 적용 

#### Div 크기 계산

```css
.box { 
    width: 100px; 
    height: 100px; 
    padding: 10px; 
    border: 5px solid black; 
    margin: 15px; 
    box-sizing: border-box; 
    background-color: lightblue; 
}
```

![CSS 박스 모델 다이어그램](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model/box-model.png) 

- 출처: https://developer.mozilla.org


### 2. 플렉스박스 
- 1차원 레이아웃 (행/열)
- `justify-content`, `align-items`, `flex`로 정렬, 크기 제어.
- 두개의 축이 있음, `flex-direction`에 의해 정의됌.
    - `row`, `row-reverse`, `column`, `column-reverse`



### 3. 그리드
- 2차원 레이아웃
- `grid-template`, `minmax`, `auto-fit`으로 복잡한 구조 구현.
- 수평선과 수직선이 교차해서 이루어진 집합체 

```css
.gallery { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px; 
    padding: 15px;
}
.item { 
    padding: 10px; 
    background-color: lavender; 
    text-align: center; 
}
```
```html
<div class="gallery">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
</div>
```

### 4. 포지셔닝 
- `position`으로 요소 위치 제어
- `z-index`로 쌓임 순서 조정. 