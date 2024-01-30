class Solution:
    def minimumSum(self, num: int) -> int:
        digits = sorted(str(num))  # Sort the digits in ascending order
        new1, new2 = '', ''  # Initialize the two new numbers
        for i in range(4):
            # Distribute the digits to new1 and new2 alternately, starting with the smallest digit
            if i % 2 == 0:
                new1 += digits[i]
            else:
                new2 += digits[i]
        return int(new1) + int(new2)  # Return the sum of new1 and new2
