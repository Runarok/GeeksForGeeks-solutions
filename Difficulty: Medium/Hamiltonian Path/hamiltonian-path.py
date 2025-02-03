class Solution:
    def check(self, N, M, Edges):
        # Create an adjacency list to represent the graph
        adjacency_list = {}

        def add_edge(node1, node2):
            # Ensure both nodes exist in the adjacency list
            if node1 not in adjacency_list:
                adjacency_list[node1] = []
            if node2 not in adjacency_list:
                adjacency_list[node2] = []
            # Add the edge in both directions (undirected graph)
            adjacency_list[node1].append(node2)
            adjacency_list[node2].append(node1)

        # Add all edges to the graph
        for node1, node2 in Edges:
            add_edge(node1, node2)

        # Include all nodes from 0 to N-1 in the adjacency list, even if they have no connections
        for i in range(N):
            if i not in adjacency_list:
                adjacency_list[i] = []

        def dfs(current_node, visited_nodes, current_length):
            # If we've visited all nodes, we found a Hamiltonian path
            if current_length == N:
                return True

            # Traverse all adjacent nodes (neighbors)
            for neighbor in adjacency_list[current_node]:
                if neighbor not in visited_nodes:
                    visited_nodes.add(neighbor)
                    if dfs(neighbor, visited_nodes, current_length + 1):
                        return True
                    visited_nodes.remove(neighbor)  # Backtrack if path doesn't work

            return False

        # Try to find a Hamiltonian path starting from each node
        for start_node in range(N):
            visited = set()
            visited.add(start_node)
            if dfs(start_node, visited, 1):  # Start DFS with the node and initial path length 1
                return True

        # Return False if no Hamiltonian path was found
        return False

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        N,M = map(int,input().strip().split())
        Edges=[]
        e = list(map(int,input().strip().split()))
        for i in range(M):
            Edges.append([e[2*i],e[2*i+1]])
        ob = Solution()
        if ob.check(N, M, Edges):
            print(1)
        else:
            print(0)
        print("~")
# } Driver Code Ends