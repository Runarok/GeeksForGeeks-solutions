from typing import List
from collections import deque

class Solution:
    def findShortestPath(self, mat: List[List[int]]) -> int:
        # Helper function to check if a cell is safe to traverse
        def is_safe(i, j):
            if i < 0 or i == len(mat) or j < 0 or j == len(mat[0]) or not mat[i][j]:
                return False
            
            # Ensure there are no adjacent blocked cells
            for x, y in [[-1, 0], [0, -1], [1, 0], [0, 1]]:
                nx, ny = i + x, j + y
                if 0 <= nx < len(mat) and 0 <= ny < len(mat[0]) and not mat[nx][ny]:
                    return False
            
            return True
        
        # Initialize the minimum path length as infinity
        ans = float('inf')
        
        # Function to perform BFS traversal from a given starting point
        def traverse(i, j):
            q = deque([(i, j)])  # Queue for BFS
            seen = set()  # Set to track visited cells
            
            l = 0  # Level or distance from the start point
            while q:
                for _ in range(len(q)):
                    x, y = q.popleft()
                    
                    # If we reach the last column, return the current distance
                    if y == len(mat[0]) - 1:
                        return l + 1
                    
                    # Explore all four possible directions
                    for dx, dy in [[-1, 0], [0, -1], [1, 0], [0, 1]]:
                        nx, ny = dx + x, dy + y
                        if is_safe(nx, ny) and (nx, ny) not in seen:
                            q.append((nx, ny))
                            seen.add((nx, ny))
                l += 1
        
            return float('inf')  # Return infinity if no path found
        
        # Try starting from each valid cell in the first column
        for i in range(len(mat)):
            if is_safe(i, 0):
                ans = min(ans, traverse(i, 0))
        
        # Return the shortest path length or -1 if no path exists
        return ans if ans != float('inf') else -1



#{ 
 # Driver Code Starts
class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
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
        
        a=IntArray().Input(2)
        
        
        mat=IntMatrix().Input(a[0], a[1])
        
        obj = Solution()
        res = obj.findShortestPath(mat)
        
        print(res)
        

        print("~")
# } Driver Code Ends