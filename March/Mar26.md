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

```
const { items, recommendedItems } = useItemEditModalContext();
```

- 1) `useItemEditModalContext`는 `ItemModal`과 관련된 Context에서 필요한 데이터 `items`, `recommendedItems`를 가져오는 커스텀 훅 
- 2) Destructuring 
`const { items, recommendedItems } = ... `는 Context에서 반환된 객체에서 `items`와 `recommendedItems`라는 속성 추출 
- 3)  

## HOC 
컴포넌트 로직을 재사용하기 위한 패턴
함수를 인자로 받아 컴포넌트를 반환하는 함수 
로그인 여부를 확인하거나 스타일 적용하기 위해 사용 

https://frontend-fundamentals.com/code/examples/login-start-page.html
예시 1) LoginStartPage 

```
function LoginStartPage(){
    useCheckLogin({
        onChecked: (status) => {
            if (status === "LOGGED_IN"){
                location.href = "/home";
            }
        }
    });

    return <>{/* ... */}</>;
}
```
이 코드를 개선해보기 - HOC 사용 
```
function LoginStartPage(){
    return <>{}</>;
}
export default withAuthGuard(LoginStartPage);

function withAuthGuard(WrappedComponent){
    return function AuthGuard(props){
        const status = useCheckLoginStatus();

        useEffect(() => { 
            if (status === "LOGGED_IN"){
                location.href = "/home";
            }
        }, [status]);
        return status !== "LOGGED_IN" ? <WrappedComponent {...props} > : null;
    };
}
```


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
