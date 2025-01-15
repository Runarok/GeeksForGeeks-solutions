# Your task is to complete this function
# Finction should return Integer
class Solution:
    def sequenceCount(self, txt, pat):
        # Get lengths of both text and pattern
        m, n = len(txt), len(pat)
        
        # Initialize dp table
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # Base case: empty pattern can be matched with any prefix of txt
        for i in range(m + 1):
            dp[i][0] = 1
        
        # Fill the dp table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if txt[i - 1] == pat[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
                else:
                    dp[i][j] = dp[i - 1][j]
        
        # The answer is in dp[m][n]
        return dp[m][n]

#{ 
 # Driver Code Starts
#Initial template for Python 3

if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        a = input()
        b = input()
        print(Solution().sequenceCount(str(a), str(b)))

        print("~")

# } Driver Code Ends