#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# Taking input and initializing dictionary
keys = input().split()
values = map(int, input().split())
my_dict = dict(zip(keys, values))

k, v = input().split()

########### Write your code below ###############
# Insert k,v in my_dict
# Print Inserted if inserted successfully
my_dict[k] = int(v)
print("Inserted")

########### Write your code above ###############

d = input()

########### Write your code below ###############
# Delete entry with key d from my_dict
# Print Deleted if deleted successfully else print -1
if d in my_dict:
    del my_dict[d]
    print("Deleted")
else:
    print("-1")

p = input()

if p in my_dict:
    print("Marks of", p, "is", my_dict[p])
else:
    print("-1")
########### Write your code above ###############



#{ 
 # Driver Code Starts.
# } Driver Code Ends