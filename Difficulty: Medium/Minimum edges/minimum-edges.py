from typing import List
import heapq

class Solution:
    def minimumEdgeReversal(self, edges: List[List[int]], n: int, m: int, src: int, dst: int) -> int:
        # Create an adjacency list to represent the graph
        adj = {i: [] for i in range(n + 1)}  # Initialize adjacency list for each node
        
        # Populate the adjacency list with the given edges
        for u, v in edges:
            # For each edge, u -> v has no reversal (weight 0), v -> u requires a reversal (weight 1)
            adj[u].append((v, 0))  
            adj[v].append((u, 1))  
        
        # Min-heap priority queue initialized with the source node and a reversal count of 0
        min_heap = [(0, src)]  # (reversal count, current node)
        visited = set()  # Set to track visited nodes
        
        # Start the Dijkstra-like process to find the minimum edge reversal path
        while min_heap:
            # Pop the node with the least edge reversal count
            reversal_count, current_node = heapq.heappop(min_heap)
            
            # Skip if the node has already been visited
            if current_node in visited:
                continue
            visited.add(current_node)
            
            # If we reached the destination node, return the number of edge reversals
            if current_node == dst:
                return reversal_count
            
            # Explore all the neighbors of the current node
            for neighbor, edge_reversal in adj[current_node]:
                # Skip already visited neighbors
                if neighbor in visited:
                    continue
                # Push the neighbor into the heap with the updated reversal count
                heapq.heappush(min_heap, (reversal_count + edge_reversal, neighbor))
        
        # If there's no path from src to dst, return -1
        return -1



#{ 
 # Driver Code Starts
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



class IntMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        n,m=map(int,input().split())
        edges=IntMatrix().Input(m,2)
        
        
        src = int(input())
        
        
        dst = int(input())
        
        obj = Solution()
        res = obj.minimumEdgeReversal(edges, n, m, src, dst)
        
        print(res)
        

# } Driver Code Ends