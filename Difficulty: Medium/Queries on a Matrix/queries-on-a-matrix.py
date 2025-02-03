# User function template for Python3

class Solution:
    def solveQueries(self, n, Queries):
        # Initialize a 2D list with zeros, having extra column for easier range updates
        dp = [[0 for _ in range(n + 1)] for _ in range(n + 1)]

        # Process each query and update the dp array
        for y1, x1, y2, x2 in Queries:
            for y in range(y1, y2 + 1):
                dp[y][x1] += 1  # Increment starting column
                dp[y][x2 + 1] -= 1  # Decrement column after the range

        # Compute prefix sum for each row to propagate the updates
        for y in range(n):
            for x in range(1, n):
                dp[y][x] += dp[y][x - 1]  # Accumulate values horizontally

        # Return only the relevant n x n portion of the dp array
        return (row[:n] for row in dp[:n])
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n, q= input().split()
		n = int(n); q = int(q);
		Queries = [];
		for _ in range(q):
			cur = list(map(int, input().split()))
			Queries.append(cur);
		obj = Solution()
		ans = obj.solveQueries(n, Queries)
		for _ in ans:
			for __ in _:
				print(__, end = " ")
			print()

# } Driver Code Ends