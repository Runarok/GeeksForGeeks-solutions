#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
# Your task is to complete this function

class Solution:
    # Function to return maximum sum subarray by removing at most one element.
    def maxSumSubarray(self, arr):
        n = len(arr)
        
        # Arrays to store maximum subarray sum ending at each index (forward) and starting at each index (backward)
        forward_max_sum = [0] * n
        backward_max_sum = [0] * n
        
        # Kadane’s algorithm for maximum subarray sum (forward direction)
        max_so_far = arr[0]
        current_max = arr[0]
        forward_max_sum[0] = arr[0]
        
        for i in range(1, n):
            current_max = max(arr[i], forward_max_sum[i - 1] + arr[i])
            max_so_far = max(current_max, max_so_far)
            forward_max_sum[i] = current_max
            
        # Kadane’s algorithm for maximum subarray sum (backward direction)
        current_max = arr[n - 1]
        backward_max_sum[n - 1] = arr[n - 1]
        max_so_far = arr[n - 1]
        
        for i in range(n - 2, -1, -1):
            current_max = max(arr[i], backward_max_sum[i + 1] + arr[i])
            max_so_far = max(current_max, max_so_far)
            backward_max_sum[i] = current_max
            
        # Initialize the final answer with the maximum subarray sum without deletion
        max_final_sum = max_so_far
        
        # Check if removing an element improves the result
        for i in range(1, n - 1):
            max_final_sum = max(max_final_sum, forward_max_sum[i - 1] + backward_max_sum[i + 1])
            
        return max_final_sum


#{ 
 # Driver Code Starts.
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.maxSumSubarray(arr)
        print(res)
        print("~")
        t -= 1


# } Driver Code Ends