# User function Template for Python3

class Solution:
    def hasThreePrimeFac(self, N):
        # Variable to count the number of factors
        factor_count = 0

        # Iterate through potential divisors up to the square root of N
        for i in range(1, int(N**0.5) + 1):
            if N % i == 0:
                factor_count += 1  # Count the divisor
                if i != (N // i):  
                    factor_count += 1  # Count the corresponding quotient if it's different

            # If more than 3 factors are found, return 0 early
            if factor_count > 3:
                return 0

        # Return 1 if exactly 3 factors are found, otherwise return 0
        return 1 if factor_count == 3 else 0

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N=int(input())
        
        ob = Solution()
        print(ob.hasThreePrimeFac(N))
# } Driver Code Ends