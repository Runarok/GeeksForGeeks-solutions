from typing import List

# Disjoint Set (Union-Find) class
class DisjointSet:
    def __init__(self, N):
        # Initialize the rank and parent arrays for Union-Find
        self.rank = [0] * N  # Rank array to keep the tree flat
        self.parent = [i for i in range(N)]  # Parent array to track the parent of each node

    def findParent(self, u):
        # Find the representative or the parent of the set containing 'u'
        if u == self.parent[u]:
            return u  # If u is the parent of itself, return u
        
        # Path compression step to flatten the tree structure
        self.parent[u] = self.findParent(self.parent[u])
        return self.parent[u]

    def unionSet(self, u, v):
        # Union of two sets: one containing 'u' and the other containing 'v'
        ulp_u = self.findParent(u)
        ulp_v = self.findParent(v)

        if ulp_u == ulp_v:
            return 1  # If u and v are already in the same set, return 1 (no change)
        
        # Union by rank: attach the smaller tree under the larger tree
        if self.rank[ulp_u] < self.rank[ulp_v]: 
            self.parent[ulp_u] = ulp_v
        elif self.rank[ulp_u] > self.rank[ulp_v]:
            self.parent[ulp_v] = ulp_u
        else:
            self.parent[ulp_v] = ulp_u  # Arbitrary choice if both have the same rank
            self.rank[ulp_v] += 1  # Increase the rank of the new root

        return 0  # Return 0 to indicate a successful union

class Solution:
    def minimumConnections(self, n: int, connections: List[List[int]]) -> int:
        # Initialize the Disjoint Set object with n nodes
        obj = DisjointSet(n)
        extra = 0  # Counter to track the number of redundant connections

        # Process all the given connections
        for u, v in connections:
            if obj.unionSet(u, v):
                extra += 1  # If u and v are already in the same set, increment the extra counter

        # Count the number of connected components (sets)
        cc = 0  # Counter for connected components
        for i, val in enumerate(obj.parent):
            if i == val:  # If i is the parent of itself, it means it is a root of a set
                cc += 1
        
        # If we have enough extra connections to connect all components, return the number of additional connections
        if extra >= cc - 1:
            return cc - 1
        else:
            return -1  # Not enough connections to make the graph fully connected

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
        
        
        connections=IntMatrix().Input(m, m)
        
        obj = Solution()
        res = obj.minimumConnections(n,connections)
        
        print(res)
        

# } Driver Code Ends