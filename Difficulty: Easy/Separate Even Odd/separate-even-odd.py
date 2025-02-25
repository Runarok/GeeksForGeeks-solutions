#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for Python3

def evenOdd(arr):
    # Lists to store even and odd numbers separately
    even = []
    odd = []
    
    # Iterate through the array and classify numbers as even or odd
    for num in arr:
        if num % 2 == 0:
            even.append(num)  # Append even numbers to the even list
        else:
            odd.append(num)   # Append odd numbers to the odd list

    # Return a tuple containing both lists
    return (even, odd)

#{ 
 # Driver Code Starts.

if __name__ == '__main__':
    
    t= int(input())
    
    for _ in range(t):
        
        numbers = numbers=[int(x) for x in input().strip().split()]

        
        even,odd = evenOdd(numbers)
        
        print(*even)
        print(*odd)
        print("~")
# } Driver Code Ends