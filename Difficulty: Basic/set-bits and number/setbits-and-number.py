# User function Template for Python3

class Solution:
    def bitMultiply(self, N):
        # Convert N to its binary representation, count the number of '1's
        y = bin(N)[2:].count('1')
        
        # Return the product of N and the count of '1's in its binary form
        return N * y
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N = int(input())
        
        ob = Solution()
        print(ob.bitMultiply(N))

# } Driver Code Ends