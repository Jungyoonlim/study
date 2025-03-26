# React 
## React의 원리, 특징, 장단점?
컴포넌트 기반 아키텍쳐와 가상 DOM을 사용해서 UI를 효율적으로 렌더링하고 업데이트함. 

단방향 데이터 흐름 / 가상 DOM을 통한 효율적 렌더링 

## Virtual DOM 
실제 DOM의 가벼운 복사본 
상태 변화에 따라 가상 DOM 업데이트 

작동 원리: 상태 변화가 발생하면 가상 DOM 생성 
전의 가상 DOM과 지금 가상 DOM을 비교하여 
변경된 부분을 찾아내서 화면 업데이트 


## Element와 Component 차이 
- Element: 가상 DOM에서 렌더링 결과 - 가상 DOM의 노드를 표현하는 순수한 객체 
- Component: 엘리먼트를 조합해 재사용 가능한 UI 모듈로 만든 것 

```
// 엘레먼트 
const element = <h1>Hello, world!</h1>;

// 함수형 컴포넌트
function Greeting(props){
    return <h1>Hello, {props.name}!</h1>
}

// 클래스형 컴포넌트 
class Greeting extends React.Component { 
    render(){
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

const element = <Greeting name="React" />;
```

## Props에 대한 설명
부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 메커니즘 
컴포넌트 내부에서 변경 불가능 

## Props Drilling 
컴포넌트 트리 구조에서 여러 단계를 거쳐 프롭스를 전달해야 하는 상황 

### 어떻게 Props Drilling을 해결할지 
https://frontend-fundamentals.com/code/

Context API나 Redux와 같은 상태 관리 라이브러리를 사용해서 부모 자식간의 프롭스 전달 간소화 

https://frontend-fundamentals.com/code/examples/item-edit-modal.html


## Context API 
React 상태를 전역적으로 관리하기 위한 메커니즘
컴포넌트 트리를 횡단하여 데이터 전달 간으 

데이터의 흐름을 간소화하고 계층 구조 전체에 쉽게 공유 가능 

ContextAPI를 사용하면 쉽게 Props Drilling을 해결할 수 있지만, 모든 값을 ContextAPI로 관리해야하는 것이 아님. 

ContextAPI를 사용하기 전에, `children` props를 이용해 컴포넌트를 전달해 depth를 줄여야. 

연습 
```
function App({ theme }){
    return <Header theme={theme} />;
}

function Header({ theme }){
    return <Button theme={theme}>Click</Button>;
}
```

Use `children` to let `App` compose `Button` directly

```
function Header({ children }){
    return <Button>{children}</Button>;
}
```

how to use: 
```
function App(){
    return (
        <Header>
            <Button theme="dark">Click</Button>
        </Header>
    )
}
```

## HOC 
컴포넌트 로직을 재사용하기 위한 패턴
함수를 인자로 받아 컴포넌트를 반환하는 함수 
로그인 여부를 확인하거나 스타일 적용하기 위해 사용 

## Hook

### - `useState`
함수형 컴포넌트에서 상태를 관리할 수 있는 hook 

### - `useEffect` 
부수 효과 (데이터 가져오기, 구독 설정)을 처리하는 hook 
렌더링 후 실행 

### - `useContext` 
Context API를 사용하여 컨텍스트 값을 가져오는 hook 

### - `useRef` 
ref를 생성하고 DOM 또는 컴포넌트 인스턴스를 접근하는 데 사용 

### - `useMemo` 
성능 최적화를 위해 값을 메모이제이션하는 hook
렌더링 성능 향상 

-------------------------- 
아래는 이번주 말까지 

## Flux 패턴에 대한 설명 


# TypeScript 간단히 
## Generic 


# Frontend 
## 브라우저 렌더링 과정 

## CSR과 SSR 차이 

## CORS 

## 쿠키, 세션, 웹스토리지 차이 

## 로그인 처리를 할 때 쿠키와 세션을 어떻게 사용하나요?

## 토큰 기반 인증 방식 

## 크로스 브라우징 

## SEO 
웹사이트가 검색 엔진에서 노출되도록 최적화하는 작업 

## 주소창에 주소를 입력했을 때의 흐름 
1. 브라우저는 입력된 주소를 기본으로 DNS 을 조회해서 서버의 IP 주소 확인
2. 브라우저는 해당 IP주소로 HTTP 요청을 생성하고 서버로 요청 보냄
3. 서버는 요청된 페이지나 리소스를 찾고, 필요한 경우 데이터베이스에서 정보를 가져옴
4. 서버는 HTTP 응답 생성, 브라우저로 응답을 보냄
5. 브라우저는 받은 응답을 해석하고 웹페이지를 렌더링하고 화면에 표시 
