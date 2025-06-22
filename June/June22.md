# 가상 메모리 

## 핵심 변환 과정
### 1. 가상 주소 분할

### 2. 페이지 테이블 검색

### 3. 물리적 주소 생성 

### 특징
#### TLB 활용
가상 메모리 시스템에서 주소 변환 속도를 높이기 위한 캐시 메모리 

### 프레임

#### 프레임: 물리 메모리를 고정된 크기로 나눈 각각의 블록

#### 페이지: 가상 메모리를 고정된 크기로 나눈 각각의 블록 

#### 페이지 - 논리적 개념, 프레임 - 물리적 개념

#### 프레임 테이블 

운영체제가 각 프레임의 상태를 관리하는 자료구조


#### 페이지 부재율 계산

페이지 부재율 = (페이지 부재 발생 횟수 / 전체 메모리 참조 횟수) × 100%

### 요구페이징

실행중인 프로세스들의 요구 페이지만 메모리에 반입하여 프로세스의 모든 페이지를 메모리에 동시에 적재 하지 않는다.

쓰기복사는 페이지의 효율성을 높이는 최적화 전략

메모리를 효율적으로 사용할 수 있지만,메인 메모리와 디스크 간의 과도한 페이지 교체로 오버헤드를 증가시켜 시스템의 성능을 떨어뜨리는 단점

### 페이지 성능 

#### 메모리 엑세스 시간 

#### 페이지 폴트

프로세스가 아직 메모리에 없는 페이지에 접근할 때 발생

#### 유효 엑세스 시간

EAT = 실제 메모리 접근 성공 확률 × 빠른 액세스 시간

#### 페이징 대치

물리 메모리가 꽉 찼을 때 새로운 페이지를 메모리에 올리기 위해 기존에 있던 페이지 중 하나를 선택해서 디스크로 내보내는 과정.

현재 사용하지 않는 페이지는 디스크로 내보내고, 필요한 페이지만 메모리에 유지

##### 페이지 대치 알고리즘

###### 1. FIFO동작 방식

메모리에 가장 먼저 적재된 페이지 우선적으로 교체

###### 2. OPT (Optimal)

앞으로 가장 오랫동안 사용되지 않을 페이지 교체 

실제로는 구현 불가능

###### 3. LRU (Least Recently Used)

가장 오랫동안 사용되지 않은 페이지를 교체

###### 4. LFU


###### 5.시계 알고리즘 동작 방식

the “clock” algorithm because it arranges memory pages in a circular list, like the numbers on a clock face, and uses a “hand” (pointer) that sweeps around the circle to decide which page to replace.

How does it work? ￼

 1. Reference Bit
Each page in memory has a reference bit (sometimes called a use bit). When a page is accessed, its reference bit is set to 1.
 2. Pointer Movement
When a page needs to be replaced, the algorithm checks the page currently pointed to by the “hand”:
 ▫ If the reference bit is 0, this page is chosen for replacement.
 ▫ If the reference bit is 1, the algorithm sets it to 0 and moves the hand to the next page, repeating the process.
 3. Cycle
The hand keeps moving around the circle until it finds a page with a reference bit of 0, which means it hasn’t been used recently and is a good candidate for replacement.



###### 6. NUR (Not used recently)
 
##### 페이지 부재 처리 과정 상세

##### 지역성 

###### 시간 지역성 (Temporal Locality)


###### 공간 지역성 (Spatial Locality)

###### Dirty Bit 활용

###### Working Set


##### 페이지 크기의 영향

###### 큰 페이지 크기

###### 작은 페이지 크기

#### 고정 할당 방식 (Fixed Allocation)

##### 1. 균등 할당 (Equal Allocation)

계산 공식:

각 프로세스 할당 프레임 수 = 전체 사용가능 프레임 수 / 프로세스 개수

##### 스래싱과 대응 방안

###### 스래싱이란?

페이지 부재율이 너무 높아서 프로세스가 페이지 교체 작업에만 시간을 소비하는 상황이다
CPU 이용률이 급격히 떨어진다

##### 대치 범위 (Replacement Scope)

###### 글로벌 대치 (Global Replacement)

###### 로컬 대치 (Local Replacement)


##### 프리페이징 (Prepaging)

##### 페이지 크기 (Page Size)

##### 페이지 테이블 구조

###### 단일 레벨 페이지 테이블

###### 다단계 페이지 테이블 (Multi-level Page Table)

###### 해시 페이지 테이블 (Hashed Page Table)

###### 역방향 페이지 테이블 (Inverted Page Table)

##### TLB (Translation Lookaside Buffer)
