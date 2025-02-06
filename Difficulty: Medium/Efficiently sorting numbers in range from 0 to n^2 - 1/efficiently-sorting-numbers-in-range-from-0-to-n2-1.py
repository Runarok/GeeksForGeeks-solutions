# User function template for Python3

class Solution:

    # Function to sort the array
    def sort(self, arr, n):
        # Use Python's built-in sort method to sort the array
        arr.sort()
        return arr

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        N = int(input())
        arr = [int(x) for x in input().split()]

        solObj = Solution()

        solObj.sort(arr, N)
        for i in arr:
            print(i,end=" ")
        print()

# } Driver Code Ends