class Solution:
    def matrixSum(self, n, m, mat, q, queries):
        # Direction vectors for 8 neighbors (for type 1 queries)
        dx = [-1, 1, 0, 0, -1, 1, -1, 1]   
        dy = [0, 0, -1, 1, -1, 1, 1, -1]
        
        # Direction vectors for 16 neighbors (for type 2 queries)
        dx2 = [-2, -2, -2, -2, 2, 2, 2, 2, -1, -1, 1, 1, 0, 0, -2, 2] 
        dy2 = [-1, 1, -2, 2, -2, 2, -1, 1, -2, 2, -2, 2, -2, 2, 0, 0]  

        ans = []  # List to store results for each query
        
        # Process each query
        for a, i, j in queries:
            res = 0  # Initialize result for this query
            
            if a == 1:
                # Type 1 query: Sum of values in the 8 neighboring cells
                for k in range(8):
                    x = i + dx[k]
                    y = j + dy[k]
                    if 0 <= x < n and 0 <= y < m:  # Check bounds
                        res += mat[x][y]
                ans.append(res)
            else:
                # Type 2 query: Sum of values in the 16 neighboring cells
                for k in range(16):
                    x = i + dx2[k]
                    y = j + dy2[k]
                    if 0 <= x < n and 0 <= y < m:  # Check bounds
                        res += mat[x][y]
                ans.append(res)
        
        return ans  # Return the list of results for all queries

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n, m = [int(x) for x in input().split()]
        mat = [[0]*m for x in range(n)]
        for i in range(n):
            arr = input().split()
            for j in range(m):
                mat[i][j] = int(arr[j])
        q = int(input())
        queries = [[0]*3 for x in range(q)]
        for i in range(q):
            a = input().split()
            for j in range(3):
                queries[i][j] = int(a[j])
        
        ob = Solution()
        ans = ob.matrixSum(n, m, mat, q, queries)
        for i in range(q):
            print(ans[i])
# } Driver Code Ends