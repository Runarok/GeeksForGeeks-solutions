#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

def multiplicationTable(N):
    # Loop from 1 to 10 to print the multiplication table for N
    for multiplier in range(1, 11):
        # Print product of N and current multiplier, separated by space
        print(multiplier * N, end=" ")


#{ 
 # Driver Code Starts.


def main():
    testcases=int(input()) #testcases
    while(testcases>0):
        N = int(input())
        multiplicationTable(N)
        print()
        testcases-=1
        


        print("~")
if __name__=='__main__':
    main()
# } Driver Code Ends