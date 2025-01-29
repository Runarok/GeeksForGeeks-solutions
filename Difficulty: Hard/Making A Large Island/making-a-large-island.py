from typing import List

class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        n = len(grid)  # Get the size of the grid (n x n)
        
        # Directions for moving in four possible directions (up, down, left, right)
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        
        # Function to perform DFS and mark all cells in the same island
        def dfs(i, j, island_id):
            # Stack-based DFS to explore the entire island and calculate its size
            stack = [(i, j)]
            grid[i][j] = island_id  # Mark the cell with its unique island id
            size = 1  # Initialize the island size as 1 (starting cell)
            while stack:
                x, y = stack.pop()  # Pop the current cell from the stack
                # Explore all four possible directions from the current cell
                for dx, dy in directions:
                    nx, ny = x + dx, y + dy  # New cell coordinates
                    if 0 <= nx < n and 0 <= ny < n and grid[nx][ny] == 1:
                        grid[nx][ny] = island_id  # Mark the cell with the island id
                        stack.append((nx, ny))  # Push the neighboring cell to the stack
                        size += 1  # Increment the island size
            return size
        
        # Dictionary to store the sizes of all islands by their unique id
        island_sizes = {}
        island_id = 2  # Start island IDs from 2 (to avoid conflict with 0 and 1 used in the grid)
        
        # Step 1: Identify all islands in the grid and calculate their sizes
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:  # Found a land cell (unvisited)
                    size = dfs(i, j, island_id)  # Perform DFS to mark the island and get its size
                    island_sizes[island_id] = size  # Store the island size in the dictionary
                    island_id += 1  # Increment island ID for the next island
        
        # Step 2: Initially, find the largest island size without any modification
        max_island_size = max(island_sizes.values(), default=0)  # Get the maximum size of islands found
        
        # Step 3: Explore each zero cell and try to merge nearby islands by changing that 0 to 1
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 0:  # Found a water cell
                    visited_islands = set()  # Set to keep track of visited islands
                    new_island_size = 1  # Changing this cell to 1 contributes at least size 1
                    
                    # Check all four directions (up, down, left, right) to see which islands can be connected
                    for dx, dy in directions:
                        nx, ny = i + dx, j + dy  # New cell coordinates
                        if 0 <= nx < n and 0 <= ny < n and grid[nx][ny] > 1:  # Check if it's part of an island
                            island_id = grid[nx][ny]  # Get the island ID of the neighboring cell
                            if island_id not in visited_islands:  # Avoid double counting the same island
                                visited_islands.add(island_id)  # Mark the island as visited
                                new_island_size += island_sizes[island_id]  # Add the island size to the new island size
                    
                    # Update the maximum island size if a larger size is found
                    max_island_size = max(max_island_size, new_island_size)
        
        return max_island_size  # Return the largest possible island size

#{ 
 # Driver Code Starts

class IntMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()

if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n = int(input())
        
        
        grid=IntMatrix().Input(n,n)
        
        obj = Solution()
        res = obj.largestIsland(grid)
        
        print(res)
        print("~")
# } Driver Code Ends