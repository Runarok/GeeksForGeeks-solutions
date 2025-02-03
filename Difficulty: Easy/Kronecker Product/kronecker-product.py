class Solution:
    def kroneckerProduct(self, n, m, p, q, mat_a, mat_b):
        result_matrix = [[0 for _ in range(m * q)] for _ in range(n * p)]
        
        # Loop through the rows and columns of the first matrix
        for row in range(n):
            for col in range(m):
                # Loop through the rows and columns of the second matrix
                for i in range(p):
                    for j in range(q):
                        # Multiply corresponding elements and place them in the result matrix
                        result_matrix[row * p + i][col * q + j] = mat_a[row][col] * mat_b[i][j]
        return result_matrix

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n, m, p, q = [int(x) for x in input().split()]
        A = [[0]*m for x in range(n)]
        B = [[0]*q for x in range(p)]
        for i in range(n):
            a1 = input().split()
            for j in range(m):
                A[i][j] = int(a1[j])
        for i in range(p):
            a1 = input().split()
            for j in range(q):
                B[i][j] = int(a1[j])
        
        ob = Solution()
        ans = ob.kroneckerProduct(n, m, p, q, A, B)
        for i in range(n*p):
            for j in range(m*q):
                print(ans[i][j], end = " ")
            print()
# } Driver Code Ends