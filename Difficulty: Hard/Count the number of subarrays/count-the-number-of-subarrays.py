#User function Template for python3
class Solution:
    def countSubarray(self, N, A, L, R):
        # Helper function to count subarrays with sum <= target
        def countSubarraysWithSumLessThanOrEqualTo(target):
            prefix_sum = 0  # Stores the sum of the current subarray
            count = 0  # Stores the count of valid subarrays
            left = 0  # Left pointer of the sliding window
            
            # Iterate over the array with the right pointer
            for right in range(N):
                prefix_sum += A[right]  # Expand the window by adding the current element
                
                # Shrink the window from the left if the sum exceeds the target
                while prefix_sum > target:
                    prefix_sum -= A[left]  # Remove the leftmost element
                    left += 1  # Move the left pointer to the right
                
                # The number of valid subarrays ending at index `right`
                count += (right - left + 1)
            
            return count
        
        # Count subarrays with sum ≤ R and subtract those with sum < L
        return countSubarraysWithSumLessThanOrEqualTo(R) - countSubarraysWithSumLessThanOrEqualTo(L - 1)

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        N,L,R = map(int,input().strip().split())
        A = list(map(int, input().strip().split()))
        ob = Solution()
        ans = ob.countSubarray(N, A, L, R)
        print(ans)

        print("~")
# } Driver Code Ends