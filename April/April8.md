# April 8 

## baekjoon 17219번 비밀번호 찾기 

https://www.acmicpc.net/problem/17219


hashmap 

```python 
N, M = map(int, input().split())

# make a dic 
dic = {}
# take in M websites + pw 
for i in range(M):
    # put e.g. noj.am into key and IU as value 
    site, pw = input().split()
    dic[site] = pw 


# find pw 
# read the four lines at the bottom and query on hashmap
 # 4 sites
for j in range(N):
    site = input()
    # print passwords in a  row 
    print(dic[site])
```



### What I learned

```python
# fixes 

# 1. input handling 
site = input().split()
# is wrong but instead use 


# 2. use 
print(dic[site])
# instead
print dic[site]


```

Unpack the list directly into two variables: 

```
N, M = map(int, input().split())
```

## baekjoon 2231: 분해합 

https://www.acmicpc.net/problem/2231

```python 
N = input()

# sudocode 
N = M + char1_M + char2_M + ... + charN_M
min(N - (char1_M + char2_M + ... + charN_M)

return M 
```

```python
N = int(input())

smallest_M = 0 
# lower bound 
for i in range(max(1, N - 9 * len(str(N))),N):
    digit_sum = 0 
    # M + digit_sum = N 
    if M + digit_sum == N:
        smallestM = M 
        break 
print(smallest_M)
```



## baekjoon 11399: ATM 

https://www.acmicpc.net/problem/11399

```python
N = int(input())
P = map(int(input().split()))

# if P2, then P1 + P2 
# add up P1, P1 + P2, P1 + P2 + P3 .... 
# recursion?
P.sort(reverse=True)
for in P: 
    while 



print(total_time)
```

## LC 

## programmers: 합승택시요금

http://school.programmers.co.kr/learn/courses/30/lessons/72413?language=python3


