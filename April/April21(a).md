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


## DFS / 백트래킹 / 재귀 
- 모든 경로 탐색하거나 조건에 맞는 해 찾기 




## Floyd-Warshall
- 2D 리스트 초기화와 갱신 로직 
