from typing import List
import sys

sys.setrecursionlimit(10000000)

class Solution:
    # Helper DFS function to calculate the result for each node and its sub-tree
    def dfs(self, i, adj, arr, sign):
        ans = -1e9  # Initialize the answer as a very small number
        for adj_node in adj[i]:
            ans = max(ans, self.dfs(adj_node, adj, arr, not sign))  # Recursively visit the child nodes
        
        x = arr[i-1]  # Get the value at the current node
        if sign:
            x *= -1  # If sign is True, multiply the value by -1 (invert it)
        if ans == -1e9:
            return x  # If no child, return the current node value
        return ans + x  # Return the maximum value obtained from child + current node's value
    
    # Main function to calculate the best node value
    def bestNode(self, N: int, A: List[int], P: List[int]) -> int:
        adj = [[] for _ in range(N+1)]  # Initialize adjacency list
        
        for i in range(1, N):  # Populate the adjacency list based on parent-child relationships
            adj[P[i]].append(i+1)
        
        ans = -1e9  # Initialize the final answer as a very small number
        for i in range(1, N+1):  # Iterate through all nodes
            ans = max(ans, self.dfs(i, adj, A, False))  # Calculate the best result starting from each node
        
        return ans  # Return the maximum result

#{ 
 # Driver Code Starts
class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        N = int(input())
        
        
        A=IntArray().Input(N)
        
        
        P=IntArray().Input(N)
        
        obj = Solution()
        res = obj.bestNode(N, A, P)
        
        print(res)
        

        print("~")
# } Driver Code Ends