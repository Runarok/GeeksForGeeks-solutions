#User function Template for python3
class Solution:
    def minCount(self, arr, n):
        # Initialize the DP table with dimensions (n+1) x (n+2) x (n+2)
        dp = [[[0] * (n + 2) for _ in range(n + 2)] for _ in range(n + 1)]

        # Populate the DP table
        for i in range(n + 1):
            for j in range(1, n + 2):
                for k in range(1, n + 2):
                    if i == 0:
                        dp[i][j][k] = 0
                    else:
                        dp[i][j][k] = dp[i - 1][j][k]

                        if j == n + 1 or arr[i - 1] < arr[j - 1]:
                            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][i][k] + 1)

                        if k == n + 1 or arr[i - 1] > arr[k - 1]:
                            dp[i][j][k] = max(dp[i][j][k], dp[i - 1][j][i] + 1)

        # Return the number of elements not included in either subsequence
        return n - dp[n][n + 1][n + 1]

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		arr = [int(x) for x in input().split()]
		ob = Solution()
		ans = ob.minCount(arr,n)
		print(ans)

# } Driver Code Ends