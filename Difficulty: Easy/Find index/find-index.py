#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

#User function Template for python3

# Read the input tuple from the user
arr = tuple(map(int, input().split()))

# Read the target element to be searched
x = int(input())

########### Write your code below ###############

# Check if x is present in the tuple
if x in arr:
    # Print the index of the first occurrence of x
    print(arr.index(x))
else:
    # Print -1 if x is not found in the tuple
    print(-1)

########### Write your code above ###############


#{ 
 # Driver Code Starts.()
# } Driver Code Ends