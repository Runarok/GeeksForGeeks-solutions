class Solution:
    def endPoints(self, matrix, R, C):
        # m: number of rows, n: number of columns
        m = R
        n = C
        
        # Directions: U = up, D = down, R = right, L = left
        direction_map = {"U": [-1, 0], "D": [1, 0], "R": [0, 1], "L": [0, -1]}
        
        # direction transition when hitting a 1: U -> R, R -> D, D -> L, L -> U
        direction_change = {"U": "R", "R": "D", "D": "L", "L": "U"}
        
        # Initial direction is to move right
        current_direction = "R"
        
        # Starting position at the top-left corner of the matrix
        i = 0
        j = 0
        
        # Traverse the matrix until we hit the boundary
        while(0 <= i < m and 0 <= j < n):
            # Save the current position to return it in case we hit the boundary
            prev_i, prev_j = i, j
            
            # If the current cell is 0, continue in the current direction
            if matrix[i][j] == 0:
                i = i + direction_map[current_direction][0]
                j = j + direction_map[current_direction][1]
                
            # If the current cell is 1, change direction and then move
            elif matrix[i][j] == 1:
                matrix[i][j] = 0  # Mark the cell as visited by changing to 0
                current_direction = direction_change[current_direction]  # Update direction
                i = i + direction_map[current_direction][0]
                j = j + direction_map[current_direction][1]
                
            # If we move out of bounds, return the last valid position
            if i < 0 or i == m or j < 0 or j == n:
                return prev_i, prev_j


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        r,c = map(int, input().strip().split())
        matrix = []
        for i in range(r):
            line = [int(x) for x in input().strip().split()]
            matrix.append(line)
        ob = Solution()
        ans = ob.endPoints(matrix,r,c)
        print('(',ans[0],', ',ans[1],')',sep ='')

        print("~")
# } Driver Code Ends