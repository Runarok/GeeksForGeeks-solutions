class Solution:
    def sortArr(self, arr):
        # Sort the array in ascending order and return the sorted list
        arr.sort()
        return arr

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        arr = list(map(int, input().strip().split()))
        obj = Solution()
        obj.sortArr(arr)
        for i in arr:
            print(i, end=" ")
        print()
        print("~")

# } Driver Code Ends
