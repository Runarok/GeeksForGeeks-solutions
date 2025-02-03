import heapq
from collections import deque
from typing import List

class Solution:
    def CheapestFLight(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        # Queue for BFS: stores (cost, node, stops)
        q = deque()
        q.append((0, src, 0))
        
        # Adjacency list to store flight connections and their costs
        adj = [[] for _ in range(n)]
        for u, v, cost in flights:
            adj[u].append((v, cost))
        
        # Distance array initialized with infinity
        dist = [float('inf')] * n
        dist[src] = 0  # Starting point has a cost of 0
        
        # BFS to explore all possible flights with the allowed stops
        while q:
            cost, node, stops = q.popleft()

            # If the number of stops exceeds k, skip this path
            if stops > k:
                continue

            # Explore neighbors and update their costs if a cheaper path is found
            for neighbor, weight in adj[node]:
                if cost + weight < dist[neighbor]:
                    dist[neighbor] = cost + weight
                    q.append((cost + weight, neighbor, stops + 1))

        # Return the minimum cost to reach the destination or -1 if unreachable
        return dist[dst] if dist[dst] != float('inf') else -1

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    test_cases = int(input())
    for _ in range (test_cases):
        n,edge=map(int,input().split())
        flights=[]
        for _ in range(edge):
            temp=list(map(int,input().split()))
            flights.append(temp[:])
        src=int(input())
        dst=int(input())
        k=int(input())
        obj=Solution()
        res=obj.CheapestFLight(n,flights,src,dst,k)
        print(res)

        
        
        print("~")
# } Driver Code Ends