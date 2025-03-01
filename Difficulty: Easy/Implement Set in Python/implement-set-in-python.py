#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Read input set as integers
st = {int(x) for x in input().split()}

# Read the integer to be inserted
i = int(input())

# Read the integer to be removed
r = int(input())

########### Write your code below ###############
# Insert 'i' into the set. Set automatically handles duplicates, so no need to check.
st.add(i)
########### Write your code above ###############

# Print the set elements in sorted order after insertion
for element in sorted(st):
    print(element, end=' ')
print()

########### Write your code below ###############
# Remove 'r' from the set if it exists. discard() does not raise an error if 'r' is not found.
st.discard(r)
########### Write your code above ###############

# Print the set elements in sorted order after removal
for element in sorted(st):
    print(element, end=' ')
print()

########### Write your code below ###############
# Calculate sum of all elements currently in the set
sum_of_elements = sum(st)
########### Write your code above ###############

# Print the sum of set elements
print(sum_of_elements)



#{ 
 # Driver Code Starts.
# } Driver Code Ends