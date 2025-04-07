# 알고리즘 유형 별 시간 복잡도 및 사용 시나리오 
## 1. Brute Force 
- $\mathcal{O}(2^{N})$, $\mathcal{O}(N!)$, $\mathcal{O}(N^{M})$

### 예시 문제
- 부분집합
- 순열/조합 생성
- N-Queen (https://www.acmicpc.net/problem/9663)

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
- 회의실 배정 (https://www.acmicpc.net/problem/1931)

## 3. Divide and Conquer
- $\mathcal{O}(N logN)$ 
- 문제를 작은 부분으로 나누어 해결 
- Merge Sort, Quick Sort ( $\mathcal{O}(N log N)$ )
- Binary Search ( $\mathcal{O}(log N)$ )

### Merge Sort 
```python
# always O(N log N)
def merge_sort(arr):
    if len(arr) <= 1: 
        return arr
    mid = len(arr)//2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0 
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1 
        else: 
            result.append(right[j])
            j += 1
    result += left[i:]
    result += right[j:]
    return result 
```

### Quick Sort 
```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr)//2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

### Binary Search
```python
def bsearch(arr, target):
    left, right = 0, len(arr)-1
    while left <= right:
        mid = (left+right)//2
        if arr[mid] == target: 
            return mid 
        elif arr[mid] > target:
            left = mid + 1   
        else:
            right = mid - 1
    return -1 
```

## 4. Dynamic Programming / 동적 계획법 
 

```python 


```

## 5. Backtracking 


## 6. BFS / DFS 

### BFS 
```python 

```

### DFS 
```python 

```

## 7. Binary Search 

```python
def bsearch(arr, target):
    left, right = 0, len(arr)-1
    while left <= right: 
        mid = (left+right)//2
        if arr[mid] == target: 
            return mid
        elif arr[mid] < target: 
            left = mid + 1
        else: 
            right = mid - 1
    return -1 
```

## 8. Two Pointers 





### Stack
#### Stack ADT 
1) push
2) pop 
3) isFull
4) isEmpty 



### Queue 



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






