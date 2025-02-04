from typing import List

class Solution:
    def eventualSafeNodes(self, V: int, adj: List[List[int]]) -> List[int]:
        # State for each node: 0 = unvisited, 1 = visiting, 2 = safe
        state = [0] * V
        safe_nodes = []

        # Helper DFS function to determine if a node is safe
        def dfs(node):
            # If the node is being visited (part of current DFS path), it's unsafe
            if state[node] == 1:
                return False
            # If the node is already marked as safe, no need to visit it again
            if state[node] == 2:
                return True
            
            # Mark the node as visiting
            state[node] = 1
            # Explore all the neighbors
            for neighbor in adj[node]:
                if not dfs(neighbor):  # If any neighbor is unsafe, the node is unsafe
                    return False
            
            # Mark the node as safe after all neighbors are explored
            state[node] = 2
            return True
        
        # Run DFS on all nodes
        for node in range(V):
            if dfs(node):
                safe_nodes.append(node)
        
        return sorted(safe_nodes)
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=="__main__":
    T = int(input())
    for t in range(T):
        
        V, E = map(int, input().strip().split())
        adj = [[] for i in range(V)]
        for i in range(E):
            u, v = map(int, input().strip().split())
            adj[u].append(v)
        obj = Solution()
        ans = obj.eventualSafeNodes(V, adj)
        for nodes in ans:
            print(nodes, end = ' ')
        print()
            


        print("~")
# } Driver Code Ends