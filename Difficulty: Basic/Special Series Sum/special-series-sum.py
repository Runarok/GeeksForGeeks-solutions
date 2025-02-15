# User function Template for Python3

class Solution:
    def sumOfTheSeries(self, n):
        # Calculating the sum of squares of first n natural numbers
        sum_of_squares = (n * (n + 1) * (2 * n + 1)) // 6
        
        # Calculating the sum of first n natural numbers
        sum_of_natural = (n * (n + 1)) // 2
        
        # Returning the final result
        return (sum_of_squares + sum_of_natural) // 2

#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n = int(input())
        
        ob = Solution()
        print(ob.sumOfTheSeries(n))
# } Driver Code Ends