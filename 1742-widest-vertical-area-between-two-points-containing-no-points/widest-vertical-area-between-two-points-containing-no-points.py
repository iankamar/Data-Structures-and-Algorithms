class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        # Create a new list that only contains the x-coordinates of the points
        x_values = [point[0] for point in points]
        
        # Sort the x-values in ascending order
        x_values.sort()
        
        # Initialize the maximum difference between x-values to be zero
        max_difference = 0
        
        # Go through each pair of adjacent x-values in the sorted list
        for i in range(1, len(x_values)):
            # Calculate the difference between the current x-value and the previous one
            difference = x_values[i] - x_values[i-1]
            
            # If this difference is larger than the current maximum difference, update the maximum difference
            max_difference = max(max_difference, difference)
        
        # After checking all pairs of x-values, return the maximum difference found
        return max_difference
