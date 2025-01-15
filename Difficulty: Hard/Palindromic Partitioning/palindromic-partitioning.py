from collections import defaultdict, deque

class Solution:
    def findOrder(self, dict: List[str], k: int) -> str:
        # Step 1: Build graph and calculate in-degree
        graph = defaultdict(list)
        in_degree = [0] * k
        
        # Step 2: Build the graph based on word comparison
        for i in range(len(dict) - 1):
            word1, word2 = dict[i], dict[i + 1]
            # Compare characters of word1 and word2 to find the order
            for c1, c2 in zip(word1, word2):
                if c1 != c2:
                    graph[c1].append(c2)
                    in_degree[ord(c2) - ord('a')] += 1
                    break
        
        # Step 3: Topological Sort using Kahn's Algorithm (BFS)
        queue = deque()
        # Add all characters with in-degree 0 to the queue
        for i in range(k):
            if in_degree[i] == 0:
                queue.append(chr(i + ord('a')))
        
        result = []
        
        while queue:
            node = queue.popleft()
            result.append(node)
            
            for neighbor in graph[node]:
                in_degree[ord(neighbor) - ord('a')] -= 1
                if in_degree[ord(neighbor) - ord('a')] == 0:
                    queue.append(neighbor)
        
        # Step 4: If result size is equal to k, return the result as a string, else return ""
        return ''.join(result) if len(result) == k else ""

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        string = input()

        ob = Solution()
        print(ob.palindromicPartition(string))

# } Driver Code Ends