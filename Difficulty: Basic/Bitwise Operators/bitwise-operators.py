#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Taking three integer inputs
a = int(input())
b = int(input())
c = int(input())

########### Write your code below ###############

# Perform bitwise XOR of 'a' with itself
d = a ^ a

# Perform bitwise XOR of 'c' and 'b'
e = c ^ b

# Perform bitwise AND operation between 'a' and 'b'
f = a & b

# Perform bitwise OR operation between 'c' and (a ^ a)
g = c | (a ^ a)

# Perform bitwise NOT operation on 'e'
e = ~e

########### Write your code above ###############

# Print the computed values
print(d, e, f, g)

#{ 
 # Driver Code Starts.

# } Driver Code Ends