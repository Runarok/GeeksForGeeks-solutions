class Solution:
    def countDivisibles(self, A, B, M):
        # To find the number of multiples of M in range [A, B]
        # Count of numbers divisible by M from 1 to B
        countB = B // M
        # Count of numbers divisible by M from 1 to A-1
        countA = (A - 1) // M
        # The result is the difference
        return countB - countA

#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        A, B, M = input().split()
        A = int(A)
        B = int(B)
        M = int(M)
        
        ob = Solution()
        print(ob.countDivisibles(A, B, M))
# } Driver Code Ends