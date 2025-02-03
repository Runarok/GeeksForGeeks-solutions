from collections import deque

class Solution:
    def findDistance(self, matrix, m, n):
        vis = set()  # Set to store cells that were not visited initially
        q = deque()  # Queue to store the cells for BFS

        # Initialize the queue with positions of 'B' and 'W' cells in the matrix
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 'B':  # 'B' is the start point (set distance to 0)
                    q.append((i, j, 0))
                    matrix[i][j] = 0
                elif matrix[i][j] == 'W':  # 'W' cells are marked as -1 (blocked cells)
                    matrix[i][j] = -1
                else:  # 'O' cells are open spaces and should be processed later
                    vis.add((i, j))

        # Perform BFS from all 'B' positions
        while q:
            row, col, dis = q.popleft()  # Pop the front cell in the queue
            for i, j in ((0, -1), (0, 1), (1, 0), (-1, 0)):  # 4 possible directions (left, right, down, up)
                new_row = row + i
                new_col = col + j
                
                # Check if the new cell is within bounds and an open space ('O')
                if 0 <= new_row < m and 0 <= new_col < n and matrix[new_row][new_col] == 'O':
                    matrix[new_row][new_col] = dis + 1  # Set the distance for the new cell
                    q.append((new_row, new_col, dis + 1))  # Add the new cell to the queue
                    vis.remove((new_row, new_col))  # Remove it from the visited set

        # After BFS, mark remaining unvisited cells with '-1' for unreachable cells
        for i, j in vis:
            matrix[i][j] = -1

        return matrix  # Return the modified matrix with distances

#{ 
 # Driver Code Starts
if __name__=="__main__":
    t=int(input())
    for _ in range(t):
        size = input().strip().split()
        m = int(size[0])
        n = int(size[1])
        matrix=[]
        for _ in range(m):
            matrix.append( [ x for x in input().strip().split() ] )
        obj = Solution() 
        result = obj.findDistance(matrix,m,n)
        for i in result:
            for j in i:
                print(j, end=' ')
            print()
        print("~")
# } Driver Code Ends