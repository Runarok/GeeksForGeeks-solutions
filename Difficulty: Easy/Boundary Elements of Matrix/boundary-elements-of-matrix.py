class Solution:
    def BoundaryElements(self, matrix):
        # Check if the matrix only has one row
        if len(matrix) == 1:
            return matrix[0]
        else:
            l = []  # List to store boundary elements
            row = len(matrix)  # Number of rows
            col = len(matrix[0])  # Number of columns
            
            # Add the top row
            for i in range(col):
                l.append(matrix[0][i])
            
            # Add the first and last elements of the middle rows
            for i in range(1, row - 1):
                l.append(matrix[i][0])  # First column of each row
                l.append(matrix[i][col - 1])  # Last column of each row
            
            # Add the bottom row
            for m in range(col):
                l.append(matrix[row - 1][m])
            
            return l  # Return the list of boundary elements


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		matrix = []
		for _ in range(n):
			matrix.append(list(map(int, input().split())))
		ob = Solution()
		ans = ob.BoundaryElements(matrix)
		for _ in ans:
			print(_ ,end = " ")
		print()

# } Driver Code Ends