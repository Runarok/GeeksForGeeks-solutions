class Solution:
    def maxProfit(self, m, arr):
        # Filter out only the useless laptops (i.e., negative prices)
        negative_laptops = [x for x in arr if x < 0]
        
        # Sort the negative prices in ascending order (most negative first)
        negative_laptops.sort()
        
        # Calculate the maximum profit by taking the top 'm' most negative values (since they are useless laptops)
        return -sum(negative_laptops[:m])  # Multiply by -1 to convert negative prices into profit

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        k = int(input())
        arr = list(map(int, input().split()))
        ob = Solution()
        print(ob.maxProfit(k, arr))
        print("~")

# } Driver Code Ends