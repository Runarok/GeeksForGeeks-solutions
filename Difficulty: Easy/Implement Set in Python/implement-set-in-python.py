#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Function to insert an element into the set
# This function should not return anything or print anything
def insert(existing_set, new_element):
    existing_set.add(new_element)
    # Adds the given element to the set. 
    # If the element is already present, no changes are made.

# Function to remove a specific element from the set
# This function should not return anything or print anything
def remove_from_set(existing_set, element_to_remove):
    existing_set.discard(element_to_remove)
    # Removes the specified element from the set if it exists.
    # If the element is not found, the set remains unchanged.

# Function to calculate the sum of all elements in the set
# This function should return the sum of all elements
def sum_set(existing_set):
    return sum(existing_set)
    # Computes and returns the sum of all numeric elements in the set.



#{ 
 # Driver Code Starts.

# Driver Code
def main():
    
    # Testcase input
    testcase = int(input())
    
    # looping through testcases
    while testcase > 0:
        query = int(input())
        st = {int(x) for x in input().split()}
        
        while query > 0:
            
            q = input().split()
            
            if(q[0] == 'i'):
                element = int(q[1])
                insert(st, element)
                for i in sorted(st):
                    print (i, end=' ')
                print ()
                
            if(q[0] == 'r'):
                element = int(q[1])
                remove_from_set(st, element)
                for i in sorted(st):
                    print (i, end=' ')
                print ()
            
            if(q[0] == 's'):
                print (sum_set(st))
            
            query -= 1
            
        testcase -= 1

        print("~")
if __name__ == '__main__':
    main()
# } Driver Code Ends