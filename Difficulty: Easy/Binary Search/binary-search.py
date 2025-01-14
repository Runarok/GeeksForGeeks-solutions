#User function template for Python

class Solution:
    def binarysearch(self, arr, k):
        left, right = 0, len(arr) - 1
        result = -1
        
        while left <= right:
            mid = left + (right - left) // 2
            
            if arr[mid] == k:
                result = mid  # Update result with current mid index
                right = mid - 1  # Search in the left half to find smaller index
            elif arr[mid] < k:
                left = mid + 1  # Search in the right half
            else:
                right = mid - 1  # Search in the left half
        
        return result  # Return the smallest index of k or -1 if not found
        
#{ 
 # Driver Code Starts
#Initial template for Python

if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        k = int(input())
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.binarysearch(arr, k)
        print(res)
        print("~")

# } Driver Code Ends