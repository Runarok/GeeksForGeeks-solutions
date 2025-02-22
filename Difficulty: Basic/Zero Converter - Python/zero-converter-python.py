#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

# Function to print numbers in decreasing order from n-1 to 0
def pos(n):
    while(n > 0):  # Continue while n is greater than 0
        print(n - 1, end=" ")  # Print n-1
        n = n - 1  # Decrease n by 1

# Function to print numbers in increasing order from n to 0
def neg(n):
    while (n <= 0):  # Continue while n is less than or equal to 0
        print(n, end=" ")  # Print n
        n += 1  # Increase n by 1

#{ 
 # Driver Code Starts.


def main():
    testcases=int(input()) #testcases
    while(testcases>0):
        n = int(input())
        if(n > 0):
            pos(n)
        elif(n < 0):
            neg(n)
        else:
            print("already Zero",end="")
        print()
        testcases-=1
        


        print("~")
if __name__=='__main__':
    main()
# } Driver Code Ends