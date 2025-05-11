# 선택자 및 결합자 

# 특이성 및 캐스케이드
CSS가 충돌하는 여러 규칙 사이에서 어떤 스타일을 최종으로 결정할지 결정하는 과정

## 1. 특이성 심화 
(A, B, C, D) 네 개의 값으로 계산됌.

- A: 인라인 스타일
- B: ID 선택자
- C: 클래스, 속성, 의사클래스 하나당 1점
- D: 요소, 의사요소 하나당 1점 


## 2. 케스케이드 완전 해부 
1. 중요도 `!important` > 일반 선언 
2. 출처: 인라인 > 저자 > 브라우저 기본
3. 레이어: `@layer` 순서대로 적용
4. 특이성, 소스 순서 



# CSS 상속

CSS 속성은 상속되는 것과 상속되지 않는 것이 있음. 

- 상속되는 속성: `color`, `font-family`, `line-height`
- 비상속 속성: `width`, `margin`, `border`

상속 속성이 명시되지 않으면 부모의 계산된 값을 물려받음.
- `inherit`: 해당 속성을 무조건 부모로부터 상속
- `initial`: css 사양에 정의된 기본 값으로 리셋
- `unset`: 속성이 상속 가능하면 `inherit`, 그렇지 않으면 `initial`과 동일하게 동작

```css
.parent { color: green; }
.child { color: inherit; }

.outer { margin: 50px; }
.outer div { margin: unset; }
```

