from typing import List

class Solution:
    def solve(self, N: int, p: List[int]) -> int:
        # If N is less than 3, no valid connections can be formed
        if N < 3:
            return 0
        
        # Initialize an array to count the connections for each node
        conns = [0] * N
        
        # Count the number of connections for each node
        for i in range(1, N):
            conns[i] += 1
            conns[p[i]] += 1
        
        # Count how many nodes have 2 or more connections
        k = 0
        for i in conns:
            if i >= 2:
                k += 1
        
        # Return the result (one less because we start counting from 1)
        return k - 1
#{ 
 # Driver Code Starts
class IntArray:

    def __init__(self) -> None:
        pass

    def Input(self, n):
        arr = [int(i) for i in input().strip().split()]  #array input
        return arr

    def Print(self, arr):
        for i in arr:
            print(i, end=" ")
        print()


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):

        N = int(input())

        p = IntArray().Input(N)

        obj = Solution()
        res = obj.solve(N, p)

        print(res)

        print("~")

# } Driver Code Ends