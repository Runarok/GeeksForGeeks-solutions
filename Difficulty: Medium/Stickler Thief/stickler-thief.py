#User function Template for python3

class Solution:  
    
    # Function to find the maximum money the thief can get.
    def findMaxSum(self, arr):
        n = len(arr)
        
        # If there are no houses
        if n == 0:
            return 0
        
        # If there is only one house
        if n == 1:
            return arr[0]
        
        # Create a dp array to store the maximum loot up to each house
        dp = [0] * n
        
        # Base cases
        dp[0] = arr[0]  # Maximum loot from the first house
        dp[1] = max(arr[0], arr[1])  # Maximum loot from the first two houses
        
        # Loop through the array starting from the third house
        for i in range(2, n):
            # For each house, you can either loot it (add arr[i] + dp[i-2]) or skip it (take dp[i-1])
            dp[i] = max(arr[i] + dp[i-2], dp[i-1])
        
        # The last element of dp array will contain the maximum loot possible
        return dp[n-1]

#{ 
 # Driver Code Starts
#Initial Template for Python 3
import atexit
import io
import sys

sys.setrecursionlimit(10**6)
# Contributed by : Nagendra Jha

if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases):

        a = list(map(int, input().strip().split()))
        ob = Solution()
        print(ob.findMaxSum(a))
        print("~")

# } Driver Code Ends