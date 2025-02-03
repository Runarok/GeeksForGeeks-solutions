from typing import List

class Solution:
    def findAllPossiblePaths(self, n: int, m: int, grid: List[List[int]]) -> List[List[int]]:
        # Initialize dp array to store possible paths
        dp = [[[] for _ in range(m)] for _ in range(n)]
        
        # Traverse the grid from bottom-right to top-left
        for i in range(n - 1, -1, -1):
            for j in range(m - 1, -1, -1):
                # Base case: at the bottom-right corner
                if i == n - 1 and j == m - 1:
                    dp[i][j].append([grid[i][j]])
                # If we're in the last row, only move right
                elif i == n - 1:
                    for path in dp[i][j + 1]:
                        temp = [grid[i][j]] + path
                        dp[i][j].append(temp)
                # If we're in the last column, only move down
                elif j == m - 1:
                    for path in dp[i + 1][j]:
                        temp = [grid[i][j]] + path
                        dp[i][j].append(temp)
                # Otherwise, move both right and down
                else:
                    for path in dp[i + 1][j]:
                        temp = [grid[i][j]] + path
                        dp[i][j].append(temp)
                    for path in dp[i][j + 1]:
                        temp = [grid[i][j]] + path
                        dp[i][j].append(temp)

        # Return all the paths from the top-left corner
        return dp[0][0]

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



class IntMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        a=IntArray().Input(2)
        
        
        grid=IntMatrix().Input(a[0], a[1])
        
        obj = Solution()
        res = obj.findAllPossiblePaths(a[0],a[1], grid)
        
        IntMatrix().Print(res)
        

        print("~")
# } Driver Code Ends