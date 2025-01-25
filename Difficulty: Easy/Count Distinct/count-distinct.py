#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

def countDistinct(arr):
    # Convert the list to a set to remove duplicates and return the length of the set
    return len(set(arr))


#{ 
 # Driver Code Starts.

if __name__ == '__main__':
    
    t= int(input())
    
    for _ in range(t):
        
        numbers = numbers=[int(x) for x in input().strip().split()]

        
        ans = countDistinct(numbers)
        print(ans)
        print("~")
# } Driver Code Ends