import re

class Solution:
    def isPatternPresent(self, S , P):
        return 1 if len(re.findall(P, S)) > 0 else 0 

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        P=input()
        S=input()
        
        ob = Solution()
        print(ob.isPatternPresent(S,P))
        print("~")
# } Driver Code Ends