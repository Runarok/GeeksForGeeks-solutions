# User function Template for python3

class Solution:
    
    # Helper function to precompute factorials modulo MOD
    def compute_factorials(self, n, MOD):
        fact = [1] * (n + 1)  # Initialize factorial array with 1
        for i in range(2, n + 1):  # Start from 2 as 0! and 1! are 1
            fact[i] = (fact[i - 1] * i) % MOD  # Calculate factorial % MOD
        return fact
        
        
    def rank(self, s):
        # code here
        MOD = 1000003  # Modulo value for large numbers

        # Check for repeated characters
        if len(set(s)) != len(s):  # If there are duplicate characters, return rank 0
            return 0
    
        # Precompute factorials
        n = len(s)
        fact = self.compute_factorials(n, MOD)
    
        # Calculate rank
        rank = 1  # Start with rank 1
        for i in range(n):
            # Count how many characters in the suffix are smaller than the current character
            smaller_count = sum(1 for j in range(i + 1, n) if s[j] < s[i])
            
            # Add to the rank based on the smaller characters count
            rank += (smaller_count * fact[n - i - 1]) % MOD
            rank %= MOD  # Ensure rank stays within the bounds of MOD
    
        return rank
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        S = input()

        ob = Solution()
        print(ob.rank(S))

# } Driver Code Ends