# User function Template for Python3

class Solution:
    def eulerPath(self, N, graph):
        # Initialize a counter for vertices with odd degree
        odd = 0
        
        # Traverse each vertex's adjacency list
        for v in graph:
            # Count the number of edges for each vertex (degree)
            # If degree is odd, increment odd counter
            if v.count(1) % 2:
                odd += 1
        
        # If the graph has 0 or 2 vertices with an odd degree, it's Eulerian
        # Otherwise, it's not Eulerian
        return 1 if odd == 0 or odd == 2 else 0

#{ 
 # Driver Code Starts
# Initial Template for Python3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input().strip())
        graph = []
        for i in range(N):
            graph.append(list(map(int, input().strip().split())))
        
        ob = Solution()
        print(ob.eulerPath(N, graph))
        print("~")
# } Driver Code Ends