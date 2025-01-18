#User function Template for python3
class Solution:
    def LongestRepeatingSubsequence(self, s: str) -> int:
        n = len(s)
        
        # DP table to store the length of the longest repeating subsequence
        dp = [[0] * (n + 1) for _ in range(n + 1)]
        
        # Fill the DP table
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                # If characters match and i != j, it can be part of the repeating subsequence
                if s[i - 1] == s[j - 1] and i != j:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
        
        # The result is in the bottom-right corner of the DP table
        return dp[n][n]



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        str = input()
        ob = Solution()
        ans = ob.LongestRepeatingSubsequence(str)
        print(ans)
        print("~")

# } Driver Code Ends