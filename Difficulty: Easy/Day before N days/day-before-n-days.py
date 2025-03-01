#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Read inputs
d = int(input())  # Current day index (0=Monday, 1=Tuesday, ..., 6=Sunday)
n = int(input())  # Number of days before the current day

# Calculate the day index `n` days before day `d`
previous_day = (d - n) % 7

# If result is negative, wrap around the week
if previous_day < 0:
    previous_day += 7

# Print the result
print(previous_day)


#{ 
 # Driver Code Starts.

# } Driver Code Ends