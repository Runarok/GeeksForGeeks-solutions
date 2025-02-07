# User function Template for Python3

class Solution:
    def Addition(self, matrixA, matrixB):
        # Get the size of the square matrices
        n = len(matrixA)
        
        # Perform element-wise addition of matrixA and matrixB
        for row_idx in range(n):
            for col_idx in range(n):
                matrixA[row_idx][col_idx] += matrixB[row_idx][col_idx]
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
		ob.Addition(matrixA, matrixB)
		for i in range(n):
			for j in range(n):
				print(matrixA[i][j], end = " ")
			print()
# } Driver Code Ends