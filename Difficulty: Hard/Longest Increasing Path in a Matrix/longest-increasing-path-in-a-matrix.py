#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
    
class Solution:
    def longestIncreasingPath(self, matrix, n, m):
        # Directions to move in the matrix: right, down, left, up
        dirc = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        
        # Initialize a cache for memoization, to store the longest increasing path from each cell
        # -1 indicates that the path from that cell hasn't been computed yet
        cache = [[-1 for _ in range(m)] for _ in range(n)]
        
        # Depth-first search (DFS) function to compute the longest increasing path starting from (i, j)
        def dfs(i, j):
            currentLength = 1  # The minimum path length is 1 (the cell itself)
            
            # If the result for this cell is already computed, return it from the cache
            if cache[i][j] != -1:
                return cache[i][j]
            
            # Explore all four possible directions (right, down, left, up)
            for x, y in dirc:
                nx = x + i  # New row index
                ny = y + j  # New column index
                
                # Check if the new position is within bounds and if the value is greater (i.e., increasing path)
                if 0 <= nx < n and 0 <= ny < m and matrix[i][j] < matrix[nx][ny]:
                    # Update the current path length considering this direction
                    currentLength = max(currentLength, 1 + dfs(nx, ny))
            
            # Cache the computed longest path for this cell
            cache[i][j] = currentLength
            return cache[i][j]
        
        # Variable to keep track of the maximum path length found
        maxLength = 0
        
        # Loop through each cell in the matrix and compute the longest increasing path starting from each cell
        for i in range(n):
            for j in range(m):
                # Update the overall maximum length
                maxLength = max(maxLength, dfs(i, j))
        
        # Return the maximum increasing path length found
        return maxLength


#{ 
 # Driver Code Starts.
# Your code goes here
if __name__=='__main__':
    t = int(input())
    for i in range(t):
        n = list(map(int, input().strip().split()))
        arr = list(map(int, input().strip().split()))
        matrix = [[0 for i in range(n[1])]for j in range(n[0])]
        c=0
        for i in range(n[0]):
            for j in range(n[1]):
                matrix[i][j] = arr[c]
                c+=1 
                
        ob = Solution()
        print(ob.longestIncreasingPath(matrix, n[0], n[1]))
        print("~")
# } Driver Code Ends