class Solution:
    def solve(self, matrix, startRow, startCol, endRow, endCol, dp):
        n = len(matrix)  # Number of rows in the matrix
        m = len(matrix[0])  # Number of columns in the matrix

        # Check for base conditions to return 0:
        # Out of bounds, invalid coordinates, or characters don't match
        if (startRow >= n or startCol >= m or endRow < 0 or endCol < 0 or 
                startRow > endRow or startCol > endCol or matrix[startRow][startCol] != matrix[endRow][endCol]):
            return 0
        
        # If we have reached the end conditions (adjacent or the same cell), it's a valid palindromic path
        if (startRow == endRow and startCol == endCol) or (startRow == endRow and startCol + 1 == endCol) or \
                (startCol == endCol and startRow + 1 == endRow):
            return 1
        
        # Use dynamic programming to store previously computed subproblems
        x = startRow * n + startCol
        y = endRow * n + endCol
        
        if x in dp and y in dp[x]:
            return dp[x][y]
        
        ans = 0
        # Recursive calls for four possible directions
        ans = (ans + self.solve(matrix, startRow + 1, startCol, endRow - 1, endCol, dp)) % self.M
        ans = (ans + self.solve(matrix, startRow + 1, startCol, endRow, endCol - 1, dp)) % self.M
        ans = (ans + self.solve(matrix, startRow, startCol + 1, endRow - 1, endCol, dp)) % self.M
        ans = (ans + self.solve(matrix, startRow, startCol + 1, endRow, endCol - 1, dp)) % self.M
        
        # Memoize the result
        if x not in dp:
            dp[x] = {}
        if y not in dp[x]:
            dp[x][y] = ans
        
        return ans

    def countOfPalindromicPaths(self, matrix):
        # Initialize dynamic programming dictionary and process the matrix
        dp = {}
        n = len(matrix)
        
        # Remove trailing spaces from rows in the matrix
        for i in range(n):
            if matrix[i][-1] == ' ':
                matrix[i].pop()
        
        m = len(matrix[0])
        self.M = int(1e9+7)  # Modulo for large numbers
        
        # Start the recursive function from the top-left corner to the bottom-right corner
        return self.solve(matrix, 0, 0, n - 1, m - 1, dp)
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n, m = input().split()
		n = int(n); m = int(m);
		matrix = []
		for _ in range(n):
			cur  = input()
			temp = []
			for __ in cur:
				temp.append(__)
			matrix.append(temp)
		obj = Solution()
		ans = obj.countOfPalindromicPaths(matrix)
		print(ans)

# } Driver Code Ends