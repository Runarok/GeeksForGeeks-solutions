#User function Template for python3

class Solution:
    def optimalKeys(self, N):
        # dp[i] will store the maximum number of 'A's that can be printed using exactly i presses
        dp = [0] * (N + 1)
        
        # Fill dp array for the base case where pressing key 1 gives 1 'A' for each press
        for i in range(1, N + 1):
            dp[i] = i  # Best case: just print 'A' i times.
        
        # Iterate through all the possible numbers of key presses from 4 to N
        for i in range(4, N + 1):
            for j in range(1, i - 2):  # Split into j presses for 'A's and (i - j - 1) for copying and pasting
                dp[i] = max(dp[i], dp[j] * (i - j - 1))  # Try a copy-paste strategy
        
        return dp[N]

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        
        ob = Solution()
        print(ob.optimalKeys(N))
        print("~")
# } Driver Code Ends