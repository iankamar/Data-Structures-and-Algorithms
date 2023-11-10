import heapq
class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        negative_piles = [-x for x in piles]
        heapq.heapify(negative_piles)
        i = 0
        while negative_piles and i < k:
            candidate = - heapq.heappop(negative_piles)
            candidate -= candidate // 2
            heapq.heappush(negative_piles, -candidate)
            i += 1
        return -sum(negative_piles)
        