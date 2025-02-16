#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

def listTraversal(arr):
    # Iterating through the list and printing each element with a space separator
    for element in arr:
        print(element, end=" ")
    
    # Ensuring no newline character is added at the end


#{ 
 # Driver Code Starts.


def main():
    t=int(input())
    
    while(t>0):
        
        arr=[int(x) for x in input().strip().split()]
        
        listTraversal(arr)
        print() #Newline by the driver code
        t-=1

        print("~")
if __name__ == "__main__": 
    main()
# } Driver Code Ends