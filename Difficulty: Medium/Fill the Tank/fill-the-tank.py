from collections import defaultdict

class Solution:
    # Helper function to perform a depth-first search and calculate the minimum cost
    def breadthFirst(self, curr, adj_lst, visited, capacity, parent):
        visited[curr] = True
        result = 0
        n = len(adj_lst[curr])
        
        # Iterate through all adjacent nodes to find the maximum cost
        for i in adj_lst[curr]:
            if i != parent and not visited[i]:
                result = max(result, self.breadthFirst(i, adj_lst, visited, capacity, curr))
        
        # Adjust result by the number of neighbors (excluding parent)
        if parent != -1:
            n -= 1
        return capacity[curr] + (result * n)
    
    # Main function to calculate the minimum amount of capacity needed
    def minimum_amount(self, Edges, num, start, Cap):
        adj_lst = defaultdict(list)
        visited = [False] * num
        
        # Build the adjacency list from the edges
        for u, v in Edges:
            adj_lst[u - 1].append(v - 1)
            adj_lst[v - 1].append(u - 1)
        
        limit = 10e18  # Set a very high limit to check if the result exceeds this threshold
        val = self.breadthFirst(start - 1, adj_lst, visited, Cap, -1)
        
        # If the result exceeds the limit, return -1
        if val > limit:
            return -1
        return val


#{ 
 # Driver Code Starts
#Initial Template for Python 3


if __name__ == '__main__': 
    ob = Solution()
    t = int (input ())
    for _ in range (t):
        num, start = map(int,input().split())
        Cap = list(map(int, input().split()))
        Edges = list()
        for i in range(0, num-1):
            L = list(map(int, input().split()))
            Edges.append(L)
        ans = ob.minimum_amount(Edges, num, start, Cap);
        print(ans)




        print("~")
# } Driver Code Ends