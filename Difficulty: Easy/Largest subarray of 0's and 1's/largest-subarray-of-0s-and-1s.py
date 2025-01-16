class Solution:
    def maxLen(self, arr):
        n = len(arr)
        hash_map = {}  # To store the first occurrence of a cumulative sum
        max_len = 0
        cum_sum = 0
        
        for i in range(n):
            # Treat 0 as -1 for cumulative sum to track equal 0s and 1s
            cum_sum += 1 if arr[i] == 1 else -1
            
            if cum_sum == 0:
                max_len = i + 1  # If sum is zero, subarray from 0 to i has equal 0s and 1s
            
            if cum_sum in hash_map:
                max_len = max(max_len, i - hash_map[cum_sum])
            else:
                hash_map[cum_sum] = i  # Store the first occurrence of this sum
        
        return max_len


#{ 
 # Driver Code Starts
#Initial Template for Python 3

t = int(input())
for _ in range(0, t):
    a = list(map(int, input().split()))
    s = Solution().maxLen(a)
    print(s)

# } Driver Code Ends