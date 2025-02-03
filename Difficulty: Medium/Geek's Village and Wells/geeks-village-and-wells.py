from collections import deque
from typing import List

class Solution:
    def chefAndWells(self, n : int, m : int, c : List[List[str]]) -> List[List[int]]:
        # Initialize a queue to process wells and a result matrix
        wells_queue = deque()
        result_matrix = [[-1 for _ in range(m)] for _ in range(n)]
        
        # Directions for moving in the grid: up, down, left, right
        directions = [(1, 0), (-1, 0), (0, -1), (0, 1)]
        
        # Add wells to the queue and initialize non-house cells in result matrix
        for row in range(n):
            for col in range(m):
                if c[row][col] == 'W':
                    wells_queue.append((row, col))
                if c[row][col] != 'H':
                    result_matrix[row][col] = 0
        
        # Start level-wise traversal to compute distance to houses
        distance_level = 0
        while wells_queue:
            distance_level += 1
            current_level_size = len(wells_queue)
            for _ in range(current_level_size):
                x, y = wells_queue.popleft()
                
                # Check all four possible neighboring cells
                for dx, dy in directions:
                    new_x, new_y = x + dx, y + dy
                    
                    # Ensure the new position is within bounds
                    if 0 <= new_x < n and 0 <= new_y < m:
                        
                        # If it's a house, update the distance and mark as visited
                        if c[new_x][new_y] == 'H':
                            result_matrix[new_x][new_y] = 2 * distance_level
                            c[new_x][new_y] = 'X'  # Mark as visited
                            wells_queue.append((new_x, new_y))
                        
                        # If it's an empty cell, just mark it as visited
                        elif c[new_x][new_y] == '.':
                            c[new_x][new_y] = 'X'  # Mark as visited
                            wells_queue.append((new_x, new_y))
        
        return result_matrix

#{ 
 # Driver Code Starts
#Initial Template for Python 3

from typing import List

class StringMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([i for i in input().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()



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
        
        n,m= map(int,input().split())
    
        
        
        c=StringMatrix().Input(n, m)
        
        obj = Solution()
        res = obj.chefAndWells(n, m, c)
        
        for el in res:
            for c in el:
                print(c, end=" ")
            print()

# } Driver Code Ends