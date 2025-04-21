# Baekjoon 9461

https://www.acmicpc.net/problem/9461

```python 
T = int(input())
N = [int(input()) for _ in range(T)]

dp = [0] * 101 

# base case 
dp[1] = 1 
dp[2] = 1 
dp[3] = 1 

# recurrence relation
# P(N) = P(N-2) + P(N-3)
for i in range(4, 101):
    dp[i] = dp[i-2] + dp[i-3]

for n in N: 
    print(dp[n])
```


# LeetCode 1657

https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75

```python 
class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        # store each character in hashmap?
        hashie = {}
        for i in word1: 
            if i in hashie:
                hashie[i] += 1 
            else: 
                # store it in hashie 
                hashie[i] = 1
        
        hashie2 = {}
        for j in word2: 
            if j in hashie2: 
                hashie2[j] += 1 
        # if word1 and word2 are close
            else:
                hashie2[j] = 1 
        
        """
        1. if the length of word1 and word2 have to be the same.
        2. keys have to be the same
        3. same values for the both hash sets 

        """
        if len(word1) != len(word2): return False 
        if set(hashie.keys()) != set(hashie2.keys()):
            return False 
        if sorted(hashie.values()) != sorted(hashie2.values()):
            return False 
        return True 
```

** python: len(word1) instead of word1.length. 
** Get the keys from both dictionaries using `hashie.keys()` and `hashie2.keys()`. 
** Convert to sets `set(hashie.keys())` and compare with `==`. 

# Baekjoon 9375 

https://www.acmicpc.net/problem/9375


-------
## Quiz 1

```python 
T = int(input())
N = [int(input()) for _ in range(T)]



```


## Quiz 2 

```python 


```