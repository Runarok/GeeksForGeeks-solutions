# User function Template for python3

class Solution:
    def isAmazing(self, n):
        # Initialize a set to store unique divisors
        divisors = {1, n}

        # Check divisors up to the square root of n
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                divisors.add(i)
                divisors.add(n // i)

        # If there are exactly 3 unique divisors, return 1 (Amazing Number)
        return 1 if len(divisors) == 3 else 0

#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n = int(input())
        
        ob = Solution()
        print(ob.isAmazing(n))
# } Driver Code Ends