#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

class Solution:
    def altProduct(self, arr):
        # Sort the array
        arr.sort()
        n = len(arr)
        total_sum = 0
        
        # Calculate the sum of products
        for i in range(n // 2):
            total_sum += arr[i] * arr[n - 1 - i]
        
        return total_sum
        

#{ 
 # Driver Code Starts.
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.altProduct(arr)
        print(res)
        # print("~")
        t -= 1


# } Driver Code Ends