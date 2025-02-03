class Solution:
    def biGraph(self, arr, n, e):
        # Create edges list from the input array
        edges = list(zip(arr[::2], arr[1::2]))
        
        # Initialize adjacency list for the graph
        adjacency_list = [[] for _ in range(n)]
        
        # Fill the adjacency list with edges
        for edge in edges:
            u, v = edge
            adjacency_list[u].append(v)
            adjacency_list[v].append(u)

        # Initialize arrays for parent, visited status, discovery time, and low time
        parent = [-1] * n
        visited = [False] * n
        discovery_time = [float("Inf")] * n
        low_time = [float("Inf")] * n
        
        self.time = 0
        
        # Function to detect articulation point (AP)
        def hasArticulationPoint(current_node: int) -> bool:
            if visited[current_node]:
                return False
            visited[current_node] = True
            
            discovery_time[current_node] = self.time
            low_time[current_node] = self.time
            self.time += 1
            child_count = 0
            
            # Explore all neighbors of the current node
            for neighbor in adjacency_list[current_node]:
                if not visited[neighbor]:
                    parent[neighbor] = current_node
                    child_count += 1
                    
                    # Recursively check for articulation point
                    if hasArticulationPoint(neighbor):
                        return True
                        
                    low_time[current_node] = min(low_time[current_node], low_time[neighbor])
                    
                    # Check if the current node is an articulation point
                    if parent[current_node] == -1 and child_count > 1:
                        return True
                    
                    if parent[current_node] != -1 and low_time[neighbor] >= discovery_time[current_node]:
                        return True
                    
                elif neighbor != parent[current_node]:
                    low_time[current_node] = min(low_time[current_node], discovery_time[neighbor])
            
            return False
        
        # Check if the graph has an articulation point starting from node 0
        if hasArticulationPoint(0):
            return 0
        
        # If any node is not visited, return 0
        if any(not visited_node for visited_node in visited):
            return 0
        
        # If no articulation point is found, return 1
        return 1

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n,e=map(int,input().split())
        arr=list(map(int,input().split()))
        
        ob = Solution()
        print(ob.biGraph(arr,n,e))
        print("~")
# } Driver Code Ends