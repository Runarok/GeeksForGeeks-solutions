# User function Template for python3

class Solution:
    # Function to check if the number satisfies the Adam property
    def checkAdamOrNot(self, N):
        # Square of the number N
        s = int(N * N)
        
        # Reverse the digits of N and convert to integer
        a = str(N)[::-1]
        
        # Square the reversed number
        c = int(a) * int(a)
        
        # Check if the square of N is the reverse of the square of the reversed number
        if(str(s) == str(c)[::-1]):
            return "YES"  # Return "YES" if the condition is satisfied
        return "NO"  # Return "NO" otherwise

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N=int(input())
        
        ob = Solution()
        print(ob.checkAdamOrNot(N))
        print("~")
# } Driver Code Ends