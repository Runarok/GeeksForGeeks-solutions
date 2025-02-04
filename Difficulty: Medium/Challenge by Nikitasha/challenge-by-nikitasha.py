class Solution:
    def findMaximum(self, N, Z, K, S):
        mod_ = 10 ** 9 + 7
        
        # Precompute powers of K modulo mod_ for efficient computation of hash values
        powers = [1] * Z
        for i in range(1, Z):
            powers[i] = (powers[i - 1] * K) % mod_
        
        # Compute the modular inverse of K using Fermat's Little Theorem to handle division modulo mod_
        K_inv = pow(K, mod_ - 2, mod_)
        
        # Calculate the initial hash (F) for the first substring of length Z
        F = 0
        for i in range(Z):
            F = (F + ord(S[i]) * powers[i]) % mod_
        
        # Initialize the maximum hash value (F_max) to the initial hash
        F_max = F
        
        # Use rolling hash to efficiently calculate the hash for subsequent substrings
        for i in range(1, N - Z + 1):
            # Update F by removing the contribution of the first character in the previous window
            F = (F - ord(S[i - 1]) * powers[0]) % mod_
            
            # Multiply by K's modular inverse to simulate division by K
            F = (F * K_inv) % mod_
            
            # Add the contribution of the new character at the end of the window
            F = (F + ord(S[i + Z - 1]) * powers[Z - 1]) % mod_
            
            # Update the maximum F found so far
            F_max = max(F_max, F)
        
        return F_max

#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n,z,k=map(int,input().split())
        s = input()
        ob = Solution()
        print(ob.findMaximum(n,z,k,s))
        print("~")
# } Driver Code Ends