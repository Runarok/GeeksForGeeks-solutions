# User function Template for python3

class Solution:
    def nthEvenFibonacci(ob, n):
        # Initialize the first two Fibonacci numbers
        first = 1
        second = 1
        fib_number = 0
        even_count = 0
        
        # Loop until we find the nth even Fibonacci number
        while even_count != n:
            fib_number = first + second  # Compute the next Fibonacci number
            first = second  # Update first with second
            second = fib_number  # Update second with the new Fibonacci number
            
            # Check if the Fibonacci number is even
            if fib_number % 2 == 0:
                even_count += 1  # Increment even count if the number is even
        
        # Return the nth even Fibonacci number modulo 10^9 + 7
        return fib_number % 1000000007

#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n = int(input())
        
        ob = Solution()
        print(ob.nthEvenFibonacci(n))
# } Driver Code Ends