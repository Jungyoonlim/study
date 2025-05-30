# Node.js / SQL / Postgres 정리 (한국어)

## Node.js 

## Node.js란 무엇인가?
Chrome의 V8 엔진을 기반으로 구축된 JavaScript 런타임으로, JavaScript가 서버에서 실행될 수 있게 해줍니다.

## Node.js 이벤트 루프란 무엇인가?
JavaScript가 단일 스레드임에도 불구하고 Node.js가 논블로킹 I/O 작업을 수행할 수 있게 해주는 메커니즘입니다.

## Node.js 이벤트 루프의 단계는?
- 1. 타이머 (setTimeout/setInterval)
- 2. 대기 중인 콜백
- 3. 유휴, 준비
- 4. 폴 (I/O)
- 5. 체크 (setImmediate)
- 6. 종료 콜백

## `process.nextTick()`과 `setImmediate()`의 차이점은?
- `process.nextTick()`: 현재 작업 후, 이벤트 루프 전에 실행
- `setImmediate()`: 다음 이벤트 루프의 체크 단계에서 실행

## Node.js에서 간단한 HTTP 서버를 어떻게 만드나요?

```javascript
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
})
server.listen(3000);
```

## `require` 함수란 무엇인가?
모듈을 가져오는 Node.js 함수입니다. CommonJS 모듈 시스템의 일부입니다.

## Node.js에서 미들웨어란 무엇인가?
요청-응답 주기 동안 실행되는 함수로, req/res 객체를 수정할 수 있습니다.

## Node.js에서 스트림이란 무엇인가?
데이터를 연속적으로 읽고 쓸 수 있게 해주는 객체입니다. 유형: Readable, Writable, Duplex, Transform

## Buffer 클래스란 무엇인가?
Node.js에서 바이너리 데이터를 묶기 위한 전역 클래스입니다.

## 클러스터 모듈이란 무엇인가?
로드 밸런싱을 위해 서버 포트를 공유하는 자식 프로세스를 생성할 수 있게 해줍니다.

## EventEmitter란 무엇인가?
이벤트를 사용하여 객체 간 통신을 용이하게 하는 클래스입니다.

## Node.js에서 오류를 어떻게 처리하나요?
동기 코드는 try/catch, 콜백은 에러 우선 패턴, Promise 거부, 에러 이벤트를 사용합니다.

---
## SQL

## 기본 SQL 명령어는 무엇인가요?
SELECT, INSERT, UPDATE, DELETE

## PRIMARY KEY란 무엇인가?
테이블의 각 행을 고유하게 식별하는 열 또는 열의 조합입니다.

## FOREIGN KEY란 무엇인가?
다른 테이블의 기본 키를 참조하여 두 테이블 간의 관계를 만드는 열입니다.

## SQL에서 페이지네이션을 어떻게 구현하나요?
LIMIT과 OFFSET을 사용합니다:

```sql
SELECT * FROM users LIMIT 10 OFFSET 20; 
```

## 페이지네이션에서 OFFSET과 커서 기반 중 어느 것이 더 좋나요?
커서 기반이 대용량 데이터셋에 더 좋습니다. OFFSET은 값이 높아질수록 성능이 저하됩니다.

## 커서 기반 페이지네이션 쿼리를 작성해보세요

```sql
SELECT * FROM users WHERE id > last_seen_id ORDER BY id LIMIT 10; 
```

## 인덱스란 무엇인가?
행에 빠르게 접근할 수 있도록 하여 쿼리 성능을 향상시키는 데이터 구조입니다.

## 언제 인덱스를 생성해야 하나요?
WHERE, JOIN, ORDER BY 절에서 자주 사용되는 열에 생성하되, 고유 값이 적은 열에는 생성하지 않습니다.

## 클러스터드 인덱스와 논클러스터드 인덱스의 차이점은?
- 클러스터드: 테이블 데이터를 물리적으로 재정렬
- 논클러스터드: 데이터에 대한 포인터가 있는 별도 구조

