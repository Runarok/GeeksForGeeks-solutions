#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3
import math

# Input two numbers a and b
a = int(input())
b = int(input())

# Calculate the GCD of a and b
gcd_ab = math.gcd(a, b)

# Calculate the LCM using the formula
lcm_ab = abs(a * b) // gcd_ab

# Output the result
print(lcm_ab)


#{ 
 # Driver Code Starts.

# } Driver Code Ends