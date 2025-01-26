#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
# Read input lists from the user
list1 = list(map(int, input().split()))
list2 = list(map(int, input().split()))

# 1. Use zip() to combine multiple lists into a single iterable
zipped = zip(list1, list2)

# Display the zipped result
print(list(zipped))  # Converts to list for display

# 2. Use filter() with lambda function to filter out numbers greater than 2 in list1
filtered = filter(lambda x: x <= 2, list1)

# Display the filtered result
print(list(filtered))

# 3. Using map() with lambda function to multiply each number of list1 by 2
mapped = map(lambda x: x * 2, list1)

# Display the mapped result
print(list(mapped))

#{ 
 # Driver Code Starts.

print('~')
# } Driver Code Ends