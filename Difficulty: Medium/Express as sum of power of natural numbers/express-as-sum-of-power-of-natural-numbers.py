class Solution:
    def numOfWays(self, n, x):
        MOD = 10**9 + 7  # The modulus value

        # Step 1: Precompute all powers k^x where k^x <= n
        powers = []
        k = 1
        while k**x <= n:
            powers.append(k**x)
            k += 1

        # Step 2: Initialize the DP array
        dp = [0] * (n + 1)
        dp[0] = 1  # Base case: One way to make sum 0 is to use no numbers

        # Step 3: Populate the DP table
        for power in powers:
            for i in range(n, power - 1, -1):  # Traverse in reverse to avoid overwriting
                dp[i] = (dp[i] + dp[i - power]) % MOD

        # Step 4: Return the result
        return dp[n]  # The number of ways to form sum n

#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        n, x = input().split()
        n = int(n)
        x = int(x)
        ob = Solution()
        print(ob.numOfWays(n, x))
        print("~")

# } Driver Code Ends