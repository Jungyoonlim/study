# BFS / DFS / 백트래킹 / 재귀 / Floyd-Warshall

## BFS (Breadth-First Search, 너비 우선 탐색) 
- 큐를 사용해 노드를 레벨 단위로 탐색 
- 최단 경로 찾기에 적합
- 시간 복잡도: O(V+E)

### 예제 문제 1
문졔: 소셜 네트워크에서 사용자 A와 연결된 친구, 친구의 친구를 추천. 
입력: 사용자 수 N, 연결 관계, 시작 사용자 A. 
출력: A와 1-2단계로 연결된 사용자 목록. 
Python에서 `collections.deque`로 큐 구현. 

```txt
1. 그래프를 인접 리스트로 표현 (각 사용자의 친구 목록)
2. 큐 초기화, 시작 사용자 A 추가 
3. visited 집합으로 방문 여부 관리 
4. distance 배열로 A로부터 거리 저장
5. 큐가 빌 때까지:
    - 현재 사용자 u를 큐에서 꺼냄 
    - u의 친구 v 탐색:
        - v가 방문되지 않았다면
            - v를 큐에 추가, visited에 추가
            - distance[v] = distance[u] + 1 
6. distance가 1 또는 2인 사용자 목록 출력 
```

```python 
from collections import deque 

def bfs(graph, A):
    queue = deque([A])
    visited = set()
    distance = {A: 0}

    while queue: 
        u = queue.popleft()
        # u 의 친구 v 탐색 
        for v in graph[u]:
            if v not in visited:
                visited.add(v)
                distance[v] = distance[u] + 1
                queue.append(v)
    return [user for user, dist in distance.items() if 1 <= dist <= 2]
```


## LeetCode 752

1. Shortest path problem on a graph, 10000 nodes 
2. An edge between two nodes if they differ in one digit and if both nodes are not in deadends. 

```python 
class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        

        while queue: 
            # deadends 만나면 더 이상 하지 않음 
            if  :
            
            for 


```


## DFS / 백트래킹 / 재귀 
### DFS 
- 모든 경로 탐색하거나 조건에 맞는 해 찾기 
- 스택 (혹은 재귀)를 사용해 가능한 깊게 노드를 탐색
- 한 방향으로 더 이상 갈 수 없으면, 가장 최근에 갈라진 지점으로 되돌아가서 다음 분기 탐색 

```python 
def dfs(graph, u, visited):
    visited.add(u)

    for v in graph[u]:
        if v not in visited:
            dfs(graph, v, visited)

visited = set()
dfs(graph, start_node, visited)
```
시간 복잡도: O(V+E)
공간 복잡도: O(V)

### Backtracking & Recursion 
- 가능한 모든 후보 해를 가지치기 하면서 탐색 
- 재귀 호출을 통해 상태를 쌓고, 조건에 맞지 않으면 되돌아가며 다음 후보 시도 
- N-Queens, 부분집합 문제 

```python 
def backtrack(path, choices):
    if complete(path):
        result.append(path.copy())
        return 
    for c in choices: 
        if valid(path, c):
            path.append(c)
            backtrack(path, choices_minus_c)
            path.pop()

result = []
backtrack([], all_choices)
```

## Floyd-Warshall
- 2D 리스트 초기화와 갱신 로직 
- 모든 정점 쌍 간 최단 경로를 구하는 DP 기법
- 시간 복잡도: O(N^3)
- 공간 복잡도: O(N^2)

### 원리 
1. `dist[i][j]`를 i -> j로 가는 현재까지 알려진 최단 거리로 초기화
`dist[i][j] = 0`
2. 정점 k를 경유지로 하나씩 추가하며
```
dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
```
3. k 루프가 끝나면, 모든 i -> j 최단 거리 완성. 

```python 
def floyd_warshall(n, edges):
    INF = float('inf')

    dist = [[INF]*n for _ in range(n)]
    for i in range(n):
        dist[i][i] = 0 
    for u, v, w in edges:
        dist[u][v] = w # 방향 그래프 

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    return dist 

n = 4 
edges = [
    (0, 1, 5), (0,3,10),
    (1,2,3), (2,3,1)
]
shortest = floyd_warshall(n, edges)
```
