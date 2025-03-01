#{ 
 # Driver Code Starts
#Initial Template for Python 3






import re

# } Driver Code Ends

# User function Template for python3

import re  # Importing regular expression module

def validate(str):
    pat = "asdsab@!@234"  # Define the pattern to search for
    match = re.search(pat, str)  # Search for the pattern in the string
    if match:
        return True  # Return True if pattern is found
    else:
        return False  # Return False if pattern is not found



#{ 
 # Driver Code Starts.

def main():
    testcases = int(input()) #testcases
    while(testcases > 0):
        str = input()
        print(validate(str))
        testcases -= 1
        


        print("~")
if __name__=='__main__':
    main()
# } Driver Code Ends