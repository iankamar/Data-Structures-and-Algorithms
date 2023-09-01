class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        my_dict = {}
        for i in nums:
            if i in my_dict:
                return True
            else:
                my_dict[i] = 1
            if len(my_dict) == len(nums):
                return False
    
    