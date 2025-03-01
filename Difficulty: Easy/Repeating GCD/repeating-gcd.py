# User function Template for python3

class Solution:
    def FindGcd(self, N, x, y):
        # Function to calculate the greatest common divisor (GCD) of two numbers
        def gcd(a, b):
            while b != 0:
                a, b = b, a % b
            return a
        
        # Calculate the GCD of x and y to determine how many times N should be repeated
        repeat_count = gcd(x, y)
        
        # Return the string representation of N repeated 'repeat_count' times
        return str(N) * repeat_count

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		N, x, y = input().split()
		N = int(N)
		x = int(x)
		y = int(y)
		ob = Solution()
		ans = ob.FindGcd(N, x, y)
		print(ans)
# } Driver Code Ends