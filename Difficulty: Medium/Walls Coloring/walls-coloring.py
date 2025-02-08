class Solution():
    def minCost(self, colors, N):
        # Dictionary to store the results of subproblems for memoization
        memo = {}
        return self.solve(colors, N, 0, -1, memo)

    def solve(self, colors, N, houseIndex, prevColor, memo):
        # Base case: If all houses are painted, return 0 cost
        if houseIndex == N:
            return 0

        # Check if the result is already computed
        if (houseIndex, prevColor) in memo:
            return memo[(houseIndex, prevColor)]

        minCost = float('inf')

        # Try all color choices for the current house (1, 2, 3)
        for colorChoice in range(1, 4):
            if colorChoice != prevColor:  # Ensuring no two adjacent houses have the same color
                cost = colors[houseIndex][colorChoice - 1] + self.solve(colors, N, houseIndex + 1, colorChoice, memo)
                minCost = min(minCost, cost)

        # Store the computed result in memoization dictionary
        memo[(houseIndex, prevColor)] = minCost
        return minCost

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ =="__main__":
    for _ in range(int(input())):
        n = int(input())
        colors = []
        for i in range(n):
            tmp = [int(i) for i in input().split()]
            colors.append(tmp)
        print(Solution().minCost(colors, n))
        print("~")
# } Driver Code Ends