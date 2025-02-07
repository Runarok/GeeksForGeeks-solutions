# User function Template for Python3

class Solution:
    def DiagonalSum(self, matrix):
        # Get the size of the square matrix
        n = len(matrix)
        
        # Initialize sum of diagonal elements
        trace = 0
        
        # Sum elements of the primary diagonal
        for i in range(n):
            trace += matrix[i][i]
        
        # Sum elements of the secondary diagonal
        p = 0
        q = n - 1
        while p < n:
            trace += matrix[p][q]
            p += 1
            q -= 1
        
        return trace

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		matrix = []
		for _ in range(n):
			matrix.append(list(map(int,input().split())))
		ob = Solution()
		ans = ob.DiagonalSum(matrix)
		print(ans)
# } Driver Code Ends