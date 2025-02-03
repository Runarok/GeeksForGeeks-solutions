from typing import List
from collections import defaultdict
import sys, heapq

class Solution:
    def countPaths(self, n: int, roads: List[List[int]]) -> int:
        # Modulo constant
        mod = 1000000007
        
        # Create adjacency list
        adj = defaultdict(list)
        for road in roads:
            adj[road[0]].append([road[1], road[2]])
            adj[road[1]].append([road[0], road[2]])
        
        # Distance array initialized to infinity
        dist = [float('inf')] * n
        # Ways array initialized to 0
        ways = [0] * n
        # Start at node 0
        ways[0] = 1
        dist[0] = 0
        
        # Min-heap to store the nodes to be processed
        q = [(0, 0)]
        
        while q:
            # Get the node with the minimum distance
            dis, node = heapq.heappop(q)
            
            # Traverse all adjacent nodes
            for neighbor in adj[node]:
                aj_node = neighbor[0]
                aj_dist = neighbor[1]
                
                # If we find a shorter path to a node, update distance and ways
                if aj_dist + dis < dist[aj_node]:
                    dist[aj_node] = aj_dist + dis
                    heapq.heappush(q, (aj_dist + dis, aj_node))
                    ways[aj_node] = ways[node]
                # If we find another path with equal distance, increment the number of ways
                elif aj_dist + dis == dist[aj_node]:
                    ways[aj_node] = (ways[aj_node] + ways[node]) % mod
        
        # Return the number of ways to reach the last node (node n-1)
        return ways[n - 1] % mod

#{ 
 # Driver Code Starts
#Initial Template for Python 3

class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n,m=map(int,input().split())
        
        
        adj=[]
        
        for i in range(m):
            tmp =[]
            x,y,z=map(int,input().split())
            tmp.append(x)
            tmp.append(y)
            tmp.append(z)
            adj.append(tmp)
            
        
        
        
       
        obj = Solution()
        res = obj.countPaths(n, adj)
        
        print(res)
        

        print("~")
# } Driver Code Ends