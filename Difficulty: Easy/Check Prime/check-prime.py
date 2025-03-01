#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

def prime(n):
    # Check if n is less than 2, as numbers less than 2 are not prime
    if n < 2:
        return False

    # Loop through all numbers from 2 to n-1
    for i in range(2, n):
        # If n is divisible by any of these numbers, it's not prime
        if n % i == 0:
            return False
    
    # If no divisor is found, n is prime
    return True



#{ 
 # Driver Code Starts.

if __name__ == '__main__':
    t=int(input())
    for _ in range(t):
        n=int(input())
        
        ans = prime(n)
        print(ans)
        print("~")
# } Driver Code Ends