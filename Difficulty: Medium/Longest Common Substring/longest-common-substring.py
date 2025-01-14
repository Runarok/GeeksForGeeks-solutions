class Solution:
    def longestCommonSubstr(self, s1, s2):
        # Get the lengths of the two strings
        m, n = len(s1), len(s2)
        
        # Create a 2D table to store lengths of longest common suffixes
        # dp[i][j] will store the length of longest common substring
        # ending with s1[i-1] and s2[j-1]
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # Variable to keep track of the maximum length of the common substring
        max_len = 0
        
        # Build the dp table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                # If characters match, add 1 to the length of common substring
                if s1[i - 1] == s2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                    max_len = max(max_len, dp[i][j])
                else:
                    dp[i][j] = 0  # No common substring ending at this position
        
        # Return the maximum length found
        return max_len


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        S1 = input().strip()
        S2 = input().strip()
        ob = Solution()
        print(ob.longestCommonSubstr(S1, S2))
        print("~")

# } Driver Code Ends