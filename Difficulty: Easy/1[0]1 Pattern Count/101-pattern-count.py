# User function Template for Python3
import re

class Solution:
    def patternCount(self, S): 
        # Count occurrences of '1' followed by one or more '0's and another '1'
        return len(re.findall(r"(?:1)0+(?=1)", S))

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        S = input()
        ob = Solution()
        print(ob.patternCount(S))

# } Driver Code Ends