class Solution:
    def isPalindrome(self, s: str) -> bool:
        if s == "":
            return True
        newStr = [val.lower() for val in s if val.isalnum()]
        return newStr ==  newStr [::-1]
    
