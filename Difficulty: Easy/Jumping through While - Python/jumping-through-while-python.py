#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Function to print x in increasing order of squares
def printIncreasingPower(x):
    c = 1
    # Loop to print squares of numbers while the square is <= x
    while (c ** 2) <= x:
        print(c ** 2, end=" ")  # Print the square of c
        c += 1  # Increment c to check the next square



#{ 
 # Driver Code Starts.
# Driver Code
def main():
    
    # Testcase input
    testcases = int(input())
    
    # Looping through testcases
    while(testcases > 0):
        x = int(input())
        
        printIncreasingPower(x);
        print ()
        
        
        testcases -= 1
        print("~")
 
if __name__ == '__main__':
    main()
# } Driver Code Ends