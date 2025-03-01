#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3
def find_minimum(a, b):
    # Initialize the list to store results of all valid operations
    result = []

    # Perform all the operations
    p = a + b
    q = a - b
    z = a * b
    
    # Check for division by zero and perform the operation if valid
    if b == 0:
        u = float('inf')  # If division by zero, set a high value (or handle as needed)
    else:
        u = a / b
    
    # Add the results of all operations to the list
    result = [p, q, u, z]
    
    # Return the minimum of all valid operations
    return min(result)


#{ 
 # Driver Code Starts.

a = int(input())
b = int(input())
print(find_minimum(a,b))
# } Driver Code Ends