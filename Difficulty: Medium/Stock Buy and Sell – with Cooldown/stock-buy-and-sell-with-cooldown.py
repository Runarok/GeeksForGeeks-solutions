# User function Template for Python3

class Solution:
    
    def solve(self, prices, index, canBuy, memo):
        """
        Recursive function with memoization to find the maximum profit.
        
        :param prices: List of stock prices.
        :param index: Current day index.
        :param canBuy: Flag indicating if we can buy (1) or must sell (0).
        :param memo: Memoization table to avoid redundant calculations.
        :return: Maximum possible profit.
        """
        if index >= len(prices):  # Base case: If index goes out of bounds, return 0 profit
            return 0
        
        if memo[index][canBuy] != -1:  # Check if result is already computed
            return memo[index][canBuy]
        
        if canBuy:
            # Either buy stock (-prices[index]) or skip to the next day
            memo[index][canBuy] = max(-prices[index] + self.solve(prices, index + 1, 0, memo), 
                                      self.solve(prices, index + 1, 1, memo))
        else:
            # Either sell stock (+prices[index]) and skip one day (cooldown) or skip to the next day
            memo[index][canBuy] = max(prices[index] + self.solve(prices, index + 2, 1, memo), 
                                      self.solve(prices, index + 1, 0, memo))

        return memo[index][canBuy]
    
    def maximumProfit(self, prices, n):
        """
        Bottom-up DP approach to find the maximum profit with cooldown.
        
        :param prices: List of stock prices.
        :param n: Number of days.
        :return: Maximum possible profit.
        """
        # Initialize DP table with zero values
        dp = [[0] * 2 for _ in range(n + 2)]  # Extra space for boundary conditions
        
        # Traverse in reverse order (bottom-up approach)
        for i in range(n - 1, -1, -1):
            for canBuy in range(2):
                if canBuy:
                    # Either buy stock (-prices[i]) or skip to the next day
                    dp[i][canBuy] = max(-prices[i] + dp[i + 1][0], dp[i + 1][1])
                else:
                    # Either sell stock (+prices[i]) and skip one day (cooldown) or skip to the next day
                    dp[i][canBuy] = max(prices[i] + dp[i + 2][1], dp[i + 1][0])
        
        return dp[0][1]  # Maximum profit starting from day 0 with buying possibility
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n=int(input())
        prices = list(map(int, input().split()))
        ob = Solution()
        print(ob.maximumProfit(prices, n))
        print("~")
# } Driver Code Ends