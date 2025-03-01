import math

# Function to check if the given pair (a, b) satisfies the condition
def check(a, b):
    return (b * b - 1) % a == 0 and (a * a - 1) % b == 0

class Solution:
    def countPairs(self, n):
        count = 0
        
        # Iterate through numbers from 2 to n
        for k in range(2, n + 1):
            a, b = 1, k  # Initialize a and b
            
            # Keep checking pairs until b exceeds n
            while b <= n:
                if check(a, b):
                    count += 1  # Increment the count if the pair satisfies the condition
                    a, b = b, (b * b - 1) // a  # Update a and b as per the formula
                else:
                    break  # Break the loop if the condition is not satisfied
        return count

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
        
if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N=int(input())
        ob=Solution()
        ans=ob.countPairs(N)
        print(ans) 
        print("~")
# } Driver Code Ends