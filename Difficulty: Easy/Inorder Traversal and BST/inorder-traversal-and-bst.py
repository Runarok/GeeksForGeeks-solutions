class Solution:
    def isRepresentingBST(self, arr, N):
        # If there is only one element, it's trivially a BST
        if N == 1:
            return 1
        else:
            # Check if each element is smaller than the next
            for i in range(N - 1):
                if arr[i] > arr[i + 1]:
                    return 0
            return 1

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range (t):
        N = int(input())
        arr = input().split()
        for itr in range(N):
            arr[itr] = int(arr[itr])
        
        ob = Solution()
        print(ob.isRepresentingBST(arr, N))
        print("~")
# } Driver Code Ends