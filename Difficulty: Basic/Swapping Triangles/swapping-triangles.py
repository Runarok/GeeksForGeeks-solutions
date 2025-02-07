# User function Template for Python3

class Solution:
    def swapTriangle(self, N, A):
        # Iterate through the upper triangle elements and swap them with their lower counterparts
        for i in range(N):
            for j in range(i + 1, N):
                # Swap element at (i, j) with element at (j, i)
                A[i][j], A[j][i] = A[j][i], A[i][j]
        
        # Return the modified matrix
        return A
#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math

if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N=int(input())
        A=[[0]*N]*N
        for i in range(N):
            A[i]=list(map(int,input().strip().split(" ")))
        ob=Solution()
        ans=ob.swapTriangle(N,A)
        for i in range(N):
            for j in range(N):
                print(ans[i][j],end=" ")
            print()    
        print("~")
# } Driver Code Ends