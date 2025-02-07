# User function Template for Python3

class Solution:
    def Multiply(self, matrixA, matrixB):
        # Get the size of the square matrices
        n = len(matrixA)

        # Create a result matrix initialized with zeros
        result_matrix = [[0 for _ in range(n)] for _ in range(n)]

        # Perform matrix multiplication
        for row in range(n):
            for col in range(n):
                for k in range(n):
                    result_matrix[row][col] += matrixA[row][k] * matrixB[k][col]

        # Update matrixA with the computed result
        for row in range(n):
            for col in range(n):
                matrixA[row][col] = result_matrix[row][col]

        return matrixA

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		matrixA = []
		matrixB = []
		for _ in range(n):
			matrixA.append(list(map(int,input().split())))
		for _ in range(n):
			matrixB.append(list(map(int,input().split())))
		ob = Solution()
		ob.Multiply(matrixA, matrixB)
		for i in range(n):
			for j in range(n):
				print(matrixA[i][j], end = " ")
			print()
# } Driver Code Ends