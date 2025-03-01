#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Function to join given strings in a specific pattern:
# Shorter string comes first, then the longer string, followed by the shorter string again
def combo_string(a, b):
    # Check which string is shorter
    if len(a) > len(b):
        # If 'a' is longer, format as: b + a + b
        return b + a + b
    else:
        # If 'b' is longer (or they are equal), format as: a + b + a
        return a + b + a



#{ 
 # Driver Code Starts.
# Driver Code
def main():
    # 
    testcases = int(input())
    
    while(testcases > 0):
        string = input().split()
        string1 = string[0]
        string2 = string[1]
        
        testcases -= 1
        
        print (combo_string(string1, string2))

        print("~")
if __name__ == '__main__':
    main()
# } Driver Code Ends