# MCQ in JavaScript, WebAPIs, CSS, HTML, Browser, Performance, I18n

## 1. Describe the difference between a cookie, `sessionStorage`, and `localStorage` in browsers. 
All are mechanisms of storing data on the client, the user's browser in this case. 
- cookie: Suitable for server-client communication, small storage capacity, can be persistent or session-based, domain specific. 
- `localStorage`: Suitable for long-term storage, data persists even after the browser is closed, accessible across all tabs and windows of the same origin, highest storage capacity among the three. 
- `sessionStorage`: Suitable for temporary data within a single page session , data is cleared when the tab or window is closed, has a higher storage capacity compared to cookies. 

**Korean**: 모두 클라이언트(사용자 브라우저)에 데이터를 저장하는 메커니즘입니다. 
- 쿠키: 서버-클라이언트 통신에 적합, 작은 저장 용량, 영구적이거나 세션 기반 가능, 도메인별 제한
- `localStorage`: 장기 저장에 적합, 브라우저 종료 후에도 데이터 유지, 같은 출처의 모든 탭과 창에서 접근 가능, 세 가지 중 가장 큰 저장 용량
- `sessionStorage`: 단일 페이지 세션 내 임시 데이터에 적합, 탭이나 창이 닫히면 데이터 삭제, 쿠키보다 큰 저장 용량

## 2. Describe the difference between `<script>`, `<script async>` and `<script defer>`
- `<script>`: Blocks HTML parsing while downloading and executing the script. Scripts execute in order.
- `<script async>`: Downloads script in parallel with HTML parsing. Executes immediately when download completes, potentially blocking parsing. Execution order not guaranteed.
- `<script defer>`: Downloads script in parallel with HTML parsing. Waits until HTML parsing is complete before executing. Scripts execute in order.

**Korean**: 
- `<script>`: 스크립트 다운로드와 실행 중 HTML 파싱을 차단. 스크립트는 순서대로 실행
- `<script async>`: HTML 파싱과 병렬로 스크립트 다운로드. 다운로드 완료 즉시 실행하여 파싱을 차단할 수 있음. 실행 순서 보장 안됨
- `<script defer>`: HTML 파싱과 병렬로 스크립트 다운로드. HTML 파싱 완료까지 기다린 후 실행. 스크립트는 순서대로 실행

## 3. Explain the concept of hoisting in JS.
A JS mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase. `var` declarations are hoisted and initialized with `undefined`. Function declarations are fully hoisted. `let` and `const` are hoisted but not initialized (temporal dead zone).

**Korean**: 컴파일 단계에서 변수와 함수 선언이 포함된 스코프의 맨 위로 이동되는 JS 메커니즘입니다. `var` 선언은 호이스팅되어 `undefined`로 초기화됩니다. 함수 선언은 완전히 호이스팅됩니다. `let`과 `const`는 호이스팅되지만 초기화되지 않습니다(일시적 사각지대).

## 4. What are the differences between JavaScript variables created using `let`, `var`, or `const`?
- `var`: Function-scoped, hoisted and initialized with `undefined`, can be redeclared, can be reassigned
- `let`: Block-scoped, hoisted but not initialized (temporal dead zone), cannot be redeclared, can be reassigned
- `const`: Block-scoped, hoisted but not initialized, cannot be redeclared, cannot be reassigned (but objects/arrays can be mutated)

**Korean**:
- `var`: 함수 스코프, 호이스팅되어 `undefined`로 초기화, 재선언 가능, 재할당 가능
- `let`: 블록 스코프, 호이스팅되지만 초기화 안됨(일시적 사각지대), 재선언 불가, 재할당 가능
- `const`: 블록 스코프, 호이스팅되지만 초기화 안됨, 재선언 불가, 재할당 불가(하지만 객체/배열은 변경 가능)

## 5. What is a closure in JS, and how or why would you use one?
A closure is when an inner function has access to variables from its outer (enclosing) function's scope even after the outer function has finished executing. Used for data privacy, creating function factories, module patterns, and maintaining state in asynchronous operations.

