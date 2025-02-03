# User function Template for python3

class Solution:
    def ShortestDistance(self, matrix):
        # Initialize an output matrix to track the visited cells
        output = []
        rows = len(matrix)
        cols = len(matrix[0])
        
        # Initialize the output matrix with zeros
        for _ in range(rows):
            col = [0] * (cols)
            output.append(col)
        
        # If the start cell is 0 or if the grid is too small to move, return [-1]
        if matrix[0][0] == 0 and rows-1 != 0 and cols-1 != 0:
            return [[-1]]
        
        # Recursive function to find the shortest path
        def recurMaze(row, col):
            # Base condition: if reached bottom-right corner, set its value to 1
            if row == rows-1 and col == cols-1:
                output[row][col] = 1
                return True
            
            # Check boundary conditions and if the current cell is blocked
            if row < 0 or row >= rows or col < 0 or col >= cols or matrix[row][col] == 0:
                return False
            
            # Get the number of jumps possible from the current cell
            jumps = matrix[row][col]
            
            # Mark the current cell as visited by setting it to 0
            matrix[row][col] = 0
            output[row][col] = 1
            
            # Try to move right and down based on the jumps possible
            for jump in range(1, jumps + 1):
                right = recurMaze(row, col + jump)
                if right:
                    return True
                down = recurMaze(row + jump, col)
                if down:
                    return True
            
            # Backtrack: reset the cell to its original value
            matrix[row][col] = jumps
            output[row][col] = 0
            return False
        
        # Start the recursive process from the top-left corner
        recurMaze(0, 0)
        
        # Return the output matrix
        return output

#{ 
 # Driver Code Starts
# Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        n = int(input())
        matrix = []
        for i in range(n):
            a = list(map(int, input().split()))
            matrix.append(a)

        ob = Solution()
        ans = ob.ShortestDistance(matrix)

        for row in ans:
            for val in row:
                print(val, end=" ")
            print()

        print("~")

# } Driver Code Ends