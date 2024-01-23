class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        # Sort the points based on x-coordinates
        points.sort(key = lambda x: x[0])

        # Initialize max_width to 0
        max_width = 0

        # Iterate through the sorted list
        for i in range (1, len(points)):

            # Calcualte the difference between x -coordinates of every two adjacent points

            width = points[i][0] - points[i-1][0]

            # Update max_width if the current width is larger
            max_width = max(max_width, width)

        # Return the maximum width
        return max_width