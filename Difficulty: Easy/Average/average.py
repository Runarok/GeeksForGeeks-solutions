#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

def nonNegativeAverage(arr):
    # Filter out the negative numbers from the list
    arr = [x for x in arr if x >= 0]
    
    # Calculate and return the average of the remaining non-negative numbers
    return sum(arr) / len(arr) if arr else 0  # To avoid division by zero if the list is empty



#{ 
 # Driver Code Starts.

if __name__ == '__main__':
    
    t= int(input())
    
    for _ in range(t):
        
        numbers = numbers=[int(x) for x in input().strip().split()]
        
        avg = nonNegativeAverage(numbers)
        avg = (int)(avg*100)/100.0
        print ('%.2f'%avg)
        print("~")
# } Driver Code Ends