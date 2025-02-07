class Solution:
    def sumOfRowCol(self, N, M, A):
        # Iterate through the minimum of rows and columns to check sums
        for k in range(0, min(N, M)):
            column_sum = 0
            row_sum = 0
            
            # Calculate the sum of the k-th column
            for i in range(N):
                column_sum += A[i][k]
            
            # Calculate the sum of the k-th row
            for j in range(M):
                row_sum += A[k][j]
            
            # If row sum and column sum are not equal, return 0
            if column_sum != row_sum:
                return 0
        
        # If all checked row and column sums match, return 1
        return 1
#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
        
if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N,M=map(int,input().strip().split(" "))
        A=[]
        for i in range(N):
            B=list(map(int,input().strip().split(" ")))
            A.append(B)
        ob=Solution()
        print(ob.sumOfRowCol(N,M,A))
        print("~")
# } Driver Code Ends