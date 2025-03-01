# User function Template for python3

class Solution:
    def fibGcd(self, M, N):
        # Function to calculate Fibonacci modulo 100
        def fib(n):
            a, b = 0, 1
            for x in range(2, n + 1):
                a, b = b, (a + b) % 100  # Calculate Fibonacci and take mod 100
            return b
        
        # Function to calculate GCD of two numbers
        def gcd(m, n):
            while m > 0 and n > 0:
                if n < m:
                    m = m % n
                else:
                    n = n % m
            return max(m, n)  # Return the larger of m or n when one becomes zero
        
        # Calculate the GCD of M and N
        result = gcd(M, N)
        
        # Get the Fibonacci of the result of the GCD
        res = fib(result)
        
        return res  # Return the final result


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        m, n = map(int,input().split())
        ob = Solution()
        print(ob.fibGcd(m, n))
# } Driver Code Ends