#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

def returnValueFunction(n):
    # The function takes an integer 'n' as input and returns its double.
    return n * 2



#{ 
 # Driver Code Starts.


def main():
    t=int(input())
    while(t>0):
        n=int(input())
        print(returnValueFunction(n))
        t-=1
        print("~")

if __name__ == "__main__": 
    main()
# } Driver Code Ends