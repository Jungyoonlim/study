# 알고리즘 유형 별 시간 복잡도 및 사용 시나리오 
## 1. Brute Force 
- $\mathcal{O}(2^{N})$, $\mathcal{O}(N!)$, $\mathcal{O}(N^{M})$

### 예시 문제
- 부분집합
- 순열/조합 생성
- N-Queen 

### 언제 사용?
N이 매우 작을 때 (N $\leq 20$)
예:
- $\mathcal{O}(2^{N}) \rightarrow N \leq 20$ 
- $\mathcal{O}{(N!)} \rightarrow N \leq 10$

## 2. Greedy 
- $\mathcal{O}(N logN)$, $\mathcal{O}(N)$
- Greedy Choice Property 
    - Local optimal choices lead to global optimum 
    - No need to reconsider prev decisions 
- Optimal Substructure 

## 요약: 문제 유형별 추천 알고리즘

| 문제 유형 | 추천 알고리즘 | 시간 복잡도 |
|----------|-------------|-----------|
| 작은 입력 (N ≤ 20) | 완전 탐색, 백트래킹 | O(2^N), O(N!) |
| 정렬 문제 | Merge Sort, Quick Sort | O(N log N) |
| 그리디 문제 | 정렬 + 순차 선택 | O(N log N) |
| DP 문제 | 메모이제이션 (Memoization) | O(N²), O(NK) |
| 그래프 탐색 | BFS (최단 거리), DFS (백트래킹) | O(V + E) |
| 이분 탐색 | Binary Search | O(log N) |
| 연속 구간 탐색 | 투 포인터 | O(N) |






