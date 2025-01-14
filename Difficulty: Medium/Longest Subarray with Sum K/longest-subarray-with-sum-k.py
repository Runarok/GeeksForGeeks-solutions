class Solution:
    def longestSubarray(self, arr, k):  
        prefix_sum = 0
        hashmap = {0: -1}
        max_len = 0
        
        for i, num in enumerate(arr):
            prefix_sum += num
            
            if prefix_sum - k in hashmap:
                max_len = max(max_len, i - hashmap[prefix_sum - k])
            
            if prefix_sum not in hashmap:
                hashmap[prefix_sum] = i
        
        return max_len

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input().strip())
    while tc > 0:
        arr = list(map(int, input().strip().split()))
        k = int(input().strip())
        ob = Solution()
        print(ob.longestSubarray(arr, k))
        tc -= 1
        print("~")
# } Driver Code Ends