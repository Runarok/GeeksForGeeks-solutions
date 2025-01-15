#User function Template for python3

class Solution:
    def closedIslands(self, matrix, N, M):
        def is_closed_island(x, y):
            if x < 0 or x >= N or y < 0 or y >= M:
                return False
            if matrix[x][y] == 0:
                return True
            
            matrix[x][y] = 0  # Mark as visited
            up = is_closed_island(x - 1, y)
            down = is_closed_island(x + 1, y)
            left = is_closed_island(x, y - 1)
            right = is_closed_island(x, y + 1)
            
            return up and down and left and right
        
        count = 0
        for i in range(1, N - 1):
            for j in range(1, M - 1):
                if matrix[i][j] == 1:
                    if is_closed_island(i, j):
                        count += 1
        return count



#{ 
 # Driver Code Starts
#Initial Template for Python 3
		
if __name__ == '__main__':
    T=int(input())
    for i in range(T):
        N, M = map(int,input().split())
        matrix = []
        for i in range(N):
            nums = list(map(int,input().split()))
            matrix.append(nums)
        obj = Solution()
        print(obj.closedIslands(matrix, N, M))
        print("~")
# } Driver Code Ends