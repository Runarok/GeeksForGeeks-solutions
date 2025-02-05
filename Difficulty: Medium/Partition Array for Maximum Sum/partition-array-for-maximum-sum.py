# User function Template for python3
import sys
sys.setrecursionlimit(10**6)

class Solution:
    # Recursive helper function to find the maximum score starting from index 'i'
    def find(self, i, n, k, arr, dp):
        # Base case: if the index i exceeds the array length, return 0
        if i >= n:
            return 0
        
        # If the result for this index is already computed, return it
        if dp[i] != -1:
            return dp[i]
        
        maxval = float("-inf")  # Variable to store the maximum value for the current subarray
        maxi = float("-inf")    # Variable to store the best score found so far
        l = 0  # Variable to track the length of the current subarray
        
        # Loop through the next k elements to find the best combination of subarrays
        for j in range(k):
            if i + j < n:
                # Update the maximum value in the current subarray
                maxval = max(maxval, arr[i + j])
                l += 1
                # Recursively calculate the score for this subarray
                ans = l * maxval + self.find(i + j + 1, n, k, arr, dp)
                maxi = max(maxi, ans)  # Update the best score found
        
        # Store the result in the dp array and return the best score
        dp[i] = maxi
        return maxi

    # Main function to solve the problem
    def solve(self, n, k, arr):
        # Initialize the dp array with -1 (indicating that the value is not yet calculated)
        dp = [-1] * n
        # Call the recursive function starting from index 0
        return self.find(0, n, k, arr, dp)


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n,k=input().split()
        n=int(n)
        k=int(k)
        arr= list(map(int, input().split()))
        ob = Solution()
        print(ob.solve(n, k, arr))
        print("~")
# } Driver Code Ends