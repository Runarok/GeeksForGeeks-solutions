# User function Template for python3
class Solution:
    def minValue(self, arr):
        N = len(arr)
        # Initialize two lists l and r to store the increasing subsequence lengths
        l = [0] * N
        r = [0] * N
        
        # Initialize the first element of l
        l[0] = 1
        
        # Calculate the longest increasing subsequence from left to right
        for i in range(1, N):
            if arr[i] > arr[i-1]:
                l[i] = l[i - 1] + 1
            else:
                l[i] = 1
        
        # Initialize the last element of r
        r[N - 1] = 1
        
        # Calculate the longest increasing subsequence from right to left
        for i in range(N - 2, -1, -1):
            if arr[i] > arr[i + 1]:
                r[i] = r[i + 1] + 1
            else:
                r[i] = 1
        
        # Initialize the answer variable
        ans = 0
        
        # Sum the maximum of corresponding elements from l and r
        for i in range(N):
            ans += max(l[i], r[i])
        
        # Return the final result
        return ans



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):

        arr = input().split()
        N = len(arr)
        for i in range(N):
            arr[i] = int(arr[i])

        ob = Solution()
        print(ob.minValue(arr))
        print("~")
# } Driver Code Ends