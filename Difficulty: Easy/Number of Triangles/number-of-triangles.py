from typing import List

class Solution:
    def numberOfTriangles(self, n : int, g : List[List[int]]) -> int:
        # Initialize the triangle count to 0
        triangle_count = 0

        # Iterate through all possible triplets of vertices (i, j, k)
        for i in range(n):
            for j in range(n):
                for k in range(n):
                    # Ensure that i, j, and k are distinct and check if the edges between them exist
                    if i != j and i != k and j != k and g[i][j] and g[j][k] and g[k][i]:
                        triangle_count += 1
        
        # Each triangle is counted three times (once for each permutation of its vertices),
        # so divide the total count by 3 to get the correct number of unique triangles
        return triangle_count // 3


#{ 
 # Driver Code Starts
class IntMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n = int(input())
        
        
        g=IntMatrix().Input(n, n)
        
        obj = Solution()
        res = obj.numberOfTriangles(n, g)
        
        print(res)
        

# } Driver Code Ends