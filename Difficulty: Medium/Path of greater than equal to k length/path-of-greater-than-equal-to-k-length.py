from collections import defaultdict, deque

class Solution:
    def pathMoreThanK(self, V, E, K, A):
        # Create a graph using an adjacency list
        graph = defaultdict(list)
        for i in range(0, len(A), 3):
            u, v, weight = A[i], A[i+1], A[i+2]
            graph[u].append((weight, v))
            graph[v].append((weight, u))

        # BFS Initialization
        # visited will track visited nodes in the current path's traversal
        queue = deque([(0, 0, set())])  # (current node, cumulative path sum, visited nodes)

        while queue:
            node, path_sum, visited = queue.popleft()

            # If the path sum is greater than or equal to K, return 1
            if path_sum >= K:
                return 1

            # Explore neighbors and track visited nodes for the current path
            visited.add(node)

            for weight, neighbor in graph[node]:
                # Only consider unvisited neighbors for this path
                if neighbor not in visited:
                    # Create a new visited set for the next path
                    queue.append((neighbor, path_sum + weight, visited.copy()))

        # If no path satisfies the condition, return 0
        return 0

#{ 
 # Driver Code Starts



if __name__ == '__main__': 
    ob = Solution()
    t = int (input ())
    for _ in range (t):
        V, E, K= map(int, input().split())
        A = list(map(int, input().split()))
        ans = ob.pathMoreThanK(V, E, K, A);
        if(ans):
            print(1)
        else:
            print(0)


# } Driver Code Ends