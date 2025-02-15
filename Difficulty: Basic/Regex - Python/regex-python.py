#{ 
 # Driver Code Starts
#Initial Template for Python 3


import re ##import re module to use regex

# } Driver Code Ends

# Back-end complete function Template for Python 3

import re

def numberMatcher(input_string):
    # Regular expression pattern to match numbers
    pattern = r"(\d+)"
    
    # Finding all occurrences of numbers in the input string
    matches = re.findall(pattern, input_string)
    
    # If matches are found, print them space-separated; otherwise, print -1
    if matches:
        for number in matches:
            print(number, end=" ")
    else:
        print(-1, end="")



#{ 
 # Driver Code Starts.

def main():
    testcases = int(input()) #testcases
    while(testcases > 0):
        str = input()
        numberMatcher(str)
        print()
        testcases -= 1
        


        print("~")
if __name__=='__main__':
    main()
# } Driver Code Ends