#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

def decrementList(arr):
    # Decrement each element by 1
    arr = [x - 1 for x in arr]
    
    # Return the updated list
    return arr


#{ 
 # Driver Code Starts.

def main():
    t=int(input())
    
    while(t>0):
        
        numbers=[int(x) for x in input().strip().split()]
        
        for x in (decrementList(numbers)):
            print(x,end=" ")
        print()
        t-=1

        print("~")
if __name__ == "__main__": 
    main()
# } Driver Code Ends