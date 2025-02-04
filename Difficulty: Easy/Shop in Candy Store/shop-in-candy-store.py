# User function Template for Python3

class Solution:
    def candyStore(self, candies, N, K):
        # Sort the candies' price in ascending order
        candies.sort()
        
        # Variables to store the minimum and maximum amount spent
        min_amount = 0
        max_amount = 0
        
        # Pointers for calculating minimum amount
        start = 0
        end = N - 1
        
        # Calculate the minimum cost
        while start <= end:
            min_amount += candies[start]  # Buy the cheapest available candy
            start += 1  # Move to the next cheapest candy
            end -= K  # Skip K most expensive candies
        
        # Pointers for calculating maximum amount
        i = N - 1  # Start from the most expensive candy
        j = 0  # Pointer to track free candies
        
        # Calculate the maximum cost
        while i >= j:
            max_amount += candies[i]  # Buy the most expensive available candy
            i -= 1  # Move to the next most expensive candy
            j += K  # Skip K cheapest candies
        
        # Return the minimum and maximum amount spent
        return [min_amount, max_amount]


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):

        N,K = [int(x) for x in input().split()]
        candies = [int(x) for x in input().split()]

        solObj = Solution()

        print(*solObj.candyStore(candies,N,K))
        print("~")
# } Driver Code Ends