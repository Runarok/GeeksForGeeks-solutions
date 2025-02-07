#{ 
 # Driver Code Starts

# } Driver Code Ends


class Solution:
    # Function to verify the multiplication of two matrices.
    def multiplyMatrix(self, mat1, mat2, result):
        # Initialize a 4x4 matrix to store the computed product
        computed_result = [[0 for _ in range(4)] for _ in range(4)]
        
        # Debug flag (unused but present in the original code)
        debug_mode = 0
        if result[0][0] == 52:
            debug_mode = 0  # Placeholder, has no effect on execution
            
        # Perform matrix multiplication
        for row in range(4):
            for col in range(4):
                sum_product = 0
                for k in range(4):
                    sum_product += mat1[row][k] * mat2[k][col]
                    
                if debug_mode:
                    print(f"computed_result[{row}][{col}]={sum_product}", end="* *")
                
                computed_result[row][col] = sum_product
            
        # Compare computed result with the expected result
        return 1 if computed_result == result else 0


#{ 
 # Driver Code Starts.
if __name__ == '__main__':
    t = int(input())  # Read number of test cases
    for _ in range(t):
        mat1 = []  # Define a 2D array for matrix A
        for i in range(4):
            arr = [int(x) for x in input().strip().split()]
            mat1.append(arr)

        mat2 = []  # Define a 2D array for matrix B
        for i in range(4):
            arr = [int(x) for x in input().strip().split()]
            mat2.append(arr)

        result = []  # Define a 2D array for the result matrix
        for i in range(4):
            arr = [int(x) for x in input().strip().split()]
            result.append(arr)

        obj = Solution()
        isValid = obj.multiplyMatrix(mat1, mat2,
                                     result)  # Perform multiplication check

        # Print result based on validity
        if not isValid:
            print("False")
        else:
            print("True")

# } Driver Code Ends