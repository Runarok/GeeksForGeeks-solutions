#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for Python3

class DisjointSet:
    def __init__(self, n):
        """Initializes the Disjoint Set with parent, rank, and size arrays."""
        self.parent = list(range(n))  # Each node is its own parent initially
        self.rank = [0] * n  # Rank used for union by rank (not used here)
        self.size = [1] * (n + 1)  # Size of each component

    def find(self, node):
        """Finds the ultimate parent (root) of the given node using path compression."""
        if node == self.parent[node]:
            return node
        self.parent[node] = self.find(self.parent[node])  # Path compression
        return self.parent[node]

    def unionBySize(self, u, v):
        """Unites two sets based on their size."""
        root_u = self.find(u)
        root_v = self.find(v)

        if root_u == root_v:  # Already in the same set
            return

        # Attach smaller tree under larger tree
        if self.size[root_u] < self.size[root_v]:
            self.parent[root_u] = root_v
            self.size[root_v] += self.size[root_u]
        else:
            self.parent[root_v] = root_u
            self.size[root_u] += self.size[root_v]


class Solution:
    def maxRemove(self, stones, n):
        """Finds the maximum number of stones that can be removed while keeping at least one per component."""
        ds = DisjointSet(n)

        # Connecting stones that share the same row or column
        for i in range(n):
            for j in range(i + 1, n):
                if stones[i][0] == stones[j][0] or stones[i][1] == stones[j][1]:
                    ds.unionBySize(i, j)

        # Counting the number of connected components
        num_components = sum(1 for i in range(n) if ds.find(i) == i)

        return n - num_components  # Maximum removable stones

#{ 
 # Driver Code Starts.
if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        n = int(input())
        adj = [list(map(int, input().split())) for _ in range(n)]
        ob = Solution()
        res = ob.maxRemove(adj, n)
        print(res)
        print("~")
# } Driver Code Ends