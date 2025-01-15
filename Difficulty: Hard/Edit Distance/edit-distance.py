class Solution:
    def editDistance(self, s1, s2):
        m, n = len(s1), len(s2)
        
        # Create a 2D DP array where dp[i][j] represents the minimum operations required to convert s1[0...i-1] to s2[0...j-1]
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # If s1 is empty, we need to insert all characters of s2
        for i in range(n + 1):
            dp[0][i] = i
        
        # If s2 is empty, we need to remove all characters of s1
        for i in range(m + 1):
            dp[i][0] = i
        
        # Fill the dp table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if s1[i - 1] == s2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]  # No operation needed if characters are the same
                else:
                    dp[i][j] = min(
                        dp[i - 1][j] + 1,  # Remove character from s1
                        dp[i][j - 1] + 1,  # Insert character into s1
                        dp[i - 1][j - 1] + 1  # Replace character in s1
                    )
        
        return dp[m][n]


#{ 
 # Driver Code Starts
if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        s1 = input()
        s2 = input()
        ob = Solution()
        ans = ob.editDistance(s1, s2)
        print(ans)
        print("~")

# } Driver Code Ends