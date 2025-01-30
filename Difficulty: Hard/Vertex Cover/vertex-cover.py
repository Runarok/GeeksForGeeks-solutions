from typing import List

class Solution:
    # Function to find the minimum vertex cover of a tree
    def vertexCover(self, n : int, edges : List[List[int]]) -> int:
        
        # Helper recursive function to solve the vertex cover problem
        def solve(edges):
            # Base case: if there are no edges, return 0 as no vertices are needed
            if len(edges) == 0:
                return 0
            
            # Separate edges based on the first vertex of the first edge
            ed0 = []
            ed1 = []
            for i in edges:
                # If the current edge does not contain the first vertex of the first edge
                if not(i[0] == edges[0][0] or i[1] == edges[0][0]):
                    ed0.append(i)
                # If the current edge does not contain the second vertex of the first edge
                if not(i[0] == edges[0][1] or i[1] == edges[0][1]):
                    ed1.append(i)
            
            # If the first vertex is included, we increment the count by 1 and solve the subproblem with the remaining edges
            ans0 = 1 + solve(ed0)
            # If the second vertex is included, we increment the count by 1 and solve the subproblem with the remaining edges
            ans1 = 1 + solve(ed1)
            
            # Return the minimum of the two possible answers
            return min(ans0, ans1)
        
        # Call the helper function to solve the problem for the given edges
        return solve(edges)

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
        
        
        m = int(input())
        
        
        edges=IntMatrix().Input(m, m)
        
        obj = Solution()
        res = obj.vertexCover(n, edges)
        
        print(res)
        

        print("~")
# } Driver Code Ends