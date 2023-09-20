class Solution:
    def myAtoi(self, s: str) -> int:
        #32 bit signed integer,
        INT_MIN=-(2**31)
        INT_MAX=(2**31)-1
        
        # First, remove white space
        s=s.strip()
        
        #Second,
        first=None
        for character in s:
            if not first:
                if character.isdigit() or character in ['-','+']: 
                    first=character # Number or '-' or '+'
                else: # no valid first character(not digit,not sign)
                    break
            else: 
                if character.isdigit():
                    first+=character
                else: # not digit
                    break
        
        if not first or first in ['-','+']:
            first=0
        elif int(first)<INT_MIN:
            first=INT_MIN
        elif int(first)>INT_MAX:
            first=INT_MAX
            
        return int(first)