from collections import deque

class Solution:
    def findMaxFlow(self, n, un, edges): 
        # Step 1: Initialize the adjacency matrix for storing capacities
        capacity = [[0] * n for _ in range(n)]
        
        # Step 2: Populate the capacity matrix based on given edges
        for u, v, w in edges:
            u -= 1  # Convert to 0-based indexing
            v -= 1  # Convert to 0-based indexing
            capacity[u][v] += w  # Add capacity in the forward direction
            capacity[v][u] += w  # Allow flow in the reverse direction as well
        
        # Array to store the path found by BFS
        parent = [-1] * n
    
        # Step 3: Implement BFS to find an augmenting path
        def bfs():
            visited = [False] * n
            queue = deque()
            queue.append(0)  # Start BFS from the source (node 0)
            visited[0] = True
            parent[0] = -1  # Source has no parent
            
            while queue:
                v = queue.popleft()
                
                # Explore all neighbors of node v
                for i in range(n):
                    # If there is available capacity and the node is unvisited
                    if capacity[v][i] > 0 and not visited[i]:
                        parent[i] = v  # Store the path
                        queue.append(i)
                        visited[i] = True 
            
            # Return True if the sink (last node) is reached
            return visited[n - 1]
        
        # Step 4: Apply the Ford-Fulkerson Algorithm to find max flow
        max_flow = 0
    
        while bfs():  # While an augmenting path exists
            path_flow = float('inf')
            v = n - 1  # Start from the sink (last node)
            
            # Traverse the path backwards to find the minimum capacity (bottleneck)
            while v != 0:
                u = parent[v]
                path_flow = min(path_flow, capacity[u][v])
                v = u
            
            # Update the residual capacities along the path
            v = n - 1
            while v != 0:
                u = parent[v]
                capacity[v][u] += path_flow  # Reverse flow increment
                capacity[u][v] -= path_flow  # Forward flow decrement
                v = u
            
            # Add path flow to the overall max flow
            max_flow += path_flow
    
        return max_flow

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        N,M = map(int,input().strip().split())
        Edges = []
        input_line = list(map(int,input().strip().split()))
        for i in range(M):
            Edges.append([input_line[3*i],input_line[3*i+1],input_line[3*i+2]])

        ob = Solution()
        ans = ob.findMaxFlow(N, M, Edges)
        print(ans)


        print("~")
# } Driver Code Ends