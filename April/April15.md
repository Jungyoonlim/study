# 트리 순회 (class 4)
https://www.acmicpc.net/problem/1991


# 바이러스 (class 3)
https://www.acmicpc.net/problem/2606

### DFS Example 
```python 
def dfs(graph, start, visited=None):
    if visited is None: 
        visited = set()
    visited.add(start)
    print(start)

    for nei in graph[start]:
        if nei not in visited: 
            dfs(graph, nei, visited)
    
    return visited 
```

```python 
# N은 컴퓨터의 수 
N = int(input())
# M은 컴퓨터 쌍의 수 
M = int(input())
# 쌍의 개수 
pairs = [[] for _ in range(N+1)]

for _ in range(N+1):
    



```


# 운영체제 
## 1장


## 2장 
