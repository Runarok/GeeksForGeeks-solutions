#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

def print_square_wall(n):
    # Outer loop for rows
    for i in range(n):
        # Inner loop for columns in each row
        for j in range(n):
            # Print '*' without a newline at the end
            print('*', end=' ')
        # Print a new line after each row
        print()

# Example usage:
n = int(input())  # Get the size of the square wall
print_square_wall(n)

#{ 
 # Driver Code Starts.

# } Driver Code Ends