class Solution:
    def isEulerCircuitExist(self, vertices_count, adj_list):
        
        def dfs_traversal(node, visited_nodes):
            visited_nodes[node] = True
            for neighbor in adj_list[node]:
                if not visited_nodes[neighbor]:
                    dfs_traversal(neighbor, visited_nodes)
        
        # Step 1: Check if all non-isolated nodes are connected
        visited_nodes = [False] * vertices_count
        start_node = -1
        
        # Find the first node with at least one connection
        for i in range(vertices_count):
            if len(adj_list[i]) > 0:
                start_node = i
                break
        
        # If no edges exist, the graph is trivially Eulerian Circuit
        if start_node == -1:
            return 2
        
        # Perform DFS starting from the first non-isolated node
        dfs_traversal(start_node, visited_nodes)
        
        # Check if all vertices with edges were visited
        for i in range(vertices_count):
            if len(adj_list[i]) > 0 and not visited_nodes[i]:
                return 0  # Graph is not connected
        
        # Step 2: Count vertices with odd degree
        odd_degree_count = 0
        for i in range(vertices_count):
            if len(adj_list[i]) % 2 != 0:  # Vertex has an odd degree
                odd_degree_count += 1
        
        # Step 3: Determine Eulerian Path or Circuit
        if odd_degree_count > 2:
            return 0  # Not an Eulerian Path or Circuit
        elif odd_degree_count == 0:
            return 2  # Eulerian Circuit exists
        elif odd_degree_count == 2:
            return 1  # Eulerian Path exists
        else:
            return 0  # Neither Path nor Circuit exists

#{ 
 # Driver Code Starts
if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        V, E = map(int, input().strip().split())
        adj = [[] for i in range(V)]
        for _ in range(E):
            u, v = map(int, input().split())
            adj[u].append(v)
            adj[v].append(u)
        obj = Solution()
        ans = obj.isEulerCircuitExist(V, adj)
        print(ans)
        print("~")

# } Driver Code Ends