**Korean**: 클로저는 내부 함수가 외부(둘러싸는) 함수의 스코프 변수에 접근할 수 있는 것으로, 외부 함수 실행이 끝난 후에도 가능합니다. 데이터 프라이버시, 함수 팩토리 생성, 모듈 패턴, 비동기 작업에서 상태 유지에 사용됩니다.

## 6. Describe event bubbling in JS and browsers
Event bubbling is when an event triggered on a child element propagates up through its parent elements to the document root. The event starts at the target element and "bubbles up" through the DOM tree. Can be stopped using `event.stopPropagation()`.

**Korean**: 이벤트 버블링은 자식 요소에서 발생한 이벤트가 부모 요소들을 통해 문서 루트까지 전파되는 것입니다. 이벤트는 대상 요소에서 시작하여 DOM 트리를 통해 "버블링"됩니다. `event.stopPropagation()`으로 중단할 수 있습니다.

## 7. Explain event delegation in JS
Event delegation is a technique where you attach a single event listener to a parent element to handle events for multiple child elements. It leverages event bubbling to catch events from child elements. Useful for dynamic content and performance optimization.

**Korean**: 이벤트 위임은 여러 자식 요소의 이벤트를 처리하기 위해 부모 요소에 단일 이벤트 리스너를 연결하는 기법입니다. 이벤트 버블링을 활용하여 자식 요소의 이벤트를 포착합니다. 동적 콘텐츠와 성능 최적화에 유용합니다.

## 8. What's the difference between a JS variable: `null`, `undefined`, and undeclared?
- `undefined`: Variable has been declared but not assigned a value, or function doesn't return anything
- `null`: Intentional absence of value, explicitly assigned
- `undeclared`: Variable has not been declared at all, causes ReferenceError when accessed

**Korean**:
- `undefined`: 변수가 선언되었지만 값이 할당되지 않았거나, 함수가 아무것도 반환하지 않음
- `null`: 의도적인 값의 부재, 명시적으로 할당됨
- `undeclared`: 변수가 전혀 선언되지 않음, 접근 시 ReferenceError 발생

## 9. Explain the differences between CommonJS modules and ES modules in JS?
- **CommonJS**: Uses `require()` and `module.exports`, synchronous loading, dynamic imports, mainly used in Node.js
- **ES Modules**: Uses `import` and `export`, asynchronous loading, static analysis possible, browser and Node.js support, tree-shaking friendly

**Korean**:
- **CommonJS**: `require()`와 `module.exports` 사용, 동기 로딩, 동적 임포트, 주로 Node.js에서 사용
- **ES 모듈**: `import`와 `export` 사용, 비동기 로딩, 정적 분석 가능, 브라우저와 Node.js 지원, 트리 쉐이킹 친화적

## 10. What is the event loop in JS runtimes?
The event loop is a mechanism that handles asynchronous operations in JavaScript. It continuously checks the call stack and task queues (microtask and macrotask queues), executing tasks when the call stack is empty. Microtasks (Promises) have higher priority than macrotasks (setTimeout, DOM events).

**Korean**: 이벤트 루프는 JavaScript에서 비동기 작업을 처리하는 메커니즘입니다. 콜 스택과 태스크 큐(마이크로태스크와 매크로태스크 큐)를 지속적으로 확인하여 콜 스택이 비어있을 때 태스크를 실행합니다. 마이크로태스크(Promise)가 매크로태스크(setTimeout, DOM 이벤트)보다 높은 우선순위를 가집니다.

## 11. What are the pros and cons of using Promises instead of callbacks in JS?
**Pros**: Better error handling with `.catch()`, avoids callback hell, chainable with `.then()`, better readability, works well with async/await
**Cons**: Slightly more complex for simple operations, requires understanding of Promise states, not supported in very old browsers

**Korean**:
**장점**: `.catch()`로 더 나은 에러 처리, 콜백 지옥 방지, `.then()`으로 체이닝 가능, 더 나은 가독성, async/await와 잘 작동
**단점**: 간단한 작업에는 약간 복잡, Promise 상태 이해 필요, 매우 오래된 브라우저에서 지원 안됨

