class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        
        adj_list = defaultdict(dict)
        
        for (a, b), val in zip(equations, values):
            adj_list[a][b] = val
            adj_list[b][a] = 1 / val
            
        res = []
                
        def bfs(source, target):
            queue = deque()
            visited = set()
            
            queue.append((source, 1))
            visited.add(source)
            
            while queue:
                curr, curr_dist = queue.popleft()
                
                if curr not in adj_list:
                    return -1
                
                if curr == target:
                    return curr_dist
                
                for nei, dist in adj_list[curr].items():
                    if nei not in visited:
                        visited.add(nei)
                        queue.append((nei, curr_dist * dist))
            
            return -1
        
        return [bfs(a, b) for a, b in queries]