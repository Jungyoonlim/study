# baekjoon 10816: 숫자 카드 2 

https://www.acmicpc.net/problem/10816


## 배운 것: 

```python 
N = int(input())
card = list(map(int, input().split()))
M = int(input())
test = list(map(int, input().split()))
```


```python
# use hashmap

hmap = {}
for i in card:
    # if 4번째 줄 == 첫째 줄 숫자 카드에 있는 정수
    if i in hmap:
        hmap[i] += 1

    if i not in hmap:
        hmap[i] = 1 


for i in range(M):

    # return the value of each freq 
    return 

```

