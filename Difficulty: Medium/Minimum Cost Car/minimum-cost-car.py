from typing import List

class Solution:
    def minimumCost(self, n: int, src: int, dst: int, k: int, m: int, cars: List[List[int]]) -> int:
        # Create an adjacency list to store the graph representation
        # Each node will have a list of tuples (neighbor, cost)
        adj = [[] for _ in range(n)]
        
        # Populate the adjacency list with the given cars data
        # cars[i] = [source, destination, cost]
        for car in cars:
            adj[car[0]].append((car[1], car[2]))
        
        # Initialize the distance array with infinity values
        # This will keep track of the minimum cost to reach each node
        distance = [float('inf')] * n
        
        # Use a queue for BFS-like traversal: store (node, current_cost)
        q = [(src, 0)]  # Start from the source node with 0 cost
        
        # The variable k represents the maximum number of stops (edges) allowed.
        # Increment k by 1 since the number of steps is one more than the number of edges
        k += 1
        
        # Perform up to k iterations (broadening the search layer by layer)
        for _ in range(k):
            # Get the current size of the queue
            size = len(q)
            
            # Process each node in the queue at the current level
            for _ in range(size):
                # Dequeue the current node and its accumulated cost
                node, current_cost = q.pop(0)
                
                # Explore each neighboring node and its associated travel cost
                for neighbor, travel_cost in adj[node]:
                    # If traveling to this neighbor via the current node is cheaper,
                    # update the distance and add the neighbor to the queue
                    if distance[neighbor] > current_cost + travel_cost:
                        distance[neighbor] = current_cost + travel_cost
                        q.append((neighbor, current_cost + travel_cost))
        
        # If the destination node has still an infinite distance, return -1 (unreachable)
        if distance[dst] == float('inf'):
            return -1
        
        # Return the minimum cost to reach the destination node
        return distance[dst]

#{ 
 # Driver Code Starts
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
        
        n = int(input())
        
        
        src = int(input())
        
        
        dst = int(input())
        
        
        k = int(input())
        
        
        m = int(input())
        
        
        cars=IntMatrix().Input(m, m)
        
        obj = Solution()
        res = obj.minimumCost(n, src, dst, k, m, cars)
        
        print(res)
        

# } Driver Code Ends