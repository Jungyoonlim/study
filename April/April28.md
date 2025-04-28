# Accessibility - 접근성 
## 접근 가능한 UI 컴포넌트란?
다양한 화면 크기와 입력 방식을 가진 여러 기기에서 작동해야.
장애를 가진 사용자를 포함한 가장 광범위한 사용자 그룹이 사용할 수 있어야 함.
줄여서 `a11y`라고 함.
주요 원칙: WCAG 준수. 

접근성 설계할 때 고려해야 할 네가지 주요 장애 영역: 시각, 청각, 운동, 인지 


## UI 컴포넌트가 접근 가능한지?
### 1. 키보드만으로 UI 컴포넌트를 사용할 수 있는지
- 각 컴포넌트에 적절한 포커스 타겟이 있는지 확인해야 
- `tabindex`사용해서 키보드로 요소를 포커스 가능하게 만듬. 

```tsx
const Button = () => (
    <button
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && alert('활성화됨')}
    >
    클릭
    </button>
);
```
- `tabindex="0"`은 자연스러운 탭 순서, `tabindex=-1`은 프로그래밍 방식 포커스에 사용. 

### 2. 스크린 리더로 UI 컴포넌트를 사용할 수 있는지 
    - 시각적으로 표시된 정보에 텍스트 대안을 제공했는지 
    - ARIA를 사용해 의미적 정보를 추가했는지
    - `aria-label`, `aria-labelledby`로 컴포넌트 목적 설명
    -  `role`속성으로 컴포넌트 유형 명시 
    - 비시각적 요소에 `aria-hidden="true"`사용 

```tsx
const IconButton = () => (
    <button aria-label="설정 열기">
        <svg role="img" aria-hidden="true">
            <path d="..." />
        </svg>
    </button>
)
```


```tsx
import React, { useState } from 'react';

const AccessibleToggle: React.FC = () => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <button
            type="button"
            role="switch"
            aria-checked={isToggled}
            aria-label={isToggled ? '토글 끄기' : '토글 켜기'}
            onClick={() => setIsToggled(!isToggled)}
            tabIndex={0}
        >
            {isToggled ? 'ON' : 'OFF'}
        </button>
    );
};

const toggleStyles = `
    button[role="switch"]{
        padding: 10px 20px; 
        background: #007bff;
        color: white; 
        border: none; 
        border-radius: 4px; 
        cursor: pointer; 
    }
    button[role="switch"][aria-checked="true"]{
        background: #28a745;
    }
    button[role="switch"]:focus { 
        outline: 3px solid #007bff; 
    }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = toggleStyles; 
document.head.appendChild(styleSheet);

export default AccessibleToggle; 
```

### 3. 소리 없이 UI 컴포넌트가 작동하는지
    - 소리 의존 없이 기능 작동, 텍스트 대안을 제공했는지 
    - `<video>` 또는 `<audio>`에 `<track>`요소로 자막 추가 

```tsx
const VideoPlayer = () => (
    <video controls>
        <track kind="captions" src="captions.vtt" label="자막" />
    </video>
)

```

### 4. 색상 없이 작동하는지
    - 색상은 상태 표시, 응답 유도, 커스텀 컴포넌트 구분 등 정보를 전달하는 유일한 수단으로 사용되어서는 안됌. 
    - `aria-label` 또는 `role`로 상태 명시. 

```tsx
const Status = () => (
  <span aria-label="오류 상태" role="alert">
    오류 <span className="error-icon">⚠️</span>
  </span>
);
```


### 5. 고대비 모드에서 작동하는지 
    - 최소 대비 비율 (AA, 4.5:1)를 충족해야하고 고대비 모드를 지원해야함.
    - WebAIM Contrast Checker로 대비 테스트 

```tsx
const Text = () => (
    <p style={{ color: '#000', backgroundColor: '#fff' }}>
    고대비 텍스트 
    </p>
)
```