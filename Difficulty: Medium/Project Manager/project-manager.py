from collections import defaultdict
import heapq

class Solution:
    def minTime(self, dependency, duration, n, m):
        # Initialize indegree array and adjacency list for the graph
        indegree = [0] * n
        dic = defaultdict(list)
        
        # Build the graph and track indegree of each node
        for i, j in dependency:
            dic[i].append(j)
            indegree[j] += 1
        
        # Priority queue to process nodes with no incoming edges
        queue = []
        for i in range(n):
            if indegree[i] == 0:
                heapq.heappush(queue, (duration[i], i))  # Push (duration, module)
        
        time = 0
        # Process the modules in topological order using heap
        while queue:
            t, module = heapq.heappop(queue)
            time = max(time, t)  # Update the max time taken so far
            for nei in dic[module]:
                indegree[nei] -= 1  # Decrease indegree for the dependent module
                if indegree[nei] == 0:
                    heapq.heappush(queue, (t + duration[nei], nei))  # Add dependent modules to the queue
        
        # If there are any modules with remaining dependencies, return -1
        for i in indegree:
            if i > 0:
                return -1
        
        # Return the total time to complete all tasks
        return time

#{ 
 # Driver Code Starts
#Initial Template for Python 3



for _ in range(0,int(input())):
    n,m= map(int,input().split())
    duration = list(map(int,input().split()))
    dependency = []
    for i in range(0,m):
        l = list(map(int,input().split()))
        dependency.append(l)
    obj = Solution()
    print(obj.minTime(dependency,duration,n,m))
# } Driver Code Ends