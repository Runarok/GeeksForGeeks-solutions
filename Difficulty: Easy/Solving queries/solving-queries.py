a = list(map(int, input().split()))
b = list(map(str, input().split()))
query = list(map(int, input().split()))

# Create a dictionary mapping each element from list 'a' to the corresponding element in list 'b'
mapping = {}
for i in range(len(a)):
    mapping[a[i]] = b[i]

# Initialize the result list
result = []

# Process each query key
for key in query:
    ########### Write your code below ###############
    # Retrieve the value associated with the current key from the dictionary
    value = mapping.get(key, None)
    ########### Write your code above ###############

    # Add the retrieved value to the result list
    result.append(value)

# Output all results, one per line
print(*result, sep='\n')


#{ 
 # Driver Code Starts
# Driver Code
# } Driver Code Ends