from typing import List
import heapq

class Solution:
    def minimumCost(self, flights: List[List[int]], n : int, k : int) -> int:
        # Priority queue to store the cities and their current costs
        pq = []
        
        # Adjacency list to store the flight information (destination, cost)
        adj = [[] for _ in range(n + 1)]
        
        # Populate the adjacency list with flight data
        for u, v, w in flights:
            adj[u].append([v, w])
        
        # Push the starting city (k) into the priority queue with cost 0
        heapq.heappush(pq, [0, k])
        
        # Distance array initialized with -1 to indicate unvisited cities
        dist = [-1 for _ in range(n + 1)]
        
        while pq:
            # Pop the city with the lowest cost
            w, u = heapq.heappop(pq)
            
            # If the city hasn't been visited yet, set its cost
            if dist[u] == -1:
                dist[u] = w
                # Push all its neighbors into the queue with the updated cost
                for v, wt in adj[u]:
                    heapq.heappush(pq, [w + wt, v])
        
        # Find the maximum distance (cost) to visit all cities
        maxi = 0
        for i in range(1, n + 1):
            # If any city is not reachable, return -1
            if dist[i] == -1:
                return -1
            # Update the maximum cost
            maxi = max(maxi, dist[i])
        
        # Return the maximum cost to reach all cities
        return maxi


#{ 
 # Driver Code Starts
#Initial Template for Python 3

    
if __name__=="__main__":
    T = int(input())
    for t in range(T):
        
        n = int(input())
        k = int(input())
        m = int(input())
        flights = []
        for i in range(m):
            u, v, wt = map(int, input().strip().split())
            flights.append([u, v, wt])
        obj = Solution()
        ans = obj.minimumCost(flights, n, k)
        print(ans)
            

        print("~")
# } Driver Code Ends