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

