# User function Template for Python3

class Solution:
    def countPairs(self, arr):
        # Left and right pointers for sliding window approach
        left = 0
        right = 0
        
        # Dictionary to track the last seen index of elements
        last_seen = {}
        
        # Variable to store the count of valid pairs
        pair_count = 0
        
        # Iterate through the array using right pointer
        for right, num in enumerate(arr):
            # If the number was seen before and is not marked as -1
            if num in last_seen and last_seen[num] != -1:
                # Store the previous occurrence of the number
                prev_index = last_seen[num]
                
                # Mark elements from left to the previous occurrence as -1
                for i in range(left, prev_index + 1):
                    last_seen[arr[i]] = -1
                
                # Move the left pointer ahead of the last seen index
                left = prev_index + 1

            # Update the last seen index of the current number
            last_seen[num] = right
            
            # Count valid pairs in the current window
            pair_count += right - left

        return pair_count
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:

        arr = list(map(int, input().strip().split()))
        ob = Solution()
        ans = ob.countPairs(arr)
        print(ans)
        tc -= 1
        print("~")

# } Driver Code Ends