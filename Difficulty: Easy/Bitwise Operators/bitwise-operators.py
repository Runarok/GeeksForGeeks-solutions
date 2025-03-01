#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3
def bitWiseOperation(a, b, c):
    # Perform bitwise XOR of 'a' with itself, which results in 0
    d = a ^ a
    print(d)  # Output: 0, because a^a is always 0
    
    # Perform bitwise XOR of 'c' and 'b'
    e = c ^ b
    print(e)  # Output: result of c^b
    
    # Perform bitwise AND of 'a' and 'b'
    f = a & b
    print(f)  # Output: result of a&b
    
    # Perform bitwise OR of 'c' with the result of 'a^a' (which is 0)
    g = c | (a ^ a)
    print(g)  # Output: same as c, because a^a is 0, and c|0 is c
    
    # Perform bitwise NOT of 'e'
    h = ~e
    print(h)  # Output: bitwise complement of e



#{ 
 # Driver Code Starts.
# Function Definition

# Driver code
if __name__ == "__main__":
    # Input the number of test cases
    t = int(input())

    # Iterate through each test case
    for _ in range(t):
        # Input values for a, b, and c
        a, b, c = map(int, input().split())

        # Call the function for bitwise operations
        bitWiseOperation(a, b, c)

        print("~")
# } Driver Code Ends