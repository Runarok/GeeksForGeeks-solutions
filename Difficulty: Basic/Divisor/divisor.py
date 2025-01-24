#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3
n = int(input())

# List to store divisors
divisors = []

# Iterate from 1 to sqrt(n)
for i in range(1, int(n**0.5) + 1):
    if n % i == 0:  # Check if i is a divisor
        divisors.append(i)  # Add i to divisors list
        if i != n // i:  # To avoid adding the square root twice when n is a perfect square
            divisors.append(n // i)

# Sort the divisors and print them
divisors.sort()
print(" ".join(map(str, divisors)))


#{ 
 # Driver Code Starts.

# } Driver Code Ends