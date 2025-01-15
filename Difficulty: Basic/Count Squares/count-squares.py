#User function Template for python3

class Solution:
    def countSquares(self, n):
        return int((n - 1) ** 0.5)  # Calculate the largest integer whose square is less than n


#{ 
 # Driver Code Starts
#Initial Template for Python 3
import math

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())

        ob = Solution()
        print(ob.countSquares(N))
        print("~")

# } Driver Code Ends