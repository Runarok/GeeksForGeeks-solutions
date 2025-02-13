class Solution:
    # Function to find the maximum sum increasing subsequence
    def maxSumSequence(self, n, arr):
        # dp[i] will store the maximum sum of the subsequence ending at index i
        dp = [num for num in arr]
        
        # prev[i] will store the previous index for reconstructing the subsequence
        prev = [-1 for _ in arr]
        
        # stack to track the indices of the maximum sum subsequence
        stack = []
        
        # variable to keep track of the maximum sum found so far
        maxi = arr[0]

        # Traverse through all elements to compute dp values
        for i in range(n):
            for j in range(i + 1, n):
                if arr[j] > arr[i]:  # arr[j] can be added to the subsequence if it's greater than arr[i]
                    if dp[i] + arr[j] > dp[j]:  # update dp[j] if a larger sum is found
                        dp[j] = dp[i] + arr[j]
                        prev[j] = i  # store the previous index for reconstructing subsequence
            
            # Update the stack to store indices with the maximum sum found
            if maxi == dp[i]:
                stack.append(i)
            elif maxi < dp[i]:
                maxi = dp[i]
                stack = [i]  # reset stack if a new larger sum is found

        # Retrieve the minimum index from the stack
        k = min(stack)
        
        # Reconstruct the subsequence by following the prev array
        res = []
        while k >= 0:
            res.append(arr[k])
            k = prev[k]
        
        # Reverse the list to get the subsequence in the correct order
        res.reverse()
        
        return res
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        A = input().split()
        for i in range(N):
            A[i] = int(A[i])
            
        ob = Solution()
        ans = ob.maxSumSequence(N, A)
        for itr in range(len(ans)):
            print(ans[itr],end=" ")
        print()
# } Driver Code Ends