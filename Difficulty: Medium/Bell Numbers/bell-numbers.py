# User function Template for python3

class Solution:
    def bellNumber(self, N):
        res = 0
        # Initialize the memoization table for dynamic programming
        st = [[-1 for _ in range(N + 1)] for _ in range(N + 1)]
        
        # Calculate the Bell Number by summing results of the recursive function for all k from 1 to N
        for k in range(1, N + 1):
            res += self.rec(N, k, st)
        
        return res

    def rec(self, n, k, st) -> int:
        # Base cases
        if n == 0 and k == 0: return 1  # Bell number for 0 elements
        if n == 0 or k == 0: return 0   # Impossible case, no way to partition
        if n == k: return 1             # Only one way to partition n elements into n parts
        if k == 1: return 1             # Only one way to partition into one part
        
        # If the value has been computed before, return it from the memoization table
        if st[n][k] != -1:
            return st[n][k]
        
        # Recursive case: calculate the Bell number using the recurrence relation
        st[n][k] = k * self.rec(n - 1, k, st) + self.rec(n - 1, k - 1, st)
        
        return st[n][k]
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    ob = Solution()
    t = int(input())
    for _ in range(t):
        N = int(input())
        ans = ob.bellNumber(N)
        print(ans)

# } Driver Code Ends