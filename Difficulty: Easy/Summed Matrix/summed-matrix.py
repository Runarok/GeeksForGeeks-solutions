# User function Template for python3

class Solution:
    def sumMatrix(self, n, q):
        # code here 
        
        # Check if q is within the valid range: greater than 1 and less than or equal to 2*n
        if q > 1 and q <= 2 * n:
            # If q is less than n, return q-1 (calculating the sum based on the row number)
            if q < n:
                return q - 1
            # If q is greater than or equal to n, return 2*n+1-q (calculating the sum based on the row number from the bottom)
            else:
                return 2 * n + 1 - q
        # If q is outside the valid range, return 0
        else:
            return 0

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n, q = map(int, input().split())

        ob = Solution()
        print(ob.sumMatrix(n, q))

        print("~")
# } Driver Code Ends