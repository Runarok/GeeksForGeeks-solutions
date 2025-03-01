#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

def checkOddEven(x):
    # If x is divisible by 2, it is even (return True)
    if x % 2 == 0:
        return True
    else:
        # If not divisible by 2, it is odd (return False)
        return False



#{ 
 # Driver Code Starts.

# Driver Code
def main():
    
    # Testcase input
    testcases = int(input())
    
    # Looping through testcases
    while(testcases > 0):
        x = int(input())
        
        if(checkOddEven(x)):
            print ("Even")
        else:
            print ("Odd")
        
        
        testcases -= 1
        print("~")
 
if __name__ == '__main__':
    main()
# } Driver Code Ends