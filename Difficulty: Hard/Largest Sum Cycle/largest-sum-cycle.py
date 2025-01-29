# User function template for Python3

class Solution():
    def largestSumCycle(self, N, Edge):
        v = [-1] * len(Edge)  # Tracks visited nodes with sum at visit time

        def visit(i: int, s: int) -> int:
            if Edge[i] < 0:  # No outgoing edge or already visited
                return -1
            if v[i] >= 0:  # Cycle detected, compute cycle sum
                return s + i - v[i]

            v[i] = s + i  # Mark node with sum at visit time
            result = visit(Edge[i], s + i)  # Recursively visit next node
            Edge[i] = -1  # Mark node as fully visited
            return result

        return max(visit(i, 0) for i in range(len(Edge)))  # Find max cycle sum
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    for _ in range(int(input())):
        N = int(input())
        Edge=[int(i) for i in input().split()]
        print(Solution().largestSumCycle(N, Edge))
        print("~")
# } Driver Code Ends