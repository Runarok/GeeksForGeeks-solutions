#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for Python3

def utility(s):
    # Loop through the string, taking every second character
    for i in range(0, len(s), 2):
        # Print the character without a newline after each print
        print(s[i], end='')


#{ 
 # Driver Code Starts.



def main():
    testcases=int(input()) #testcases
    while(testcases>0):
        s=input().strip()
        utility(s)
        print()##separating testcases outputs by newlines
        testcases-=1
        


        print("~")
if __name__=='__main__':
    main()
# } Driver Code Ends