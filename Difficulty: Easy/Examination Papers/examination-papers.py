# User function Template for python3

class Solution:
    # Function to calculate total moves for N disks in Tower of Hanoi
    def totalMoves(self, N):
        # Return the total number of moves using the formula 2^N - 1
        return pow(2, N) - 1


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N = int(input())
        
        ob = Solution()
        print(ob.totalMoves(N))
# } Driver Code Ends