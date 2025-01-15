class Solution:
    def isValid(self, s):
        # Split the string into parts by the dot '.'
        parts = s.split('.')
        
        # Check if there are exactly 4 parts
        if len(parts) != 4:
            return False
        
        # Check if each part is a valid number and lies between 0 and 255
        for part in parts:
            # Check if part is a number and does not have leading zeros
            if not part.isdigit() or (part != "0" and part.startswith("0")):
                return False
            
            # Convert the part to integer and check the range
            num = int(part)
            if num < 0 or num > 255:
                return False
        
        # If all checks pass, return True
        return True



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    for _ in range(0, t):
        s = input()
        ob = Solution()
        if (ob.isValid(s)):
            print("true")
        else:
            print("false")
        print("~")

# } Driver Code Ends
