# User function Template for python3

class Solution:
    def isDivisible(self, N):
        # Store the original value of N
        C = N
        # Initialize variable to store the sum of digits
        res = 0
        
        # Loop through all digits of N
        while N != 0:
            # Get the last digit of N
            rem = N % 10
            # Add the last digit to the sum of digits
            res += rem
            # Remove the last digit from N
            N //= 10
        
        # Check if the original number is divisible by the sum of its digits
        if C % res == 0:
            return 1  # Return 1 if divisible
        return 0  # Return 0 if not divisible
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N=int(input())
        ob=Solution()
        print(ob.isDivisible(N))
        print("~")
# } Driver Code Ends