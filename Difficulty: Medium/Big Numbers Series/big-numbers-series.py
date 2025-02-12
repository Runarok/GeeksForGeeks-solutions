# User function Template for python3

class Solution:
    # Function to find the nth term using factorial and modulus
    def NthTerm(self, n):
        
        # Helper function to calculate factorial recursively
        def factorial(n):
            if n == 1:
                return 1
            return n * factorial(n - 1)  # Recursive call to compute factorial

        # Calculate the nth term as n * factorial(n)
        value = n * factorial(n)
        
        # Check if the value exceeds the modulo threshold
        if value > 10**9 + 7:
            return value % (10**9 + 7)  # Return the result after applying modulo
        else:
            return value  # Return the value directly if within bounds
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		ob = Solution()
		ans = ob.NthTerm(n)
		print(ans)

# } Driver Code Ends