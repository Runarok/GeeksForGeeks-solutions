from typing import List

class Solution:
    def numberOfPairs(self, a : List[int], pairs : List[List[int]]) -> int:
        # code here
        
        # Helper function to find the root parent of a node with path compression
        def find(parent, x):
            if parent[x] != x:
                parent[x] = find(parent, parent[x])  # Path compression
            return parent[x]

        # Helper function to union two sets based on rank
        def union(parent, rank, x, y):
            rootX = find(parent, x)  # Find root of x
            rootY = find(parent, y)  # Find root of y
            if rootX != rootY:
                # Union by rank to keep the tree shallow
                if rank[rootX] > rank[rootY]:
                    parent[rootY] = rootX  # Attach rootY to rootX
                if rank[rootX] < rank[rootY]:
                    parent[rootX] = rootY  # Attach rootX to rootY
                else:
                    parent[rootY] = rootX  # Arbitrary choice when ranks are equal
                    rank[rootX] += 1  # Increase rank for rootX

        N = a[0]  # Get the total number of nodes (N)
        parent = list(range(N))  # Initialize parent list where each node is its own parent
        rank = [0] * N  # Initialize rank array with 0 for all nodes
        
        # Union all pairs in the given pairs list
        for u, v in pairs:
            union(parent, rank, u, v)

        branch_size = {}  # Dictionary to store the size of each connected component (branch)
        
        # Calculate the size of each connected component by finding the root of each node
        for i in range(N):
            root = find(parent, i)  # Find the root of node i
            branch_size[root] = branch_size.get(root, 0) + 1  # Count the size of each branch
        
        # Total number of possible pairs from N nodes
        total_pairs = (N * (N - 1)) // 2
        
        # Calculate the number of invalid pairs (pairs within the same branch)
        invalid_pairs = sum((size * (size - 1)) // 2 for size in branch_size.values())
        
        # Return the valid pairs by subtracting invalid pairs from total pairs
        return total_pairs - invalid_pairs
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
        
        
        pairs=IntMatrix().Input(a[1], a[1])
        
        obj = Solution()
        res = obj.numberOfPairs(a, pairs)
        
        print(res)
        

# } Driver Code Ends