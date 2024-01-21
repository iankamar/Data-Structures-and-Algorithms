from typing import List
import heapq

class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start_node: int, end_node: int) -> float:
        graph = [[] for _ in range(n)]
        for i, (a, b) in enumerate(edges):
            graph[a].append((b, succProb[i]))
            graph[b].append((a, succProb[i]))

        probs = [0.0] * n
        probs[start_node] = 1.0
        queue = [(-1.0, start_node)]

        while queue:
            prob, node = heapq.heappop(queue)
            prob *= -1
            if prob < probs[node]:
                continue
            for nei, succ in graph[node]:
                if probs[node] * succ > probs[nei]:
                    probs[nei] = probs[node] * succ
                    heapq.heappush(queue, (-probs[nei], nei))

        return probs[end_node]
