class Solution:
    def isEularCircuitExist(self, v, adj):
        # Function to check if an Eulerian circuit exists in the graph
        def dfs(node, adj, visited):
            visited[node] = 1
            for i in range(len(adj[node])):
                if not visited[adj[node][i]]:
                    dfs(adj[node][i], adj, visited)
        
        # Initialize degree list and count of odd degree vertices
        deg = [0]*v
        odd_deg = 0
        
        # Calculate the degree of each vertex
        for i in range(v):
            deg[i] = len(adj[i])
            if deg[i] % 2 != 0:
                odd_deg += 1
        
        # If any vertex has an odd degree, Eulerian circuit doesn't exist
        if odd_deg != 0:
            return 0
        
        # Perform DFS from any vertex with non-zero degree to check connectivity
        visited = [0]*v
        for i in range(v):
            if deg[i]:
                dfs(i, adj, visited)
        
        # Check if all vertices with non-zero degree are visited
        for i in range(v):
            if deg[i] and not visited[i]:
                return 0
        
        # Eulerian circuit exists
        return 1

#{ 
 # Driver Code Starts
#Initial Template for python3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        V, E = map(int, input().split())
        adj = [[] for i in range(V)]
        for _ in range(E):
            u, v = map(int, input().split())
            adj[u].append(v)
            adj[v].append(u)
        obj = Solution()
        ans = obj.isEularCircuitExist(V, adj)
        if (ans):
            print("1")
        else:
            print("0")

        print("~")
# } Driver Code Ends