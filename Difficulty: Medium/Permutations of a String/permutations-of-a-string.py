#User function Template for python3

import itertools

class Solution:
    def findPermutation(self, s):
        # Generate all permutations using itertools
        permutations = sorted(set([''.join(p) for p in itertools.permutations(s)]))
        return permutations


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        S = input()
        ob = Solution()
        ans = ob.findPermutation(S)
        ans.sort()
        for i in ans:
            print(i, end=" ")
        print()
        print("~")

# } Driver Code Ends