# User function Template for python3

class Solution:
    # Function to find equilibrium point in the array.
    def findEquilibrium(self, arr):
        # Calculate total sum of the array
        total_sum = sum(arr)
        
        # Initialize left sum to 0
        left_sum = 0
        
        # Iterate through the array to find the equilibrium point
        for i in range(len(arr)):
            # Update the total sum by subtracting the current element
            total_sum -= arr[i]
            
            # Check if the left sum equals the right sum
            if left_sum == total_sum:
                return i  # Equilibrium point found at index i
            
            # Update the left sum for the next iteration
            left_sum += arr[i]
        
        # If no equilibrium point is found, return -1
        return -1


#{ 
 # Driver Code Starts
#Initial Template for Python 3
import math


def main():
    T = int(input())
    while (T > 0):

        arr = [int(x) for x in input().strip().split()]

        ob = Solution()

        print(ob.findEquilibrium(arr))
        print("~")
        T -= 1


if __name__ == "__main__":
    main()

# } Driver Code Ends