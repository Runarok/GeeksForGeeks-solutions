class Solution:
    def socialNetwork(self, arr, N):
        # Initialize the graph with empty adjacency lists for each node
        N += 1
        graph = [[] for _ in range(N)]
        
        # Build the graph from the input list of followers
        for i, follower in enumerate(arr, start=2):
            graph[i].append(follower)
    
        # Initialize the distance matrix with zeros
        dist = [[0] * N for _ in range(N)]
        
        # Depth-First Search function to compute the distances
        def dfs(node, start, d):
            for neighbor in graph[node]:
                if dist[start][neighbor] < d + 1:  # If we find a longer path
                    dist[start][neighbor] = d + 1  # Update the distance
                    dfs(neighbor, start, d + 1)  # Recur for the neighbor
        
        # Perform DFS from each node to compute distances
        for i in range(2, N):
            dfs(i, i, 0)
        
        # Collect the results: the nodes with their mutual distances
        result = []
        for i in range(2, N):
            for j in range(1, i):
                if dist[i][j] > 0:  # If a valid distance exists
                    result.extend([i, j, dist[i][j]])
        
        # Return the results as a string with space-separated values
        return ' '.join(map(str, result))


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N=int(input())
        arr=list(map(int,input().split()))
        
        ob = Solution()
        print(ob.socialNetwork(arr,N))
        print("~")
# } Driver Code Ends