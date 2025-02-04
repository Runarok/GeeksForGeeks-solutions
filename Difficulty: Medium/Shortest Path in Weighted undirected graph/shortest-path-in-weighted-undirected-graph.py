from typing import List
import heapq

class Solution:
    def shortestPath(self, n: int, m: int, edges: List[List[int]]) -> List[int]:
        # Initialize adjacency list to store the graph
        adj = [[] for _ in range(n + 1)]
        
        # Build the graph with given edges
        for u, v, wt in edges:
            adj[u].append((v, wt))
            adj[v].append((u, wt))
        
        # Initialize parent and distance arrays
        parent = [i for i in range(n + 1)]
        dist = [float('inf')] * (n + 1)  # Distance from source node (1)
        
        # Priority queue to implement Dijkstra's algorithm
        pq = []
        heapq.heappush(pq, (0, 1))  # Start with node 1
        dist[1] = 0
        
        while pq:
            d, node = heapq.heappop(pq)
            
            # Relax all adjacent nodes
            for v, wt in adj[node]:
                if d + wt < dist[v]:
                    dist[v] = d + wt
                    parent[v] = node
                    heapq.heappush(pq, (dist[v], v))
        
        # If no path exists to node n
        if dist[n] == float('inf'):
            return [-1]
        
        # Reconstruct the path from node n to 1 using parent array
        path = []
        nd = n
        while nd != 1:
            path.append(nd)
            nd = parent[nd]
        path.append(1)
        
        # Return the shortest distance and path
        return [dist[n]] + path[::-1]


#{ 
 # Driver Code Starts
from collections import defaultdict


def check(n, path, edges):
    gp = [{} for i in range(n + 1)]
    for u, v, w in edges:
        if v in gp[u]:
            gp[u][v] = min(gp[u][v], w)
        else:
            gp[u][v] = w

        if u in gp[v]:
            gp[v][u] = min(gp[v][u], w)
        else:
            gp[v][u] = w

    s = 0
    for i in range(2, len(path)):
        if path[i] not in gp[path[i - 1]]:
            return False
        s += gp[path[i - 1]][path[i]]

    return s == path[0]


if __name__ == "__main__":
    for _ in range(int(input())):
        n, m = map(int, input().split())
        edges = []
        for i in range(m):
            a, b, w = map(int, input().split())
            edges.append([a, b, w])

        obj = Solution()
        res = obj.shortestPath(n, m, edges)
        if res[0] == -1:
            print(-1)
        else:
            if check(n, res, edges):
                print(res[0])
            else:
                print(-2)
        print("~")

# } Driver Code Ends