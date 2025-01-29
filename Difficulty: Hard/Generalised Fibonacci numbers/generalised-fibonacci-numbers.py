class Solution:
    def matrix_mult(self, A, B, m):
        # Performs matrix multiplication (3x3 matrices) under modulo m
        return [
            [(A[0][0] * B[0][0] + A[0][1] * B[1][0] + A[0][2] * B[2][0]) % m, 
             (A[0][0] * B[0][1] + A[0][1] * B[1][1] + A[0][2] * B[2][1]) % m,
             (A[0][0] * B[0][2] + A[0][1] * B[1][2] + A[0][2] * B[2][2]) % m],
            [(A[1][0] * B[0][0] + A[1][1] * B[1][0] + A[1][2] * B[2][0]) % m,
             (A[1][0] * B[0][1] + A[1][1] * B[1][1] + A[1][2] * B[2][1]) % m,
             (A[1][0] * B[0][2] + A[1][1] * B[1][2] + A[1][2] * B[2][2]) % m],
            [(A[2][0] * B[0][0] + A[2][1] * B[1][0] + A[2][2] * B[2][0]) % m,
             (A[2][0] * B[0][1] + A[2][1] * B[1][1] + A[2][2] * B[2][1]) % m,
             (A[2][0] * B[0][2] + A[2][1] * B[1][2] + A[2][2] * B[2][2]) % m]
        ]
    
    def matrix_pow(self, M, power, m):
        # Computes the exponentiation of a matrix M to the given power under modulo m
        result = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]  # Identity matrix
        base = M
        
        while power:
            if power % 2 == 1:  # If power is odd, multiply result by base
                result = self.matrix_mult(result, base, m)
            base = self.matrix_mult(base, base, m)  # Square the base matrix
            power //= 2  # Reduce power by half
        
        return result
    
    def genFibNum(self, a, b, c, n, m):
        # Special case: If n is 1 or 2, the Fibonacci-like sequence returns 1
        if n == 1 or n == 2:
            return 1 % m
        
        # Define the transformation matrix based on recurrence relation
        transformation_matrix = [
            [a, b, c],  # Coefficients for the recurrence
            [1, 0, 0],  # Shifts previous values
            [0, 0, 1]   # Keeps last term constant
        ]
        
        # Compute the power of the transformation matrix
        result_matrix = self.matrix_pow(transformation_matrix, n - 2, m)
        
        # Initial values for g(2) = 1, g(1) = 1, and a constant 1
        initial_vector = [1, 1, 1]
        
        # Compute g(n) using the first row of the transformed matrix
        g_n = (result_matrix[0][0] * initial_vector[0] +
               result_matrix[0][1] * initial_vector[1] +
               result_matrix[0][2] * initial_vector[2]) % m
        
        return g_n

 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        a,b,c,n,m=map(int,input().split())
        
        ob = Solution()
        print(ob.genFibNum(a,b,c,n,m))
        print("~")
# } Driver Code Ends