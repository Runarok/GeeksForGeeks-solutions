class Solution:
    def maxTripletProduct(self, arr, n):
        # Initialize variables to store the minimum and maximum values
        min1 = min2 = float('inf')  # Smallest two numbers
        max1 = max2 = max3 = -float('inf')  # Largest three numbers
        
        # Traverse the array to find the required values
        for num in arr:
            # Update the two smallest values
            if num <= min2:
                if num <= min1:
                    min2 = min1
                    min1 = num
                else:
                    min2 = num

            # Update the three largest values
            if num >= max3:
                if num >= max2:
                    if num >= max1:
                        max2, max3 = max1, max2
                        max1 = num
                    else:
                        max3 = max2
                        max2 = num
                else:
                    max3 = num

        # Return the maximum product of the triplet formed from either the three largest numbers
        # or the two smallest numbers with the largest number
        return max(max1 * max2 * max3, min1 * min2 * max1)
#{ 
 # Driver Code Starts
#Initial Template for Python 3

import sys

for _ in range(0,int(input())):
    
    n = int(input())
    arr = list(map(int,input().strip().split()))
    ob=Solution()
    res = ob.maxTripletProduct(arr, n)
    print(res)
    print("~")
# } Driver Code Ends