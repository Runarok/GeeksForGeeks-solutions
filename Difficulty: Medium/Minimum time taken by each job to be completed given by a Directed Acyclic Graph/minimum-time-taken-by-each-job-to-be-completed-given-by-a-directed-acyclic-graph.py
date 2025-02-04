from typing import List

# Define a Node class to represent each node in the graph
class Node:
    def __init__(self, name):
        self.name = name  # Name of the node
        self.aList = []   # Adjacency list (for neighbors)
        self.time = 0     # Time associated with the node
        self.indegree = 0 # Number of incoming edges (dependencies)

class Solution:
    # Helper function to perform DFS-based Topological Sort
    def topoSort(self, i, node, time, visited):
        visited[i] = 1  # Mark the current node as visited
        for j in node[i].aList:  # Explore all adjacent nodes
            if visited[j] == 0:  # If neighbor hasn't been visited yet
                self.topoSort(j, node, time - 1, visited)  # Recursively visit
        node[i].cost = abs(time)  # Assign the absolute time cost to the node

    def minimumTime(self, n: int, m: int, edges: List[List[int]]) -> int:
        # Initialize node dictionary to store all nodes
        node = {}
        for i in range(n):
            node[i + 1] = Node(i + 1)  # Create a node for each number from 1 to n

        # Build the graph from the given edges
        for edge in edges:
            x, y = edge
            node[x].aList.append(y)     # Add y as a neighbor of x
            node[y].indegree += 1        # Increment the indegree (dependency) of y
        
        Q = []  # Queue to store nodes with no incoming edges (indegree = 0)
        # Add nodes with no incoming edges to the queue and set their time to 1
        for i in range(n):
            if node[i + 1].indegree == 0:
                node[i + 1].time = 1
                Q.append(node[i + 1])
        
        # Perform a topological sort using BFS
        while len(Q) != 0:
            node1 = Q.pop(0)  # Get the next node to process
            for y in node1.aList:  # Process all neighbors of node1
                node[y].indegree -= 1  # Decrease the indegree of each neighbor
                if node[y].indegree == 0:  # If no remaining dependencies
                    node[y].time = node1.time + 1  # Set time for the neighbor
                    Q.append(node[y])  # Add it to the queue

        # Collect the result times for each node
        res = []
        for i in range(1, n + 1):
            res.append(node[i].time)
        
        return res  # Return the list of times for each node

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
        
        a=IntArray().Input(2)
        
        
        edges=IntMatrix().Input(a[1], a[1])
        
        obj = Solution()
        res = obj.minimumTime(a[0],a[1], edges)
        
        IntArray().Print(res)
        

# } Driver Code Ends