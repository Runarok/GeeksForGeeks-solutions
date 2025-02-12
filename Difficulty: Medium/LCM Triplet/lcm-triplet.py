class Solution:
    def lcmTriplets(self, N):
        # Handle the case when N is 2
        if N == 2:
            return 2
        
        # Check if N is divisible by 2 and 3, and (N-3) is divisible by 3
        if N % 2 == 0 and N % 3 == 0 and (N - 3) % 3 == 0:
            return (N - 1) * (N - 2) * (N - 3)
        
        # If N is divisible by 2, return the product of N, N-1, and N-3
        if N % 2 == 0:
            return N * (N - 1) * (N - 3)
        
        # If N is odd, return the product of N, N-1, and N-2
        else:
            return N * (N - 1) * (N - 2)

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
        
if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N = int(input())
        ob=Solution()
        print(ob.lcmTriplets(N))
        print("~")
# } Driver Code Ends