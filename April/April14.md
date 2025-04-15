# LC 11: Container with Most Water 

```python 
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height)-1
        # max area = (width = right-left) * (height -> compare the height of right and left and take the smaller)
        # width = right - left 
        # max_area = (right-left) * (lower)
        curr_area, max_area = 0, 0 
        while left <= right: 
            curr_area = (right-left) * min(height[left], height[right])
            if max_area < curr_area:
                max_area = max(max_area, curr_area)
            if height[left] < height[right]:
                left +=1 
            else: right -= 1
        return max_area 
```

# 4/14 - class3 : 백준 2579 계단 오르기

```python 
# 정수 최댓값 N이라고 지정 
N = int(input()) 
# 다음 여섯개를 scores 배열에 넣습니다 
scores = [int(input)) for _ in range(N)] 
dp = [0] * (N+1) 

# 베이스 케이스 
dp[0] = 0
dp[1] = scores[0] 
# 한번 뛰거나 두번 뛰거나 
dp[2] = max(score[1]+score[2], score[2]) 

# recurrence 관계 
for i in range(3, N+1):
	"""
	예: dp[3] = (1,1,1), (2,1), (1,2) -> 3가지 
	마지막에서 생각해서, 마지막에서 1계단 아님 2계단 점​프할 수 있는...
	이 부분이 막힙니다 ​
	"""
	dp[i] = max(dp[i-2]+score[i], dp[i-3] + dp

print dp[N] 
```

# 백준 1931 정수 삼각형 
https://www.acmicpc.net/problem/1932

2D DP 

