# User function Template for python3

class Solution:
    def formCoils(self, n):
        # Function to handle one type of coil formation
        def generate_coil_pattern_1(matrix, rows, cols):
            coil_pattern = []  # This will store the result of the coil
            top = 0  # top boundary
            bottom = rows - 1  # bottom boundary
            left = 0  # left boundary
            right = cols - 1  # right boundary
            
            # Directions to move within the coil
            # dir=0 for right to left
            # dir=1 for top to bottom
            # dir=2 for left to right
            # dir=3 for bottom to top
            direction = 1  # Start with top to bottom
            while top <= bottom and left <= right:
                if direction == 1:  # Going from top to bottom
                    for i in range(top, bottom + 1):
                        coil_pattern.append(matrix[i][left])  # Append values to the coil
                    left += 1  # Move left boundary
                    direction = 0  # Change direction to right to left
                if direction == 0:  # Going from right to left
                    for i in range(left, right):
                        coil_pattern.append(matrix[bottom][i])  # Append values to the coil
                    left += 1  # Move left boundary
                    bottom -= 1  # Move bottom boundary up
                    right -= 1  # Move right boundary left
                    direction = 3  # Change direction to bottom to top
                if direction == 3:  # Going from bottom to top
                    for i in range(bottom, top, -1):  # May need adjustment based on coil size
                        coil_pattern.append(matrix[i][right])  # Append values to the coil
                    direction = 2  # Change direction to left to right
                    right -= 1  # Move right boundary left
                if direction == 2:  # Going from left to right
                    for i in range(right, left - 1, -1):
                        coil_pattern.append(matrix[top + 1][i])  # Append values to the coil
                    direction = 1  # Change direction to top to bottom
                    top += 2  # Move top boundary down
                    bottom -= 1  # Move bottom boundary up
            return coil_pattern  # Return the coil formed in the current direction

        # Function to handle the second type of coil formation
        def generate_coil_pattern_2(matrix, rows, cols):
            coil_pattern = []  # This will store the result of the coil
            top = 0  # top boundary
            bottom = rows - 1  # bottom boundary
            left = 0  # left boundary
            right = cols - 1  # right boundary
            
            # Directions to move within the coil
            # dir=0 for right to left
            # dir=1 for top to bottom
            # dir=2 for left to right
            # dir=3 for bottom to top
            direction = 3  # Start with bottom to top
            while top <= bottom and left <= right:
                if direction == 3:  # Going from bottom to top
                    for i in range(bottom, top - 1, -1):  # May need adjustment based on coil size
                        coil_pattern.append(matrix[i][right])  # Append values to the coil
                    direction = 0  # Change direction to right to left
                    right -= 1  # Move right boundary left
                if direction == 0:  # Going from right to left
                    for i in range(right, left, -1):
                        coil_pattern.append(matrix[top][i])  # Append values to the coil
                    left += 1  # Move left boundary
                    top += 1  # Move top boundary down
                    direction = 1  # Change direction to top to bottom
                if direction == 1:  # Going from top to bottom
                    for i in range(top, bottom):
                        coil_pattern.append(matrix[i][left])  # Append values to the coil
                    bottom -= 1  # Move bottom boundary up
                    left += 1  # Move left boundary right
                    direction = 2  # Change direction to left to right
                if direction == 2:  # Going from left to right
                    for i in range(left, right):
                        coil_pattern.append(matrix[bottom][i])  # Append values to the coil
                    direction = 3  # Change direction to bottom to top
                    top += 1  # Move top boundary down
                    right -= 1  # Move right boundary left
                    bottom -= 1  # Move bottom boundary up
            return coil_pattern  # Return the coil formed in the current direction

        # Dimensions of the matrix are 4 times n
        rows = 4 * n  # Number of rows
        cols = 4 * n  # Number of columns
        current_value = 1  # Start number to fill the matrix
        matrix = []  # Create the matrix

        # Populate the matrix with values starting from 1
        for i in range(1, rows + 1):
            row = []  # Temporary array to store a row
            for j in range(1, cols + 1):
                row.append(current_value)  # Add the number to the row
                current_value += 1  # Increment the number
            matrix.append(row)  # Add the row to the matrix

        # Solve both types of coil formations and return the results
        return generate_coil_pattern_2(matrix, rows, cols)[::-1], generate_coil_pattern_1(matrix, rows, cols)[::-1]
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n=int(input())
        
        ob = Solution()
        ptr = ob.formCoils(n)
        
        for i in range(2):
            print(*ptr[i])
        print("~")
# } Driver Code Ends