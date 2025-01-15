#User function Template for python3

class Solution:
    #Function to return list containing first n fibonacci numbers.
    def fibonacciNumbers(self,n):
         # Initialize the list with the first two Fibonacci numbers
        fib_sequence = [0, 1]
        
        # If n is 1, we return just [0]
        if n == 1:
            return [0]
        
        # Generate Fibonacci numbers until we reach n numbers
        for i in range(2, n):
            next_fib = fib_sequence[-1] + fib_sequence[-2]
            fib_sequence.append(next_fib)
        
        return fib_sequence[:n]

#{ 
 # Driver Code Starts
#Initial Template for Python 3

#contributed by RavinderSinghPB
if __name__ == '__main__':
    t = int(input())
    for tcs in range(t):

        n = int(input())
        res = Solution().fibonacciNumbers(n)
        for i in range(len(res)):
            print(res[i], end=" ")
        print()
        print("~")

# } Driver Code Ends