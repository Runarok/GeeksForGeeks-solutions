# User function Template for Python3

class Solution:
    def sumOfFactors(self, N):
        """
        Function to calculate the sum of prime factors of a given number N.
        
        :param N: Integer input for which sum of prime factors is calculated.
        :return: Sum of all prime factors of N.
        """
        factor_sum = 0
        original_N = N  # Store original value of N

        while N > 1:
            for i in range(2, N + 1):  # Find the smallest divisor
                if N % i == 0:
                    factor_sum += i  # Add factor to sum
                    N //= i  # Reduce N by dividing by the smallest factor
                    break
        
        # If sum of factors equals the original number, add 1 to the sum
        if factor_sum == original_N:
            factor_sum += 1
        
        return factor_sum

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        ans = ob.sumOfFactors(N)
        print(ans)

        print("~")
# } Driver Code Ends