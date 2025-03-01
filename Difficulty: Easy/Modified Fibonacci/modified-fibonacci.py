# User function Template for python3

class Solution:
    def modifiedFib(self, N, A, B, C):
        # Adjust N to follow the pattern correctly
        N = N - 1
        
        # Find the remainder when N is divided by 6
        m = N % 6
        
        # Define the modulus constant to handle large numbers
        mod = 10**9 + 7
        
        # Determine the result based on the value of m
        if m == 0:
            return (A + B) % mod  # A + B for m == 0
        elif m == 1:
            return (B + C) % mod  # B + C for m == 1
        elif m == 2:
            return (C - A) % mod  # C - A for m == 2
        elif m == 3:
            return -(A + B) % mod  # -(A + B) for m == 3
        elif m == 4:
            return -(B + C) % mod  # -(B + C) for m == 4
        else:
            return -(C - A) % mod  # -(C - A) for m == 5


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N, A, B, C = [int(x) for x in input().split()]
        
        ob = Solution()
        print(ob.modifiedFib(N, A, B, C))
# } Driver Code Ends