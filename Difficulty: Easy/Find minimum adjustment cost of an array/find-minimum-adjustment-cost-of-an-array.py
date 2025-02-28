M = 100

class Solution:

    # Function to find the minimum adjustment cost of an array
    def minAdjustmentCost(self, A, target):

        # n is the length of the array
        n = len(A)
        
        # dp[i][j] stores the minimum adjustment cost for changing A[i] to j
        dp = [[0 for i in range(M + 1)] for i in range(n)]

        # Handle the first element of the array separately
        for j in range(M + 1):
            dp[0][j] = abs(j - A[0])  # Cost of changing A[0] to j

        # Process the rest of the elements in the array
        for i in range(1, n):
            # For each possible value j to change A[i] to, calculate the minimal adjustment cost
            for j in range(M + 1):
                # Initialize the minimum adjustment cost for this change to a very large value
                dp[i][j] = 100000000

                # Consider all possible values k where k is within the allowed adjustment range
                for k in range(max(j - target, 0), min(M, j + target) + 1):
                    # Calculate the minimal cost by considering previous adjustments
                    dp[i][j] = min(dp[i][j], dp[i - 1][k] + abs(A[i] - j))

        # Find the minimum adjustment cost from the last row of the dp table
        res = 10000000
        for j in range(M + 1):
            res = min(res, dp[n - 1][j])

        return res  # Return the minimum adjustment cost


#{ 
 # Driver Code Starts
if __name__ == '__main__':
    t = int(input())
    for _ in range(0, t):

        a = list(map(int, input().split()))
        k = int(input())
        ob = Solution()
        ans = ob.minAdjustmentCost(a, k)
        print(ans)
        print("~")

# } Driver Code Ends