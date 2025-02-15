#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

# Taking two integer inputs
a = int(input())
b = int(input())

# Using the Euclidean algorithm to find the GCD (Greatest Common Divisor)
while b != 0:
    a, b = b, a % b  # Swap values and compute remainder

# Printing the GCD of the two numbers
print(a)



#{ 
 # Driver Code Starts.

# } Driver Code Ends