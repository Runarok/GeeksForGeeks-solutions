from collections import deque

class Solution:
    def bfs(self, s, t, rgraph, n):
        # Perform a Breadth-First Search (BFS) to find if there's a path from s to t in the residual graph
        vis = [False] * n  # To track visited nodes
        pi = {s: None}  # Dictionary to store the parent of each node in the path
        q = deque()  # Queue for BFS
        q.append(s)
        vis[s] = True  # Mark the source as visited
        
        # BFS loop to find an augmenting path
        while q:
            u = q.popleft()
            for v in range(n):
                # Check if v is unvisited and there is a residual capacity (positive edge)
                if not vis[v] and rgraph[u][v] > 0:
                    vis[v] = True  # Mark v as visited
                    pi[v] = u  # Record the parent of v
                    q.append(v)
                    # If we reach the target node, return the result
                    if v == t:
                        return True, pi, vis
        # If no path is found
        return vis[t], pi, vis
    
    def minimumCut(self, A, s, t, n):
        # Create a copy of the original graph to use as the residual graph
        rgraph = [row[:] for row in A]

        # Repeatedly find augmenting paths and update the residual graph
        while True:
            # Find an augmenting path using BFS
            truth, pi, vis = self.bfs(s, t, rgraph, n)
            
            # If no more augmenting paths are found, break
            if not truth:
                break
            
            # Find the bottleneck capacity (the minimum residual capacity along the path)
            v = t
            bottleneck = float('inf')  # Set initial bottleneck to infinity
            while v != s:
                u = pi[v]  # Get the parent of v
                bottleneck = min(bottleneck, rgraph[u][v])  # Update bottleneck
                v = u  # Move to the parent node

            # Augment flow and update residual capacities
            max_flow = 0
            v = t
            while v != s:
                u = pi[v]  # Get the parent of v
                rgraph[u][v] -= bottleneck  # Decrease the forward edge capacity
                rgraph[v][u] += bottleneck  # Increase the reverse edge capacity
                v = u  # Move to the parent node
            max_flow += bottleneck  # Increase max flow by bottleneck

        # After no more augmenting paths, find the minimum cut
        truth, pi, vis = self.bfs(s, t, rgraph, n)
        res = []
        
        # Identify the minimum cut by checking which nodes are reachable from the source (in S)
        for u in range(n):
            if vis[u]:  # Node u is in the set S
                for v in range(n):
                    # Check if v is in set T and there's an original edge from u to v
                    if not vis[v] and A[u][v] > 0:
                        res.append(u)  # Add u to the result (convert to 1-based index)
                        res.append(v)  # Add v to the result (convert to 1-based index)

        # If no cut is found, return [-1]
        return res if res else [-1]
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        N = int(input())
        A = []
        for i in range(N):
            l = list(map(int,input().strip().split()))
            A.append(l)
        S,T = map(int,input().strip().split())
        ob = Solution()
        res = ob.minimumCut(A, S, T, N)
        for each in res:
            print(each, end =" ")
        print()


# } Driver Code Ends