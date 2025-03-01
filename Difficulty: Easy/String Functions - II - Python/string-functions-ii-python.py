#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Function to check if string 
# starts and ends with 'gfg'
def gfg(S):
    # Convert string to lowercase for case insensitive comparison
    b = S.lower()
    
    # Check if the string starts and ends with 'gfg'
    if(b.endswith("gfg") and b.startswith("gfg")):  
        print("Yes")
    else:
        print("No")



#{ 
 # Driver Code Starts.
# Driver Code
def main():
    # testcase input
    testcases = int(input())
    
    # looping through testcases
    while(testcases > 0):
        S = input()
        
        testcases -= 1
        
        gfg(S)

        print("~")
if __name__ == '__main__':
    main()
# } Driver Code Ends