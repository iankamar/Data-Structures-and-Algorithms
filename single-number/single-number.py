class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        n =len(nums)
        r = nums[0]
        for i in range (1,n):
            r = r ^ nums[i]
        
        return r