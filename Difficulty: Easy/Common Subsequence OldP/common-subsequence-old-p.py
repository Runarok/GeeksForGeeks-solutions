#User function Template for python3

class Solution:
    def commonSubseq(ob, string1, string2):
        # Convert both strings to sets of unique characters.
        set1 = set(string1)
        set2 = set(string2)
        
        # Check if there is any common character between the two sets.
        if set1 & set2:
            return 1  # Common subsequence exists.
        else:
            return 0  # No common subsequence exists.
#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        S1, S2 = input().split()
        
        ob = Solution()
        print(ob.commonSubseq(S1, S2))
# } Driver Code Ends