# Baekjoon 1012: 유기농 배추 
https://www.acmicpc.net/problem/1012


```python 
from collections import deque 

T = int(input()) 
M, N, K = map(int, input().split())
X, Y = map(int, input().split())

# 2D 리스트 배열을 만들기 
[[0] * M for _ in range(N)]


# 2D 리스트 배열 X, Y로 채우기..?
for _ in range(K):
    queue = deque([N][M])




```

- 배추밭에서 배추흰지렁이가 필요한 최소 마리 수를 구하는 것 
- 배추는 상하좌우로 인접하면 하나의 군집 
- 배추들이 모여있는 곳에는 배추흰지렁이가 한 마리만 있으면 됌 
- 주변을 살펴봐서 0이면 끝난 것?




## Mistakes 
- 2D list 만들기. `[[0] * M for _ in range(N)]`처럼 만들어야 함 

# LeetCode 1137: N-th Tribonacci Number 

```python 
class Solution:
    def tribonacci(self, n: int) -> int: 
       # make an array
        T = [0] * 38 
        # base cases 
        # T_{0} = 0 
        T[0] = 0
        # T_{1} = 1 
        T[1] = 1 
        # T_{2} = 1 
        T[2] = 1 

        # recurrence: T_{n+3} = T_{n} + T_{n+1} + T_{n+2}
        for i in range(3, 38):
            T[i] = T[i-1] + T[i-2] + T[i-3]


        # return the value of T_{n} given n 
        return T[n]
```

## Mistakes 
- Used `T[n]` in the recurrence instead of i 
- `return` vs. `print` 
    - The `return` statement sends a value back to the caller of the function, allowing the function's result to be used elsewhere in the program. The value of `T[n]` is sent back to whoever called `tribonacci(n)`. 
    - the `print` statement outputs the value to the console but returns `None`. 