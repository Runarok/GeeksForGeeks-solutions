from collections import deque

class Solution:

    def get_neighbors(self, row, col, rows, cols, heights):
        """
        Get valid neighboring cells that have equal or greater height.
        This ensures water can flow from the current cell to the neighbor.
        """
        neighbors_list = []
        for new_row, new_col in [(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)]:
            # Check if the neighbor is within the grid boundaries
            if (0 <= new_row < rows) and (0 <= new_col < cols):
                # Only consider cells where water can flow (non-decreasing height)
                if heights[new_row][new_col] >= heights[row][col]:
                    neighbors_list.append((new_row, new_col))
        return neighbors_list

    def water_flow(self, heights, rows, cols) -> int:
        # Determines the number of cells from which water can reach both the Pacific and Atlantic oceans.
        atlantic_queue = deque()  # Queue for Atlantic ocean traversal
        atlantic_visited = set()  # Set to track visited cells for Atlantic

        pacific_queue = deque()  # Queue for Pacific ocean traversal
        pacific_visited = set()  # Set to track visited cells for Pacific

        # Initialize ocean borders by adding all edge cells to their respective ocean queues
        for row in range(rows):
            for col in range(cols):
                if row == 0 or col == 0:  # Cells touching the Pacific Ocean (top or left border)
                    atlantic_queue.append((row, col))
                    atlantic_visited.add((row, col))
                if row == rows - 1 or col == cols - 1:  # Cells touching the Atlantic Ocean (bottom or right border)
                    pacific_queue.append((row, col))
                    pacific_visited.add((row, col))

        # Perform BFS traversal for both oceans
        self.traverse_ocean(atlantic_queue, heights, cols, rows, atlantic_visited)
        self.traverse_ocean(pacific_queue, heights, cols, rows, pacific_visited)

        # Find intersection of both sets, which gives the number of cells where water reaches both oceans
        return len(atlantic_visited.intersection(pacific_visited))

    def traverse_ocean(self, ocean_queue, heights, cols, rows, visited_ocean):
        # Perform BFS traversal to mark all reachable cells from a given ocean.
        while ocean_queue:
            current_row, current_col = ocean_queue.popleft()  # Get the current cell from the queue
            
            # Explore all valid neighboring cells
            for neighbor_row, neighbor_col in self.get_neighbors(current_row, current_col, rows, cols, heights):
                if (neighbor_row, neighbor_col) not in visited_ocean:  # Avoid re-visiting cells
                    visited_ocean.add((neighbor_row, neighbor_col))  # Mark cell as visited
                    ocean_queue.append((neighbor_row, neighbor_col))  # Add neighbor to queue for further exploration

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import sys
sys.setrecursionlimit(10**6)
if __name__ == "__main__":
    for _ in range(int(input())):
        n,m = map(int, input().split())
        mat = []
        for i in range(n):
            tmp = [int(i) for i in input().split()]
            mat.append(tmp)
        print(Solution().water_flow(mat, n, m))
        print("~")
# } Driver Code Ends