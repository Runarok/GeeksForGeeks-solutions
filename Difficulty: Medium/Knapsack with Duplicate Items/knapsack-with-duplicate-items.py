#User function Template for python3

class Solution:
    def knapSack(self, val, wt, capacity):
        # dp[i] will be the maximum value we can obtain with a knapsack of capacity i
        dp = [0] * (capacity + 1)
        
        # Iterate over all possible capacities
        for i in range(1, capacity + 1):
            for j in range(len(wt)):
                if wt[j] <= i:
                    dp[i] = max(dp[i], dp[i - wt[j]] + val[j])
        
        return dp[capacity]


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        W = int(input())
        val = list(map(int, input().split()))
        wt = list(map(int, input().split()))

        ob = Solution()
        print(ob.knapSack(val, wt, W))
        print("~")

# } Driver Code Ends