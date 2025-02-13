# User function Template for python3

class Solution:
    # Function for finding maximum AND value.
    def maxAND(self, arr, n):
        max_pattern = 0  # Variable to store the maximum AND result
        result = 0  # Final answer

        # Iterate from the most significant bit to the least significant bit
        for bit_position in range(17, -1, -1):
            count = 0  # Counter to track how many numbers match the pattern
            
            # Check for numbers that match the previous pattern and have the current bit set
            for j in range(n):
                if (max_pattern & arr[j]) == max_pattern and arr[j] & (1 << bit_position):
                    count += 1
                if count >= 2:  # Stop early if at least two numbers satisfy the condition
                    break
            
            # If at least two numbers have the current bit set, update the result
            if count >= 2:
                result += (1 << bit_position)
                max_pattern += (1 << bit_position)  # Update pattern for the next iteration

        return result
#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math


def main():
    
    T=int(input())
    
    while(T>0):
        
        
        n=int(input())
        
        arr=[int(x) for x in input().strip().split()]
        obj = Solution()
        print(obj.maxAND(arr,n))
        T-=1

        print("~")
if __name__=="__main__":
    main()
# } Driver Code Ends