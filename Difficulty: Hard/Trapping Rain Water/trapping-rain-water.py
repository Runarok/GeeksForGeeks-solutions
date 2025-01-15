class Solution:
    def maxWater(self, arr):
        n = len(arr)
        if n <= 2:
            return 0  # No water can be trapped if there are less than 3 blocks
        
        # Step 1: Compute max_height_left
        max_left = [0] * n
        max_left[0] = arr[0]
        for i in range(1, n):
            max_left[i] = max(max_left[i-1], arr[i])

        # Step 2: Compute max_height_right
        max_right = [0] * n
        max_right[n-1] = arr[n-1]
        for i in range(n-2, -1, -1):
            max_right[i] = max(max_right[i+1], arr[i])

        # Step 3: Calculate total water trapped
        total_water = 0
        for i in range(n):
            water_at_i = min(max_left[i], max_right[i]) - arr[i]
            if water_at_i > 0:
                total_water += water_at_i

        return total_water


#{ 
 # Driver Code Starts
#Initial template for Python 3

import math


def main():
    t = int(input())
    while (t > 0):

        arr = [int(x) for x in input().strip().split()]
        obj = Solution()
        print(obj.maxWater(arr))

        t -= 1
        print("~")


if __name__ == "__main__":
    main()

# } Driver Code Ends