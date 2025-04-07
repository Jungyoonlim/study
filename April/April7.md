# baekjoon class 2 30802: 웰컴 키트 

https://www.acmicpc.net/problem/30802

```python 
import math 
# take in 참가자 수 N 
N = int(input())
sizes = list(map(int, input().split()))
TandP = list(map(int, input().split()))

# T와 P를 떼어놓기 

dic = {}

for i in size: 
    # T 만큼 늘때마다 1씩 늘어야
    if size > T:
        dic[size] += 1 
    # 만약 한 묶음보다 적으면 1 
    if size <= T:
        dic[size] = 1 



for i in range(dic):
    # add up all the value
    sum = dic.value(i)
    return sum 


# 펜 
pen_group = math.ceil(N / P) 
remainder = N % P 


print(sum) 
print(pen_group + " " + remainder)  

```

# 위에 고침
total_tshirt = 0 
for size in sizes:
    bundles = math.ceil(size/T)
    total_tshirt += bundles 

O(N)



# baekjoon class 3 11399: ATM 

https://www.acmicpc.net/problem/11399


```python 


```

# LC 
https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

My ans: 
```python 
class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        i, j = 0, 0 
        merged = []
     
        while i < len(word1) and j < len(word2):
            if i < j:
                merged.append(word1[i])
                i += 1
            else: 
                merged.append(word2[j])
                j += 1 
        
        # append remainder
        merged.join(word1[i:])
        merged.join(word2[j:])

        return merged 
```

```python 
class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        i, j = 0, 0 
        merged = []

        while i < len(word1) and j < len(word2):
            merged.append(word1[i])
            merged.append(word2[j])
            i += 1 
            j += 1 
        
        merged.extend(word1[i:])
        merged.extend(word2[j:])

        return ''.join(merged)
```