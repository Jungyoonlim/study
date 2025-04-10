# April 10 

## 블랙잭 

https://www.acmicpc.net/problem/2798

```python 
N, M = map(int, input().split())
card = list(map(int, input().split()))

leng = len(card)
curr_sum = 0 

# find the smallest 
for i in range(leng): 
    for j in range(1, leng-1): 
        for k in range(2, leng-1):
            total_sum = card[i] + card[j] + card[k]

            if total_sum <= M and curr_sum < total_sum:
                curr_sum = total_sum 

print(curr_sum)

```

## Can place flowers 

https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

### Greedy practice
- Optimizing the number of flowers 
- idea: go through the array and see if there's 0, 
        if there is 0 for both side, add 


```python 
class Solution: 
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        len_of_flowerbed = len(flowerbed)
        num_of_flowers = 0 
        for i in range(len_of_flowerbed):
            if i == 0 or i == len_of_flowerbed-1: 
                i += 1 

            if flowerbed[i] == 0 and flowerbed[i+1] == 0 and flowerbed[i-1] == 0:
                num_of_flowers += 1
                i += 1
        
        if num_of_flowers >= n:
            return True
        else: return False 


```

## 피보나치 함수 

https://www.acmicpc.net/problem/1003