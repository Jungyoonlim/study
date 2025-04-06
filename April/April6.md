# baekjoon 10816: 숫자 카드 2 

https://www.acmicpc.net/problem/10816


```python
# use hashmap
N = int(input())
card = list(map(int, input().split()))
M = int(input())
test = list(map(int, input().split()))

hmap = {}
for i in card:
    # if 4번째 줄 == 첫째 줄 숫자 카드에 있는 정수
    if i in hmap:
        hmap[i] += 1

    if i not in hmap:
        hmap[i] = 1 


for i in test:
    # check if i is in hmap
    if i in hmap: 
        return hmap[i]
    else: 
        print(0)
```

## 배운 것: 

```python 
N = int(input())
card = list(map(int, input().split()))
M = int(input())
test = list(map(int, input().split()))
```

### Time Complexity 
$\mathcal{O}(N+M)$



## Improvements using `collections.Counter` 
```python
import sys 
from collections import Counter 

N = int(sys.stdin.readline())
card = list(map(int, sys.stdin.readline().split()))
M = int(sys.stdin.readline())
test = list(map(int, sys.stdin.readline().split()))

hmap = Counter(card) # use counter for concise freq counting

results = []
for i in test:
    results.append(hmap[i])

print(" ".join(map(str, results)))
```