#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends


# User function Template for python3

# Function to insert an element into the set
# No return value and no print statement
def insert(s, element):
    # Add the element to the set
    s.add(element)

# Function to remove an element from the set
# No return value and no print statement
def remove_from_set(s, element):
    # Remove the element from the set
    s.remove(element)

# Function to find the sum of elements in the set
# Return the sum of elements in the set
def sum_set(s):
    # Calculate the sum of all elements in the set
    total = 0
    for i in s:
        total += i
    return total
 




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