class Solution:
    def all_longest_common_subsequences(self, s, t):
        res = set()
        m = len(s)
        n = len(t)
        dp = [[0]*(n+1) for _ in range(m+1)]
        
        for i in range(1, m+1):
            for j in range(1, n+1):
                if s[i-1] == t[j-1]:
                    dp[i][j] = dp[i-1][j-1] +1
                dp[i][j] = max(dp[i][j], dp[i-1][j], dp[i][j-1])
                
        vis = set()
        def rec(i,j,word):
            if (i,j,word) in vis: return
            vis.add((i,j,word))
            if i==0 or j==0:
                res.add(word)
                return
            if s[i-1] == t[j-1]:
                rec(i-1,j-1, s[i-1]+word)
                return
            if dp[i][j] == dp[i-1][j]:
                rec(i-1,j, word)
            if dp[i][j] == dp[i][j-1]:
                rec(i,j-1, word)
                

        rec(m,n,"")
        return sorted(res)
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        s, t = input().split()
        ob = Solution()
        ans = ob.all_longest_common_subsequences(s, t)
        for i in ans:
            print(i, end=" ")
        print()
        print("~")

# } Driver Code Ends