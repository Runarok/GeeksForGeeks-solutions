#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

#User function Template for python3

# Function to return the string as it is (no trimming performed)
def trim(str):
    return str

# Function to find the index of the first occurrence of substring 'x' in 'str'
# Returns -1 if 'x' is not found
def exists(str, x):
    return str.find(x)

# Function to convert the first character of each word to uppercase
def titleIt(str):
    return str.title()

# Function to swap the case of each character in the string
def casesSwap(str):
    return str.swapcase()


#{ 
 # Driver Code Starts.




def main():
    testcases = int(input()) #testcases
    while(testcases>0):
        str = input()
        x = input()
        str = trim(str)
        print(str)
        print(exists(str, x))
        print(titleIt(str))
        print(casesSwap(str))
        testcases -= 1
        


        print("~")
if __name__=='__main__':
    main()
# } Driver Code Ends