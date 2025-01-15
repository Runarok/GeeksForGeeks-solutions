class Solution:

    def maxProduct(self, arr):
        max_prod = min_prod = result = arr[0]
        
        for i in range(1, len(arr)):
            if arr[i] < 0:
                max_prod, min_prod = min_prod, max_prod

            max_prod = max(arr[i], max_prod * arr[i])
            min_prod = min(arr[i], min_prod * arr[i])

            result = max(result, max_prod)
        
        return result

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        arr = list(map(int, input().strip().split()))
        ob = Solution()
        ans = ob.maxProduct(arr)
        print(ans)
        tc -= 1

# } Driver Code Ends