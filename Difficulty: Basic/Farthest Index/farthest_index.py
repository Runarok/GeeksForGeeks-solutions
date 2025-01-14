class Solution:
    def findIndex(self, arr, x):
        # Iterate from the end to find the last occurrence of x
        for i in range(len(arr) - 1, -1, -1):
            if arr[i] == x:
                return i + 1  # Return 1-based index
        return -1
