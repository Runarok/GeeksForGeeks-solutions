# User function template for Python3
from collections import deque

class Solution:
    def knightInGeekland(self, arr, start):
        # Get the number of rows and columns in the matrix
        numRows = len(arr)
        numCols = len(arr[0])

        # Possible moves of a knight in chess
        knightMoves = [[-2, -1], [-1, -2], [1, -2], [2, -1], 
                       [2, 1], [1, 2], [-1, 2], [-2, 1]]

        # Queue for BFS traversal
        queue = deque()

        # Maximum number of steps we track
        maxSteps = 10**4

        # Array to store points collected at each step
        stepPoints = [0] * (maxSteps + 1)

        # Start position contribution to step 0
        stepPoints[0] += arr[start[0]][start[1]]
        queue.append([start[0], start[1], 0])

        # Mark the start position as visited
        arr[start[0]][start[1]] = -1  

        # BFS traversal
        while queue:
            x, y, step = queue.popleft()

            for moveX, moveY in knightMoves:
                newX, newY = x + moveX, y + moveY

                # Check if new position is within bounds and not visited
                if 0 <= newX < numRows and 0 <= newY < numCols and arr[newX][newY] >= 0:
                    stepPoints[step + 1] += arr[newX][newY]  # Accumulate points at next step
                    arr[newX][newY] = -1  # Mark as visited
                    queue.append([newX, newY, step + 1])

        # Find the step with maximum cumulative points
        bestStep = 0
        maxPoints = 0

        for i in range(maxSteps, -1, -1):
            nextStep = i + stepPoints[i]

            if nextStep <= maxSteps:
                stepPoints[i] += stepPoints[nextStep]

            if stepPoints[i] >= maxPoints:
                bestStep = i
                maxPoints = stepPoints[i]

        return bestStep

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    test_cases = int(input())
    for _ in range (test_cases):
        n,m = map(int, input().split())
        starting_x, starting_y = map(int, input().split())
        orignal_array = []

        for i in range(n):
            l = list(map(int, input().split()))
            orignal_array.append(l)

        res = Solution().knightInGeekland(orignal_array, [starting_x, starting_y])
        print(res)
        print("~")
# } Driver Code Ends