# User function Template for python3

class Solution:
    def transitiveClosure(self, N, graph):
        def dfs(node):
            visited.add(node)
            reachable.append(node)  # Store reachable nodes using DFS
            for neighbor in range(N):
                if graph[node][neighbor] == 1 and neighbor not in visited:
                    dfs(neighbor)

        closure = [[0 for _ in range(N)] for _ in range(N)]
        
        for i in range(N):
            reachable = []  # List to store nodes reachable from 'i'
            visited = set()  # Track visited nodes during DFS
            dfs(i)
            
            for j in reachable:
                closure[i][j] = 1  # Mark reachable nodes in the closure matrix

        return closure

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        graph = []
        for i in range(0,N):
            graph.append([int(j) for j in input().split()])
        ob = Solution()
        ans = ob.transitiveClosure(N, graph)
        for i in range(N):
            for j in range(N):
                print(ans[i][j], end = " ")
            print()
        print("~")
# } Driver Code Ends