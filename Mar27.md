# TypeScript, 프론트엔드 브라우저 / 네트워크 / 렌더링 


## Flux 패턴에 대한 설명 

# TypeScript 간단히 
## Generic 


# Frontend 
## 브라우저 렌더링 과정 
1. 브라우저 렌더링 엔진 - HTML/CSS 파싱 후 DOM Tree / CSSOM Tree 생성.
2. 이 Tree 들을 결합해 Render Tree 생성.
3. Render tree는 최정적으로 화면에 표시될 node / 스타일 정보 포함.
4. 마지막으로 Render Tree를 이용해 계산된 크기 / 위치에 맞게 layout - paint - composite 세 단계에 거쳐 화면에 출력

## CSR과 SSR 차이 
### CSR (Client Side Rendering)
클라이언트 측에서 페이지를 렌더링하는 방식 
초기 로딩 시간이 지연되어 SEO 최적화에 어려움 
브라우저 중심의 동적 페이지 처리 및 관리 방식 
예시) React, Angular, Vue 

### SSR (Server Side Rendering)
미리 렌더링하여 완성된 HTML 페이지를 클라이언트 측 브라우저로 전송하는 방식 

예시) Next.js, Nuxt.js 

## CORS (Cross-Origin Resource Sharing)
웹 어플리케이션이 다른 출처의 리소스에 접근할 수 있도록 브라우저와 서버가 협력하는 방식 

## 쿠키, 세션, 웹스토리지 차이 


### 세션 스토리지 



### 쿠키 



## 로그인 처리를 할 때 쿠키와 세션을 어떻게 사용하나요?


## HTTP / HTTPS
### HTTP 
WWW 상에서 정보를 주고 받기 위한 통신 규약 
웹 브라우저와 웹 서버가 HyperText 문서나 이미지, 비디오 등의 리소스를 교환할 수 있음 

### HTTPS 
HTTPS는 HTTP에 SSL/TLS라는 보안 계층을 추가한 프로토컬. SSL/TLS은 통신 내용 암호화 / 상대방 신원 인증 / 데이터 부결성을 보장하는 기능 제공. 

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
