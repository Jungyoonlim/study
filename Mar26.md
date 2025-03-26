# React 
## React의 원리, 특징, 장단점?
React

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


## Props Drilling 


## Context API 


## HOC 


## Hook

- `useState`
- `useEffect` 
- `useContext` 
- `useRef` 
- `useMemo` 


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

## 주소창에 주소를 입력했을 때의 흐름 