# User function Template for python3

class Solution:
    def KthMissingElement(self, arr, k):
        # Initialize the starting point and missing count
        missing_count = 0
        n = len(arr)
        
        for i in range(1, n):
            # Count missing numbers between consecutive elements
            missing_between = arr[i] - arr[i - 1] - 1
            if missing_count + missing_between >= k:
                return arr[i - 1] + k - missing_count
            missing_count += missing_between
        
        # If k-th missing number is not found
        return -1



#{ 
 # Driver Code Starts
#Initial Template for Python 3
#Position this line where user code will be pasted.
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        k = int(input())
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.KthMissingElement(arr, k)
        print(res)
        print("~")
        t -= 1

# } Driver Code Ends