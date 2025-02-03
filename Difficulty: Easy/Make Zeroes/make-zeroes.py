#User function Template for python3
class Solution:
    def MakeZeros(self, matrix):
        # Dictionary to store updated values for cells that should be changed
        d = {}

        # Iterate over each cell in the matrix
        for r in range(len(matrix)):
            for c in range(len(matrix[0])):
                # If the current cell contains a zero
                if matrix[r][c] == 0:
                    sm = 0  # Initialize sum of adjacent cells
                    
                    # Check and add value from the top cell, if within bounds
                    if r-1 >= 0:
                        sm += matrix[r-1][c]
                        d[(r-1, c)] = 0  # Mark top cell to be set to zero
                    
                    # Check and add value from the bottom cell, if within bounds
                    if r+1 < len(matrix):
                        sm += matrix[r+1][c]
                        d[(r+1, c)] = 0  # Mark bottom cell to be set to zero
                    
                    # Check and add value from the left cell, if within bounds
                    if c-1 >= 0:
                        sm += matrix[r][c-1]
                        d[(r, c-1)] = 0  # Mark left cell to be set to zero
                    
                    # Check and add value from the right cell, if within bounds
                    if c+1 < len(matrix[0]):
                        sm += matrix[r][c+1]
                        d[(r, c+1)] = 0  # Mark right cell to be set to zero
                    
                    # Store the computed sum in the dictionary for the current zero cell
                    d[(r, c)] = sm

        # Update the matrix with the new values stored in the dictionary
        for r, c in d.keys():
            matrix[r][c] = d[(r, c)]
        
        # Return the modified matrix
        return matrix


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        n, m = input().split()
        n = int(n)
        m = int(m)
        matrix = []
        for _ in range(n):
            matrix.append(list(map(int, input().split())))
        ob = Solution()
        ob.MakeZeros(matrix)
        for i in range(n):
            for j in range(m):
                print(matrix[i][j], end=" ")
            print()
        print("~")

# } Driver Code Ends