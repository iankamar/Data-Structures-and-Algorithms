class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
   # Extract the x-coordinates and sort them

        x_coordinates = sorted(point[0] for point in points)

   # Find the maximum difference between adjacent x-coordindates using the zip function
        max_width = max(x2 - x1 for x1, x2 in zip (x_coordinates,   x_coordinates[1:]))

        return max_width