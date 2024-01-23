class Solution:
    def sumOfBeauties(self, nums: List[int]) -> int:
        n = len(nums)
        prefix_max = [0] * n
        suffix_min = [float('inf')] * n
        prefix_max[0] = nums[0]
        suffix_min[-1] = nums[-1]

        for i in range (1, n):
            prefix_max[i] = max(prefix_max[i-1], nums[i])

        for i in range(n-2, -1, -1):
            suffix_min[i] = min(suffix_min[i+1], nums[i])

        beauty = 0
        for i in range (1, n-1):
            if prefix_max[i-1] < nums[i] < suffix_min[i+1]:
                beauty += 2
            elif nums [i-1] < nums[i] < nums[i+1]:
                beauty += 1
        return beauty