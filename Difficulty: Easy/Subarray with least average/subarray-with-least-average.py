# User function Template for python3

class Solution:
    def least_average(self, nums, k):
        # Initialize the sum of the first window of size k
        current_sum = sum(nums[:k])
        
        # Initialize minimum sum and starting index of minimum sum window
        min_sum = current_sum
        start_index = 0
        
        # Use sliding window to compute sums of all windows of size k
        for i in range(k, len(nums)):
            # Slide the window by removing the first element and adding the next
            current_sum += nums[i] - nums[i - k]
            
            # Update minimum sum and its starting index if a smaller sum is found
            if current_sum < min_sum:
                min_sum = current_sum
                start_index = i - k + 1
        
        # Return 1-based index of the starting position of the minimum average subarray
        return start_index + 1

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n, k = input().split()
		n = int(n); k = int(k);
		nums = list(map(int,input().split()))
		ob = Solution()
		ans = ob.least_average(nums, k)
		print(ans)
# } Driver Code Ends