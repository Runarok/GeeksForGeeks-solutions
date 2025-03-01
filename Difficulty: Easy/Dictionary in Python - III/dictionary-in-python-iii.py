#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Function to insert a key-value pair into the dictionary
def insert_dict(query, dict):
    # Extract the key and value from the query
    key, value = query[1], query[2]
    # Insert the key-value pair into the dictionary
    dict[key] = value

# Function to delete a key-value pair from the dictionary
def del_dict(query, dict):
    # Extract the key from the query
    key = query[1]
    # Check if the key exists in the dictionary
    if key in dict:
        del dict[key]  # Delete the key-value pair
        return True  # Return True indicating successful deletion
    return False  # Return False if the key was not found

# Function to print the marks of the required name from the dictionary
def print_dict(key, dict):
    # Check if the key exists in the dictionary
    if key in dict:
        # Print the marks for the given name
        print("Marks of " + key + " is " + dict[key])
        return True  # Return True indicating the key was found and printed
    return False  # Return False if the key was not found



#{ 
 # Driver Code Starts.
# Driver code
def main():
    # testcase input
    testcase = int(input())
    
    # looping through testcases
    while(testcase > 0):
        
        N = int(input())
        
        i = 0
        dict = {}
        while i < N:
            flag = False
            delete = False
            query = input().split()
            if(query[0] == 'i'):
                insert_dict(query, dict)
                print ("Inserted")
            
            if(query[0] == 'd'):
                if del_dict(query, dict) is False:
                    print ("-1")
                else:
                    print ("Deleted")
            
            if(query[0] == 'p'):
                if(print_dict(query[1], dict) is False):
                    print ("-1")
                    
            i+=1
            
        testcase -= 1


        print("~")
if __name__ == '__main__':
    main()
# } Driver Code Ends