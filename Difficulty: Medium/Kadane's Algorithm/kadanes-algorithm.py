#User function Template for python3

class Solution:
    def maxSubArraySum(self, arr):
        # Initialize the variables for the maximum sum so far and the current sum
        max_sum = arr[0]
        current_sum = arr[0]
        
        for i in range(1, len(arr)):
            # Update the current sum to include the current element
            current_sum = max(arr[i], current_sum + arr[i])
            
            # Update the maximum sum encountered so far
            max_sum = max(max_sum, current_sum)
        
        return max_sum

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math


def main():
    T = int(input())
    while (T > 0):

        arr = [int(x) for x in input().strip().split()]

        ob = Solution()

        print(ob.maxSubArraySum(arr))

        T -= 1


if __name__ == "__main__":
    main()

# } Driver Code Ends
