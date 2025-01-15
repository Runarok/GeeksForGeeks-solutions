#User function Template for python3

class Solution:
    def rotate(self, arr):
        # Check if the array is not empty and has more than one element
        if len(arr) > 1:
            # Store the last element
            last_element = arr[-1]
            # Shift elements from index 0 to n-2 to the right by one position
            for i in range(len(arr) - 1, 0, -1):
                arr[i] = arr[i - 1]
            # Set the first element to the last element
            arr[0] = last_element
        return arr

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        ob.rotate(arr)
        print(" ".join(map(str, arr)))
        print("~")
        t -= 1

# } Driver Code Ends