## 12. Describe Block Formatting Context and how it works.
A Block Formatting Context (BFC) is a part of the visual CSS rendering where block boxes are laid out. Elements that establish BFC include floated elements, absolutely positioned elements, `overflow` not `visible`, `display: flow-root`, flex/grid containers. BFC prevents margin collapse and contains floated children.

**Korean**: 블록 포맷팅 컨텍스트(BFC)는 블록 박스가 배치되는 시각적 CSS 렌더링의 일부입니다. BFC를 생성하는 요소에는 플로팅 요소, 절대 위치 요소, `overflow`가 `visible`이 아닌 요소, `display: flow-root`, flex/grid 컨테이너가 있습니다. BFC는 마진 병합을 방지하고 플로팅된 자식을 포함합니다.

## 13. Describe z-index and how stacking context is formed.
`z-index` controls the stacking order of positioned elements. Stacking contexts are formed by elements with `position` other than `static` and `z-index` other than `auto`, `opacity` less than 1, `transform`, `filter`, `will-change`, flex/grid items with `z-index`. Elements within the same stacking context are compared by their `z-index` values.

**Korean**: `z-index`는 위치가 지정된 요소의 쌓임 순서를 제어합니다. 쌓임 컨텍스트는 `position`이 `static`이 아니고 `z-index`가 `auto`가 아닌 요소, `opacity`가 1보다 작은 요소, `transform`, `filter`, `will-change`, `z-index`가 있는 flex/grid 아이템에 의해 형성됩니다. 같은 쌓임 컨텍스트 내의 요소들은 `z-index` 값으로 비교됩니다.

## 14. Explain how a browser determines what elements match a CSS selector.
Browsers parse CSS selectors from right to left (rightmost selector first). They start with the key selector (rightmost) and filter elements, then check if parent elements match the remaining selectors. This approach is more efficient because it quickly eliminates non-matching elements.

**Korean**: 브라우저는 CSS 선택자를 오른쪽에서 왼쪽으로(가장 오른쪽 선택자부터) 파싱합니다. 키 선택자(가장 오른쪽)로 시작하여 요소를 필터링한 다음, 부모 요소가 나머지 선택자와 일치하는지 확인합니다. 이 방식은 일치하지 않는 요소를 빠르게 제거하므로 더 효율적입니다.

## 15. Explain your understanding of the box model and how you'd tell the browser in CSS to render your layout in different box models.
The CSS box model consists of content, padding, border, and margin. By default, `width` and `height` apply to content only (content-box). Using `box-sizing: border-box` makes `width` and `height` include padding and border, making layout calculations easier.

**Korean**: CSS 박스 모델은 콘텐츠, 패딩, 보더, 마진으로 구성됩니다. 기본적으로 `width`와 `height`는 콘텐츠에만 적용됩니다(content-box). `box-sizing: border-box`를 사용하면 `width`와 `height`에 패딩과 보더가 포함되어 레이아웃 계산이 쉬워집니다.

