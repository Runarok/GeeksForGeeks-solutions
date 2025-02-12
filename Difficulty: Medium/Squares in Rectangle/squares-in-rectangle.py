class Solution:
    def minSquares(self, L, B):
        # Ensure L is the smaller side by swapping if necessary
        if L > B:
            L, B = B, L  # Swapping L and B

        # If B is a multiple of L, the answer is B divided by L
        if B % L == 0:
            return (B // L) % 1000000007
        else:
            r = B % L  # Remainder when B is divided by L
            sum = B // L  # Initial sum of how many L-sized squares fit into B
            while r != 0:  # Continue dividing the remainder
                sum += L // r  # Add how many r-sized squares fit into L
                B, L = L, r  # Update B and L for next iteration
                r = B % L  # Calculate the new remainder
            return sum % 1000000007  # Return the result modulo 1000000007
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        L, B = [int(x) for x in input().split()]
        
        ob = Solution()
        print(ob.minSquares(L, B))
# } Driver Code Ends