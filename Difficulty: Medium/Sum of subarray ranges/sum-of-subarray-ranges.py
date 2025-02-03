# User function Template for python3
import operator

class Solution:
    
    def subarrayRanges(self, arr):
         n = len(arr)
         
         # Helper function to compute subarray sums based on a comparison operation (less than or greater than)
         def sumSubarray(A, op):
              res = 0
              prev = [-1] * n  # Array to store previous smaller element index for each element
              next = [n] * n   # Array to store next smaller element index for each element
              stack = []  # Stack to track indices while traversing the array
        
              # Traverse through the array to calculate previous and next smaller element indices
              for i, a in enumerate(A):
                while stack and op(A[stack[-1]], a):  # Compare elements based on the operation
                  index = stack.pop()
                  next[index] = i  # Update next smaller element index
                if stack:
                  prev[i] = stack[-1]  # Update previous smaller element index
                stack.append(i)  # Push current index to the stack
        
              # Calculate the sum of subarrays using the previously computed indices
              for i, a in enumerate(A):
                res += a * (i - prev[i]) * (next[i] - i)
        
              return res
        
         # Calculate the difference between subarray sums for less than and greater than operations
         return sumSubarray(arr, operator.lt) - sumSubarray(arr, operator.gt)


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.subarrayRanges(arr)
        print(res)
        t -= 1
        print("~")
# } Driver Code Ends