from collections import defaultdict

class Solution:
    def minColour(self, N, M, mat):
        # Initialize adjacency list
        self.adj = defaultdict(list)
        
        # Create the graph from the mat input (admired -> admirer)
        for admired, admirer in mat:
            self.adj[admirer].append(admired)
        
        # Create a dp array to store results of subproblems
        self.dp = [-1] * (N + 1)
        
        result = 0
        
        # Find the longest path for each node
        for i in range(1, N + 1):
            result = max(result, self.dfs(i))
        
        return result
    
    def dfs(self, node):
        # If this node has been visited before, return the cached result
        if self.dp[node] != -1:
            return self.dp[node]
        
        # Initialize output length for the current node
        output_length = 1
        
        # Explore all the neighbors (i.e., who admire the current node)
        for neighbour in self.adj[node]:
            output_length = max(output_length, 1 + self.dfs(neighbour))
        
        # Store the result for the current node
        self.dp[node] = output_length
        
        return output_length

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N, M = [int(x) for x in input().split()]
        mat = [[0]*2 for y in range(M)]
        for i in range(M):
            arr = input().split()
            mat[i][0] = int(arr[0])
            mat[i][1] = int(arr[1])
        
        ob = Solution()
        print(ob.minColour(N, M, mat))
        print("~")
# } Driver Code Ends