# User function Template for python3
from collections import deque

class Solution:
    def countOfNodes(self, graph, n):
        # Initialize queue and counters for even and odd level nodes
        queue = deque()
        even_count, odd_count = 0, 0
        queue.append(1)
        visited = {}
        level = 0
        
        # Perform BFS traversal
        while queue:
            size = len(queue)
            for _ in range(size):
                node = queue.popleft()
                visited[node] = True
                
                # Count nodes based on level
                if level % 2 == 0:
                    even_count += 1
                else:
                    odd_count += 1
                
                # Traverse adjacent nodes
                for neighbor in graph[node]:
                    if neighbor not in visited:
                        visited[neighbor] = True
                        queue.append(neighbor)
            
            level += 1
        
        # Calculate total pairs possible
        total_pairs = (even_count * (even_count - 1)) // 2
        total_pairs += (odd_count * (odd_count - 1)) // 2
        
        return total_pairs

#{ 
 # Driver Code Starts
#Initial Template for Python 3

from collections import defaultdict
if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n=int(input())
        arr = input().split()
        graph = defaultdict(list)
        for i in range(0,2*n-2,2):
            graph[int(arr[i])].append(int(arr[i+1]))
            graph[int(arr[i+1])].append(int(arr[i]))
            
            
        
        ob = Solution()
        print(ob.countOfNodes(graph,n))
        print("~")
# } Driver Code Ends