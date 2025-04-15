# 4/12 - LeetCode - 238:Product of Array Except Self


O(N) 

아래 같은 아이디어는 있었습니다
```python 
            # store where?
            prefix *= prefix[0 ... i-1]
            suffix *= suffix[i+1 ... n-1]
            # answer[0] = prefix * suffix 
```


O(N^2) 


```python 
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        answer = [1] * n 
        for i in range(n):       
            # but except j == i 
            for j in range(n):
                # if it's the self, skip?
                if j != i: 
                    answer[i] *= nums[j]
        return answer 
```