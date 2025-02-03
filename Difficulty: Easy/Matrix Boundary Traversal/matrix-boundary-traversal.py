class Solution:
    
    # Function to return list of integers that form the boundary
    # traversal of the matrix in a clockwise manner.
    def BoundaryTraversal(self, mat):
        lst = []  # List to store the boundary traversal
        
        n = len(mat)  # Size of the matrix
        
        # Traverse the first row
        for firstrow in range(n):
            lst.append(mat[0][firstrow])
        
        # Traverse the right column (excluding the first and last row)
        for rightc in range(1, n - 1):
            lst.append(mat[rightc][n - 1])
        
        # Traverse the last row in reverse order
        for lastrow in range(n - 1, -1, -1):
            lst.append(mat[n - 1][lastrow])
        
        # Traverse the left column (excluding the first and last row)
        for leftc in range(n - 2, 0, -1):
            lst.append(mat[leftc][0])
        
        # Return the list containing the boundary traversal
        return lst
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    ob = Solution()
    t = int(input())
    for _ in range(t):
        r = int(input())
        c = int(input())
        matrix = [[0 for j in range(c)] for i in range(r)]
        for i in range(r):
            t = [int(el) for el in input().split()]
            for j in range(c):
                matrix[i][j] = t[j]
        ans = ob.BoundaryTraversal(matrix)
        print(*ans)
        print("~")

# } Driver Code Ends