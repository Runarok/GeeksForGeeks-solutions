#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends


#User function Template for python3

# Function to insert element into the set
# This function directly modifies the provided set by adding the specified element
# No return statement or print statement is expected
def insert(input_set, element_to_insert):
    input_set.add(element_to_insert)  # Add the given element to the set

# Function to remove element from the set (without raising KeyError if element is absent)
# This function directly modifies the provided set by removing the specified element if present
# No return statement or print statement is expected
def remove_from_set(input_set, element_to_remove):
    input_set.discard(element_to_remove)  # Safely remove element if it exists in the set

# Function to compute and return the sum of all elements present in the set
def sum_set(input_set):
    return sum(input_set)  # Calculate and return the sum of set elements

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