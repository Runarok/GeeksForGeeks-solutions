#User function Template for python3
class Solution:
    def primeDigits(self, n):
        # Prime digits to form the numbers
        prime_digits = ['2', '3', '5', '7']
        
        # Initialize a queue with prime digits
        queue = prime_digits[:]
        
        # Generate numbers until we reach the nth number
        for _ in range(n - 1):
            num = queue.pop(0)  # Take the front of the queue
            for digit in prime_digits:
                queue.append(num + digit)  # Append new numbers formed by adding prime digits
        
        return queue[0]  # The nth number will be the front of the queue

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
if __name__ == '__main__':
    t = int(input())
    for tcs in range(t):
        n = int(input())
        ob = Solution()
        print(ob.primeDigits(n))
        print("~")

# } Driver Code Ends
