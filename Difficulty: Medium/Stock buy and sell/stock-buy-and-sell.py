#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function template for Python

class Solution:
    # Function to find the days of buying and selling stock for max profit.
    def stockBuySell(self, arr):
        n = len(arr)
        profit = 0
        for i in range(1, n):
            # If the current day's price is greater than the previous day's price, 
            # we make a profit by buying on the previous day and selling on the current day.
            if arr[i] > arr[i - 1]:
                profit += arr[i] - arr[i - 1]
        
        return profit


#{ 
 # Driver Code Starts.
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.stockBuySell(arr)
        print(res)
        print("~")
        t -= 1


# } Driver Code Ends