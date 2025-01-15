#User function Template for python3

"""
You're given an array (arr)
Return the frequency of element x in the given array
"""
class Solution:
    def findFrequency(self, arr, x):
        return arr.count(x)

#{ 
 # Driver Code Starts
# Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        arr = list(map(int, input().split()))
        ob = Solution()
        x = int(input())
        ans = ob.findFrequency(arr, x)
        print(ans)

# } Driver Code Ends