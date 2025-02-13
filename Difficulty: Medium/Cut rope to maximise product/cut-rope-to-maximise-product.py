#{ 
 # Driver Code Starts
#Initial Template for Python 3


# } Driver Code Ends
#User function Template for python3

class Solution:
    def maxProduct(self, n: int) -> int:
        # Base cases
        if n == 0:
            return 0
        if n == 1:
            return 0
        if n == 2:
            return 1
        if n == 3:
            return 2

        # Compute the maximum product based on the remainder when divided by 3
        if n % 3 == 0:
            return 3 ** (n // 3)
        elif n % 3 == 1:
            return (3 ** ((n // 3) - 1)) * 4
        else:
            return (3 ** (n // 3)) * 2

        

#{ 
 # Driver Code Starts.

if __name__ == "__main__":
    t = int(input())  # Number of test cases
    for _ in range(t):
        n = int(input())  # Read n
        ob = Solution()
        print(ob.maxProduct(n))
# } Driver Code Ends