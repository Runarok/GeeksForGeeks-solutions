#User function Template for python3
import heapq as hq

class Solution:
    # Function to check if the given row and column indices are valid.
    def isValid(self, row, col, n, m):
        # Return True if the indices are within bounds of the grid.
        if 0 <= row < n and 0 <= col < m:
            return True
    
    # Function to count the number of cells that can be visited.
    def numberOfCells(self, n, m, r, c, u, d, mat):
        # If the starting cell is blocked (denoted by '#'), return 0.
        if mat[r][c] == '#':
            return 0
        pque = []  # Priority queue for BFS
        vis = [[0 for i in range(m)] for j in range(n)]  # Visited matrix initialized to 0
    
        # Push the starting point (r, c) with 0 up and down moves into the priority queue.
        hq.heappush(pque, ((0, 0), (r, c)))
        vis[r][c] = 1  # Mark the starting cell as visited
    
        # Perform a BFS to visit all reachable cells.
        while pque:
            # Pop the cell with the smallest number of moves from the priority queue.
            up, down = pque[0][0][0], pque[0][0][1]
            x, y = pque[0][1][0], pque[0][1][1]
            hq.heappop(pque)
    
            # Check the neighboring cells to see if they can be visited.
            if self.isValid(x - 1, y, n, m):
                # Check if moving up is valid and the cell is open.
                if up + 1 <= u and not vis[x - 1][y] and down <= d and mat[x - 1][y] == '.':
                    hq.heappush(pque, (((up + 1), down), (x - 1, y)))
                    vis[x - 1][y] = 1
    
            if self.isValid(x + 1, y, n, m):
                # Check if moving down is valid and the cell is open.
                if down + 1 <= d and not vis[x + 1][y] and up <= u and mat[x + 1][y] == '.':
                    hq.heappush(pque, ((up, (down + 1)), (x + 1, y)))
                    vis[x + 1][y] = 1
    
            if self.isValid(x, y - 1, n, m):
                # Check if moving left is valid and the cell is open.
                if down <= d and not vis[x][y - 1] and up <= u and mat[x][y - 1] == '.':
                    hq.heappush(pque, ((up, down), (x, y - 1)))
                    vis[x][y - 1] = 1
    
            if self.isValid(x, y + 1, n, m):
                # Check if moving right is valid and the cell is open.
                if down <= d and not vis[x][y + 1] and up <= u and mat[x][y + 1] == '.':
                    hq.heappush(pque, ((up, down), (x, y + 1)))
                    vis[x][y + 1] = 1
    
        # Count the number of visited cells.
        ans = 0
        for i in range(n):
            for j in range(m):
                if vis[i][j] == 1:
                    ans += 1
    
        return ans

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(int(input()))

    for tcs in range(t):

        n, m, r, c, u, d = [int(x) for x in input().split()]

        mat = []

        for i in range(n):
            matele = [x for x in input()]
            mat.append(matele)
        obj=Solution()
        print(obj.numberOfCells(n, m, r, c, u, d, mat))
        print("~")
# } Driver Code Ends