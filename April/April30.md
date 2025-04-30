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

![CSS 박스 모델 다이어그램](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model/box-model.png) 출처: https://developer.mozilla.org

```css


```