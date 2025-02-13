# User function Template for python3

class Solution:
    def count(self, N, A):
        # code here
        MOD = 10**9 + 7
        
        # Find minimum and maximum values in the array A
        min_val, max_val = min(A), max(A)
        
        # Initialize dp array: dp[i] will store a dictionary of differences at index i
        dp = [{} for _ in range(N)]
        
        # Initialize total_count with N + 1 (for the empty subsequence and single-element subsequences)
        total_count = N + 1
        
        # Iterate over all pairs of indices (i, j) where i > j
        for i in range(N):
            for j in range(i):
                # Calculate the difference between A[i] and A[j]
                diff = A[i] - A[j]
                
                # Update dp[i] for the current difference
                dp[i][diff] = (dp[i].get(diff, 0) + dp[j].get(diff, 0) + 1) % MOD
                
                # Update total_count with the new subsequences that can be formed
                total_count = (total_count + dp[j].get(diff, 0) + 1) % MOD

        # Return the total number of subsequences modulo MOD
        return total_count
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        A = [int(item) for item in input().split()]
        ob = Solution()
        print(ob.count(N, A))
        print("~")

# } Driver Code Ends