#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

n = int(input())

# Your code here
def is_prime(n):
    if n<2:
        return False
    for i in range(2,int(n**0.5)+1):
        if n%i==0:
            return False
            break
    return True
n=n+1   
while not is_prime(n):
    n+=1
print(n)


#{ 
 # Driver Code Starts.

# } Driver Code Ends