#User function Template for python3

class Solution:
    def searchInSorted(self, arr, k):
        low, high = 0, len(arr) - 1
        
        # Perform binary search
        while low <= high:
            mid = (low + high) // 2  # Find the middle index
            
            # Check if the element at the middle index is equal to k
            if arr[mid] == k:
                return True
            # If k is smaller, ignore the right half
            elif arr[mid] > k:
                high = mid - 1
            # If k is larger, ignore the left half
            else:
                low = mid + 1
        
        # If we reach here, it means k was not found
        return False

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
if __name__ == '__main__':
    t = int(input())
    for _ in range(t):

        A = [int(x) for x in input().strip().split()]
        k = int(input())
        ob = Solution()
        print("true" if ob.searchInSorted(A, k) else "false")
        print("~")

# } Driver Code Ends