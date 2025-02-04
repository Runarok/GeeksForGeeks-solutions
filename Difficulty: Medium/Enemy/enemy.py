from typing import List

class Solution:
    def largestArea(self, n: int, m: int, k: int, enemy: List[List[int]]) -> int:
        # Initialize lists to store enemy row and column positions
        enemyRows = [-1]
        enemyCols = [-1]

        # Store enemy positions in separate lists for rows and columns
        for i in range(k):
            enemyRows.append(enemy[i][0] - 1)
            enemyCols.append(enemy[i][1] - 1)

        # Append the last row and column index to consider boundaries
        enemyRows.append(n)
        enemyCols.append(m)

        # Sort the row and column lists to process gaps efficiently
        enemyRows.sort()
        enemyCols.sort()

        # Variables to store the maximum gap between consecutive enemy rows and columns
        maxRowGap = 0
        maxColGap = 0

        # Calculate the maximum gap between consecutive enemy rows
        for i in range(1, len(enemyRows)):
            prevRow = enemyRows[i - 1]
            currRow = enemyRows[i]
            maxRowGap = max(maxRowGap, currRow - prevRow - 1)

        # Calculate the maximum gap between consecutive enemy columns
        for i in range(1, len(enemyCols)):
            prevCol = enemyCols[i - 1]
            currCol = enemyCols[i]
            maxColGap = max(maxColGap, currCol - prevCol - 1)

        # The largest possible area is the product of the largest row and column gaps
        return maxRowGap * maxColGap


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
        
        a=IntArray().Input(3)
        n,m,k=a[0],a[1],a[2]
        
        e=IntMatrix().Input(a[2], 2)
        
        obj = Solution()
        res = obj.largestArea(n,m,k, e)
        
        print(res)
        

        print("~")
# } Driver Code Ends