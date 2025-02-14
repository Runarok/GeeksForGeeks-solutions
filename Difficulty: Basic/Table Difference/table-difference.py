#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

# Taking input for two numbers
n1 = int(input())
n2 = int(input())

# List to store the differences
difference = []

# Loop to calculate differences for the first 10 multiples
for i in range(1, 11):
    diff = (n1 * i) - (n2 * i)
    difference.append(str(diff))

# Printing the differences space-separated
print(' '.join(difference))


#{ 
 # Driver Code Starts.

# } Driver Code Ends