# User function Template for Python3

class Solution:
    def MinCoin(self, coins, amount):
        # Number of different coin denominations
        num_coins = len(coins)
        
        # DP array to store the minimum number of coins required for each amount
        dp = [0] * (amount + 1)
        
        # Sort the coin denominations for efficiency
        coins.sort()
        
        # Iterate through all amounts from 1 to the given amount
        for current_amount in range(1, amount + 1):
            min_coins = float('inf')
            
            # Check each coin denomination to find the minimum count needed
            for coin in coins:
                if coin <= current_amount:
                    min_coins = min(min_coins, 1 + dp[current_amount - coin])
                else:
                    break  # No need to check further as coins are sorted
            
            dp[current_amount] = min_coins
        
        # If the value at dp[amount] is still a large number, return -1 (not possible)
        return -1 if dp[amount] >= 10**9 + 7 else dp[amount]

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        n, amount = input().split()
        n = int(n)
        amount = int(amount)
        nums = list(map(int, input().split()))
        ob = Solution()
        ans = ob.MinCoin(nums, amount)
        print(ans)
        print("~")

# } Driver Code Ends