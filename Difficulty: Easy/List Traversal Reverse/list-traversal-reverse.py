#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3
def listTraversalReverse(arr):
    # Loop through the array in reverse order and print each element
    for i in arr[::-1]:
        print(i, end=" ")



#{ 
 # Driver Code Starts.

def main():
    t=int(input())
    
    while(t>0):
        
        numbers=[int(x) for x in input().strip().split()]
        
        listTraversalReverse(numbers)
        print() #New line
        t-=1

        print("~")
if __name__ == "__main__": 
    main()
# } Driver Code Ends