import heapq

class Solution:
    def max_sum(self, a, k):
        n = len(a)
        dp = [[-1 for i in range(k+1)] for j in range(n)]
        
        # Initialize the base case where subsequences of length 1 are just the elements themselves
        for i in range(n):
            dp[i][1] = a[i]
        
        # Fill the DP table for subsequences of length 2 to k
        for i in range(1, n):
            for j in range(i):
                for leng in range(2, k+1):
                    # If the current element is greater than or equal to the previous element in the subsequence
                    # and the previous subsequence of length (leng-1) is valid
                    if a[i] >= a[j] and dp[j][leng-1] != -1:
                        dp[i][leng] = max(dp[i][leng], dp[j][leng-1] + a[i])
        
        # Find the maximum sum among all subsequences of length k
        ans = -1
        for i in range(n):
            ans = max(ans, dp[i][k])
        
        return ans

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        n, k = input().split()
        n = int(n)
        k = int(k)
        a = list(map(int, input().split()))

        ob = Solution()
        ans = ob.max_sum(a, k)

        print(ans)
        print("~")

# } Driver Code Ends