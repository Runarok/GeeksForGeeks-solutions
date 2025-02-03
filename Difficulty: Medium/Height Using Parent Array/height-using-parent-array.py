# User function Template for Python3

class Solution:
    def findHeight(self, N, arr):
        # Initialize a dp array to store the height of each node
        dp = [-1] * (N + 1)
        
        # Helper function to compute the height of a node recursively
        def h(cur):
            # If the height is not computed yet, calculate it
            if dp[cur + 1] == -1:
                dp[cur + 1] = 1 if cur == -1 else 1 + h(arr[cur])
            return dp[cur + 1]
        
        # Return the maximum height of all nodes in the tree
        return max(h(cur) for cur in arr)

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        arr = input().split()
        for i in range(N):
            arr[i] = int(arr[i])
        
        ob = Solution()
        print(ob.findHeight(N, arr))
# } Driver Code Ends