## 16. Is there any reason you'd want to use `translate()` instead of `absolute` positioning, or vice versa?
`translate()` is better for animations (hardware acceleration, doesn't trigger layout/paint), maintains document flow, and is more performant. `absolute` positioning removes elements from document flow, useful for overlays, tooltips, or when you need precise positioning relative to a positioned ancestor.

**Korean**: `translate()`는 애니메이션에 더 좋습니다(하드웨어 가속, 레이아웃/페인트 트리거 안함), 문서 플로우 유지, 더 성능이 좋습니다. `absolute` 포지셔닝은 요소를 문서 플로우에서 제거하므로 오버레이, 툴팁, 또는 위치가 지정된 조상에 상대적인 정확한 위치가 필요할 때 유용합니다.

## 17. What does `{ box-sizing: border-box; }` do?
It changes the box model so that `width` and `height` include padding and border, not just the content area. This makes it easier to size elements predictably, as the total size equals the specified width/height regardless of padding and border values.

**Korean**: 박스 모델을 변경하여 `width`와 `height`가 콘텐츠 영역뿐만 아니라 패딩과 보더를 포함하도록 합니다. 패딩과 보더 값에 관계없이 전체 크기가 지정된 너비/높이와 같아지므로 요소 크기를 예측 가능하게 만들기 쉬워집니다.

## 18. What is the CSS `display` property and can you give a few examples of its use?
The `display` property defines how an element is displayed in the document flow. Examples:
- `block`: Takes full width, starts on new line (div, p)
- `inline`: Takes only necessary width, doesn't break line (span, a)
- `inline-block`: Inline behavior but can have width/height
- `flex`: Creates flexible layout container
- `grid`: Creates grid layout container
- `none`: Element is not displayed

**Korean**: `display` 속성은 요소가 문서 플로우에서 어떻게 표시되는지 정의합니다. 예시:
- `block`: 전체 너비 차지, 새 줄에서 시작 (div, p)
- `inline`: 필요한 너비만 차지, 줄 바꿈 안함 (span, a)
- `inline-block`: 인라인 동작이지만 너비/높이 가질 수 있음
- `flex`: 유연한 레이아웃 컨테이너 생성
- `grid`: 그리드 레이아웃 컨테이너 생성
- `none`: 요소가 표시되지 않음

## 19. What is the difference between a `relative`, `fixed`, `absolute`, `sticky`, `static`ally positioned element?
- `static`: Default positioning, follows normal document flow
- `relative`: Positioned relative to its normal position, maintains space in document flow
- `absolute`: Positioned relative to nearest positioned ancestor, removed from document flow
- `fixed`: Positioned relative to viewport, removed from document flow, stays in place when scrolling
- `sticky`: Switches between relative and fixed based on scroll position

**Korean**:
- `static`: 기본 위치 지정, 일반 문서 플로우를 따름
- `relative`: 일반 위치에 상대적으로 위치 지정, 문서 플로우에서 공간 유지
- `absolute`: 가장 가까운 위치 지정된 조상에 상대적으로 위치, 문서 플로우에서 제거
- `fixed`: 뷰포트에 상대적으로 위치, 문서 플로우에서 제거, 스크롤 시 제자리 유지
- `sticky`: 스크롤 위치에 따라 relative와 fixed 사이 전환

## 20. What kind of things must you be wary of when designing or developing for multilingual sites?
- Text expansion/contraction in different languages
- Right-to-left (RTL) languages requiring different layouts
- Character encoding (UTF-8)
- Font support for different scripts
- Date, time, and number formatting
- Cultural considerations for colors, images, and symbols
- URL structure for different languages
- SEO considerations with hreflang tags

**Korean**: 다국어 사이트 설계/개발 시 주의사항:
- 다른 언어에서 텍스트 확장/축소
- 오른쪽에서 왼쪽(RTL) 언어의 다른 레이아웃 요구
- 문자 인코딩 (UTF-8)
- 다른 문자체계의 폰트 지원
- 날짜, 시간, 숫자 형식
- 색상, 이미지, 기호의 문화적 고려사항
- 다른 언어의 URL 구조
- hreflang 태그를 사용한 SEO 고려사항

## 21. What's the difference between `block`, `inline`, and `inline-block`?
- `block`: Takes full available width, starts on new line, can have width/height/margin/padding
- `inline`: Takes only content width, doesn't break line, ignores width/height, only horizontal margin/padding
- `inline-block`: Inline flow behavior but can have width/height like block elements, respects all margin/padding

**Korean**:
- `block`: 사용 가능한 전체 너비 차지, 새 줄에서 시작, 너비/높이/마진/패딩 가능
- `inline`: 콘텐츠 너비만 차지, 줄 바꿈 안함, 너비/높이 무시, 수평 마진/패딩만
- `inline-block`: 인라인 플로우 동작이지만 블록 요소처럼 너비/높이 가능, 모든 마진/패딩 적용

