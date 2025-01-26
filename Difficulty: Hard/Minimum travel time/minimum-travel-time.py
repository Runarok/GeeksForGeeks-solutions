#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

import heapq

class Solution:
    def Solve(self, n, grid):
        # Directions for moving in 4 directions: up, down, left, right
        dx = [-1, 0, 1, 0]
        dy = [0, -1, 0, 1]
        
        # Priority queue (min-heap): (max_height_on_path, x, y)
        pq = []
        heapq.heappush(pq, (grid[0][0], 0, 0))  # Start from top-left corner
        
        # Visited array to keep track of visited cells
        visited = [[False] * n for _ in range(n)]
        visited[0][0] = True
        
        while pq:
            # Get the current cell with the smallest max height on the path
            max_height, x, y = heapq.heappop(pq)
            
            # If we've reached the bottom-right corner, return the result
            if x == n - 1 and y == n - 1:
                return max_height
            
            # Explore all 4 directions
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                
                # Check if the next cell is within bounds and not visited
                if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny]:
                    # Mark the new cell as visited
                    visited[nx][ny] = True
                    
                    # The new max height on the path is the maximum of the current max height
                    # and the height of the next cell
                    new_max_height = max(max_height, grid[nx][ny])
                    
                    # Push the new state into the priority queue
                    heapq.heappush(pq, (new_max_height, nx, ny))
        
        # If we can't reach the bottom-right corner (shouldn't happen with valid inputs)
        return -1

#{ 
 # Driver Code Starts.
if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        n = int(input())
        adj = [list(map(int, input().split())) for _ in range(n)]
        ob = Solution()
        res = ob.Solve(n, adj)
        print(res)
        print("~")
# } Driver Code Ends