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




## LC 




## baekjoon 