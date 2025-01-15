# User function Template for python3

class Solution:
    def metaStrings(self, S1, S2):
        # Check if lengths are the same, otherwise they can't be meta strings
        if len(S1) != len(S2):
            return 0
        
        # If both strings are already equal, they are not meta strings
        if S1 == S2:
            return 0
        
        # Find the positions where characters differ
        diff = []
        for i in range(len(S1)):
            if S1[i] != S2[i]:
                diff.append(i)
        
        # If there are exactly two positions where the strings differ
        # and swapping them makes the strings equal
        if len(diff) == 2:
            i, j = diff
            if S1[i] == S2[j] and S1[j] == S2[i]:
                return 1
        
        return 0



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        S1 = input().strip()
        S2 = input().strip()
        obj = Solution()
        if obj.metaStrings(S1, S2):
            print(1)
        else:
            print(0)
        print("~")
# } Driver Code Ends