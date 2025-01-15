#User function Template for python3

class Solution:
    def search(self, arr, key):
        left, right = 0, len(arr) - 1
        
        while left <= right:
            mid = (left + right) // 2
            
            # Check if the mid element is the key
            if arr[mid] == key:
                return mid
            
            # Determine which side is sorted
            if arr[left] <= arr[mid]:
                # Left half is sorted
                if arr[left] <= key < arr[mid]:
                    right = mid - 1  # Search in the left half
                else:
                    left = mid + 1  # Search in the right half
            else:
                # Right half is sorted
                if arr[mid] < key <= arr[right]:
                    left = mid + 1  # Search in the right half
                else:
                    right = mid - 1  # Search in the left half
        
        # If the key is not found
        return -1



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())

    for _ in range(t):
        A = list(map(int, input().strip().split()))
        k = int(input())
        ob = Solution()
        print(ob.search(A, k))
        print("~")

# } Driver Code Ends