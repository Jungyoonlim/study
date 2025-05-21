# 시스템 디자인

## CDN이란?

전 세계 여러 위치에 이미지, 동영상 같은 정적 파일을 미리 복제해서 저장해둡니다.
서버 한 곳에 트래픽이 몰리는 것을 방지하고 글로벌 유저도 빠른 속도로 UI 체험 가능.

## Redis란?

메모리 기반 초고속 데이터베이스 / 캐시로, 자주 접근되는 데이터 (인기 검색어, 실시간 트렌딩 스크린)을 임시로 저장해서 DB에 불필요한 부하를 줄이고 응답속도를 극적으로 빠르게 만들 수 있음.

## 로드 밸런서란?

여러 개의 서버로 트래픽을 고르게 분산해서 특정 서버에만 부하가 집중되는 것을 방지. 
한 서버가 다운되어도, 다른 서버에서 서비스 지속.

## Rate Limiting이란? 트래픽 급증시 어떤 도움이 되나요?

사용자의 1분/1초/1시간당 최대 요청 횟수 제한.
봇/악의적 유저 혹은 예상치 못한 트래픽 폭증에 서비스가 다운되는걸 예방
Redis 등을 사용해 실시간 카운트 구현 

## 수만 개의 스크린샷/비디오 파일을 효율적으로 저장하고 제공하는 방법?

- AWS S3, Supabase Storage 등 클라우드 스토리지에 파일 업로드
- CDN으로 글로벌 캐싱
- 메타데이터 등 Postgres 등 관계형 DB에 저장
- 업로드는 presigned URL로 보안/성능 확보 

## Presigned URL (미리 서명된 업로드 URL)이란?

클라이언트가 서버를 거치지 않고, 클라우드 스토리지 (S3/Supabase)에 직접 파일 업로드 가능하게 해주는 
유효기간이 제환된 업로드용 URL 


## 모니터링/관찰성이 왜 필요한가요?
서비스 장애/지연/버그를 실시간으로 파악, 사전에 대응.
Sentry, Datadog으로 에러/지연/트래픽/DB상태 모니터링. 

## 데이터베이스 샤딩 또는 파티셔닝이란?

데이터가 너무 커질 때, 한 DB에 다 넣지 않고 여러 DB에 분산하여 저장하는 기술 

## Index란?
데이터베이스에서 검색 속도를 빠르게 해주는 자료구조 
자주 조회되는 칼럼에 인덱스 추가 


# SQL / Postgres

## SQL에서 SELECT, INSERT, UPDATE, DELETE이란?

- SELECT: 데이터 조회
- INSERT: 새 데이터 추가
- UPDATE: 기존 데이터 수정
- DELETE: 데이터 삭제 

## 데이터베이스 정규화 (Normalization) 이란?

중복 데이터를 최소화하고 데이터 무결성을 높이기 위해 테이블을 논리적으로 분석하는 것. 

## SQL에서 조인의 종류는?

- INNER JOIN: 
- LEFT JOIN: 
- RIGHT JOIN: 
- FULL OUTER JOIN: 

## Primary Key와 Foreign Key란?

- Primary Key: 각 레코드를 고유하게 식별 
- Foreign Key: 다른 테이블의 Primary Key를 참조하는 키 

## Postgres에서 데이터 타입으로 주로 쓰는 것 

- Integer: 정수
- Text: 긴 문자열
- Varchar: N글자 제한 문자열
- Boolean: true/false
- TIMESTAMP: 날짜/시간

## 가장 기본적인 SELECT 문법은?

```sql
SELECT 컬럼명 FROM 테이블명 WHERE 조건; 
```

