from typing import List


class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        res = 0
        if not grid:
            return res

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    self.cur = 0
                    self.dfs(i, j, grid)
                    res = max(self.cur, res)

        return res

    def dfs(self, i, j, grid):
        if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] != 1:
            return
        grid[i][j] = 2

        self.cur += 1

        self.dfs(i - 1, j, grid)
        self.dfs(i + 1, j, grid)
        self.dfs(i, j - 1, grid)
        self.dfs(i, j + 1, grid)