## 복합 인덱스란 무엇인가?
여러 열에 대한 인덱스입니다.
쿼리 최적화를 위해 순서가 중요합니다.

## 느린 쿼리를 어떻게 최적화하나요?
EXPLAIN ANALYZE 사용, 적절한 인덱스 추가, JOIN 최적화, 스캔하는 데이터 줄이기

## 정규화란 무엇인가?
중복을 줄이고 데이터 무결성을 향상시키기 위해 데이터를 구성하는 과정입니다.

## 정규형이란 무엇인가?

- 1NF (원자값)
- 2NF (부분 종속성 없음)
- 3NF (이행 종속성 없음)

## 비정규화란 무엇인가?

쿼리 성능을 향상시키기 위해 의도적으로 중복을 추가하는 것입니다.

## 트랜잭션이란 무엇인가?

원자성, 일관성, 격리성, 지속성(ACID)을 가진 작업 단위입니다.

## ACID 속성이란 무엇인가?

- 원자성(Atomicity): 전부 아니면 전무
- 일관성(Consistency): 유효한 상태에서 유효한 상태로
- 격리성(Isolation): 동시 트랜잭션이 서로 간섭하지 않음
- 지속성(Durability): 커밋된 변경사항이 지속됨

## 뷰란 무엇인가?

SELECT 쿼리를 기반으로 한 가상 테이블입니다.

## 저장 프로시저란 무엇인가?

저장하고 재사용할 수 있는 미리 컴파일된 SQL 코드입니다.

## 집계 함수란 무엇인가?

집합에 대한 계산을 수행하는 함수: COUNT, SUM, AVG, MIN, MAX

## GROUP BY를 어떻게 사용하나요?

지정된 열에서 같은 값을 가진 행을 그룹화하며, 집계 함수와 함께 자주 사용됩니다.

## HAVING 절이란 무엇인가?

GROUP BY 후에 그룹을 필터링합니다.

## 서브쿼리란 무엇인가?

다른 쿼리 안에 중첩된 쿼리입니다.

## DELETE와 TRUNCATE의 차이점은?

- DELETE: 특정 행 제거, 롤백 가능, 트리거 실행
- TRUNCATE: 모든 행 제거, 더 빠름, 롤백 불가능

## 윈도우 함수란 무엇인가?

현재 행과 관련된 행들에 대해 계산을 수행하는 함수입니다.

```sql
ROW_NUMBER() OVER (PARTITION BY category ORDER BY price)
```

## CTE(Common Table Expression)란 무엇인가?

쿼리 내에서 정의된 임시 명명된 결과 집합입니다.

```sql
WITH user_counts AS (
    SELECT COUNT(*) FROM users
)
```

## PostgreSQL이란 무엇인가?

JSON, 배열, 사용자 정의 타입을 지원하는 고급 오픈소스 관계형 데이터베이스입니다.

## PostgreSQL 특유의 기능은 무엇인가요?

## 빠른 필터링을 위한 인덱스를 어떻게 생성하나요?

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);
```

## PostgreSQL에서 EXPLAIN이란 무엇인가?

성능 최적화를 돕기 위해 쿼리의 실행 계획을 보여줍니다.

## PostgreSQL에서 vacuum이란 무엇인가?

죽은 튜플이 차지하는 저장 공간을 회수하는 프로세스입니다.

## PostgreSQL에서 JSON을 어떻게 처리하나요?

->, ->>, @>, #>와 같은 연산자와 함께 JSON 또는 JSONB 타입을 사용합니다.

## 부분 인덱스란 무엇인가?

조건에 맞는 행에만 구축되는 인덱스입니다.

```sql
CREATE INDEX idx_active_users ON users(email) WHERE active = true;
```

## PostgreSQL의 격리 수준은 무엇인가요?

Read Uncommitted, Read Committed, Repeatable Read, Serializable 