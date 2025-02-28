#{ 
 # Driver Code Starts


# } Driver Code Ends

#User function Template for python3

def doubleTup(numbers):
    # Create a tuple by doubling each number in the input list
    # The tuple will hold 2 * number for each number in the input list
    return tuple(2 * x for x in numbers)  # Return the resulting tuple



#{ 
 # Driver Code Starts.
if __name__ == '__main__':
    
    t= int(input())
    
    for _ in range(t):
        
        numbers = tuple([int(x) for x in input().strip().split()])
        
        ans = doubleTup(numbers)
        
        if type(ans) != tuple:
            print('your ans is not tuple')
        else:
            print(*ans)
        print("~")
# } Driver Code Ends