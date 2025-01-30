import numpy as np

class Solution:
    def countSpanningTrees(self, graph, m, n):  # Removed type hints
        """
        Counts the number of spanning trees in a given undirected graph.

        Args:
          graph: A list of edges representing the graph.
          m: The number of vertices in the graph.
          n: The number of edges in the graph.

        Returns:
          The number of spanning trees in the graph.
        """
        
        # Initialize the adjacency matrix with zeros.
        M = np.zeros(shape=(m, m))
        
        # Create a list to keep track of the degree (indegree) of each vertex.
        indegree = [0 for _ in range(m)]

        # Fill the adjacency matrix and update the indegree list based on the edges.
        for edge in graph:
            u, v = edge
            M[u, v] = -1  # Set the edge weight to -1 for the adjacency matrix
            M[v, u] = -1  # Since the graph is undirected, set the symmetric edge
            indegree[u] += 1  # Increase the degree of vertex u
            indegree[v] += 1  # Increase the degree of vertex v

        # Set the diagonal entries to the degree of each vertex.
        for i in range(m):
            M[i, i] = indegree[i]

        # Calculate the determinant of the modified adjacency matrix (excluding the first row and column).
        noOfSpanningTrees = np.linalg.det(M[1:, 1:])

        # Round the result and return it as an integer (spanning trees must be an integer).
        return int(round(noOfSpanningTrees))
#{ 
 # Driver Code Starts
class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()



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
        
        a=IntArray().Input(2)
        
        
        graph=IntMatrix().Input(a[1], a[1])
        
        obj = Solution()
        res = obj.countSpanningTrees(graph,a[0],a[1])
        
        print(res)
        

# } Driver Code Ends