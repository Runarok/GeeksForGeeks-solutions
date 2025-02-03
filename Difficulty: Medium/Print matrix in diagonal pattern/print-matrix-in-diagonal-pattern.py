# User function template for Python3

class Solution:
    def matrixDiagonally(self, mat):
        # Get the matrix size
        n = len(mat)
        result = []  # List to store diagonal traversal elements

        # Iterate over all possible diagonals
        for diag in range(2 * n - 1):

            if diag % 2 == 0:  # Even diagonals (top-down)
                row = min(diag, n - 1)
                col = diag - row

                while row >= 0 and col < n:
                    result.append(mat[row][col])
                    row -= 1
                    col += 1

            else:  # Odd diagonals (bottom-up)
                col = min(diag, n - 1)
                row = diag - col

                while col >= 0 and row < n:
                    result.append(mat[row][col])
                    col -= 1
                    row += 1

        return result


#{ 
 # Driver Code Starts
# Driver Program
if __name__=='__main__':
    t = int(input())
    for i in range(t):
        n = list(map(int, input().strip().split()))
        arr = list(map(int, input().strip().split()))
        matrix = [[0 for i in range(n[0])]for j in range(n[0])]
        k=0
        for i in range(n[0]):
            for j in range(n[0]):
                matrix[i][j] = arr[k]
                k+=1
        a = Solution().matrixDiagonally(matrix)
        for x in a:
            print(x,end=' ')
        print('')
        print("~")
# Contributed by: Harshit Sidhwa
# } Driver Code Ends