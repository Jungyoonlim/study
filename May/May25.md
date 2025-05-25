# Shader

셰이더는 GPU에서 실행되는 프로그램임 
그래픽 렌더링을 위한 계산 수행
일반적인 CPU 프로그램과 다르게 병렬로 많은 픽셀과 정점을 동시에 처리하여 실시간으로 복잡한 시각적 효과 구현 가능.

## 두가지의 셰이더 
- 정점 셰이더 
- 프래그먼트 셰이더

## 정점 셰이더
- 정점 데이터를 처리하는 프로그램 
- 3D 모델의 각 정점 위치와 속성을 입력받아 좌표 변환을 수행 

```glsl
attribute vec3 aPosition;
attribute vec3 aColor;

varying vec3 vColor; 

void main() {
    gl_Position = vec4(aPosition, 1.0);
    vColor = aColor; 
}
```

- `attribute`: CPU로부터 전달받는 정점 데이터
- `varying`: 프래그먼트 셰이더로 전달되는 데이터

## 프래그먼트 셰이더
화면상의 각 픽셀(프래그먼트)의 색상을 결정하는 프로그램입니다.

텍스처, 조명 계산, 색상 혼합(Blending) 등 픽셀 단위의 연산을 수행합니다.

주요 역할
- 색상 계산 및 텍스처 매핑(Texture mapping)
- 픽셀 단위 조명 효과
- 알파 블렌딩 및 투명도 처리

```glsl
precision mediump float;

varying vec3 vColor; // 정점 셰이더에서 전달된 색상

void main() {
    gl_FragColor = vec4(vColor, 1.0); // 최종 픽셀 색상 결정
}
```
`gl_FragColor`: 최종 픽셀의 색상을 지정하는 내장 변수

## 셰이더 처리 과정의 흐름

```css
[CPU] 정점 데이터 → [Vertex Shader] → 정점 위치 결정 → 
[Rasterization] 픽셀화 → [Fragment Shader] → 픽셀 색상 결정 → 화면 출력
```