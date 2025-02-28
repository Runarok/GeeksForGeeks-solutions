class Solution:
    def numberOfways(self, arr):
        n = len(arr)
        count = 0
        length = 1  # Length of the current segment of equal elements
        
        for i in range(1, n + 1):
            # If current element is the same as the previous one, increment the length of the segment
            if i < n and arr[i] == arr[i - 1]:
                length += 1
            else:
                # If the segment ends, count the subarrays formed by this segment
                count += (length * (length + 1)) // 2
                length = 1  # Reset the length for the next segment
        
        return count


#{ 
 # Driver Code Starts
#Initial Template for Python 3

for _ in range(0, int(input())):
    arr = list(map(int, input().strip().split()))
    ob = Solution()
    print(ob.numberOfways(arr))

    print("~")

# } Driver Code Ends