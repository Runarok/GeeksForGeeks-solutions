from typing import List

class Solution:
    def mergeStones(self, n: int, k: int, stones: List[int]) -> int:
        # If it is not possible to merge all stones into one pile, return -1.
        n = len(stones)
        if (n - 1) % (k - 1):  # Check if merging is possible with the given k
            return -1

        # Compute prefix sums for the stones array to calculate the total stone weight in ranges.
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + stones[i]

        # Initialize the dynamic programming (DP) table.
        dp = [[0] * n for _ in range(n)]  # dp[i][j] will store the minimum cost to merge stones[i:j+1]

        # Iterate over all possible lengths of subsequences of stones.
        for length in range(k, n + 1):  # Subsequence lengths from k to n
            for i in range(n - length + 1):  # Start of the subsequence
                j = i + length - 1  # End of the subsequence
                dp[i][j] = float('inf')  # Initialize to infinity, to find the minimum cost
                
                # Try splitting the subsequence into smaller subsequences
                for mid in range(i, j, k - 1):  # Try all valid positions to split
                    dp[i][j] = min(dp[i][j], dp[i][mid] + dp[mid + 1][j])  # Minimize the cost

                # If we can merge all stones into one pile, add the cost of the merged stones
                if (length - 1) % (k - 1) == 0:
                    dp[i][j] += prefix[j + 1] - prefix[i]  # Add the total cost of stones in this range

        # Return the minimum cost to merge all stones from 0 to n-1.
        return dp[0][n - 1]
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

        arr = input().split()
        n = int(arr[0])
        k = int(arr[1])

        stones = IntArray().Input(n)

        obj = Solution()
        res = obj.mergeStones(n, k, stones)

        print(res)

# } Driver Code Ends