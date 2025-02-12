#User function Template for python3

class Solution:
    def totalWays(self, n, capacity):
        # Sort the capacity array to facilitate the calculation
        capacity.sort()

        ans = 1

        mod = 1000000007  # Modulo for large numbers to avoid overflow

        # Multiply the difference between capacity and its index
        for i in range(n):
            ans = ans * (capacity[i] - i) % mod  # Ensure the result stays within the bounds of the mod

        return int(ans % mod)  # Return the result modulo 1000000007

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        n = int(input())
        capacity = list(map(int, input().split()))
        ob = Solution()
        ans = ob.totalWays(n, capacity)
        print(ans)
        print("~")

# } Driver Code Ends