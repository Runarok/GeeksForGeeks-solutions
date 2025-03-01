#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3
def alphabets(c1, c2):
    # Generate and print alphabets from c1 to c2 without a new line after printing
    print(" ".join(chr(c) for c in range(ord(c1), ord(c2) + 1)), end="")


#{ 
 # Driver Code Starts.

if __name__ == '__main__':
    t=int(input())
    for _ in range(t):
        
        c1 = input()
        c2 = input()
        
        alphabets(c1,c2)
        print() #This provides new line
        print("~")
# } Driver Code Ends