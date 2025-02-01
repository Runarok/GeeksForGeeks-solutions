class Solution:
    def replaceAll(self, s, oldW, newW):
        # Check if the old word exists in the string
        if oldW in s:
            # Replace all occurrences of oldW with newW
            s = s.replace(oldW, newW)
        
        # Return the modified string
        return s

#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        S = input()
        oldW = input()
        newW = input()
        
        ob = Solution()
        print(ob.replaceAll(S, oldW, newW))
# } Driver Code Ends