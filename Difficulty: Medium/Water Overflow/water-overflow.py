class Solution:
    def waterOverflow(self, K, R, C):
        # Initialize the dp table with 0.0
        dp = [[0.0 for _ in range(R)] for _ in range(R)]
        
        # Set the amount of water in the topmost glass (the first one)
        dp[0][0] = K
        
        # Loop through each row and each glass in the row
        for i in range(R - 1):
            for j in range(i + 1):  # Only process up to the i-th glass in the i-th row
                if dp[i][j] > 1:
                    # Calculate the excess water above 1
                    excess = dp[i][j] - 1
                    dp[i][j] = 1  # Glass is full, no more water can be held here
                    # Distribute excess water equally to the two glasses below
                    dp[i+1][j] += excess / 2
                    dp[i+1][j+1] += excess / 2
        
        # Return the minimum of 1.0 or the value in the target glass at (R-1, C-1)
        return min(1.0, dp[R-1][C-1])

#{ 
 # Driver Code Starts
#Initial Template for Python 3

t = int (input ())
for _ in range (t):
    K,R,C=map(int,input().split())
    
    ob = Solution()
    res = ob.waterOverflow(K,R,C)
    print('{:.6f}'.format(res))
    print("~")
# } Driver Code Ends