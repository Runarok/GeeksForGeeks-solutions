#User function Template for python3

class Solution:
    def ShortestPath(self, targetString):
        # List to store the sequence of moves.
        movesList = []

        # Length of the target string.
        targetLength = len(targetString)

        # Current position (row and column) on the 5x5 grid.
        currentRow, currentCol = 0, 0

        # Iterate through each character in the target string.
        for index in range(targetLength):
            # Find the target character's position in the grid (0-based index).
            targetCharIndex = ord(targetString[index]) - ord('A')
            targetRow, targetCol = divmod(targetCharIndex, 5)

            # Calculate horizontal (column) and vertical (row) movement required.
            horizontalMove = targetCol - currentCol
            verticalMove = targetRow - currentRow

            # Move right if needed.
            while horizontalMove > 0:
                movesList.append("RIGHT")
                horizontalMove -= 1

            # Move left if needed.
            while horizontalMove < 0:
                movesList.append("LEFT")
                horizontalMove += 1

            # Move down if needed.
            while verticalMove > 0:
                movesList.append("DOWN")
                verticalMove -= 1

            # Move up if needed.
            while verticalMove < 0:
                movesList.append("UP")
                verticalMove += 1

            # After reaching the character, press "OK".
            movesList.append("OK")

            # Update current position to the new character's position.
            currentRow, currentCol = targetRow, targetCol

        # Return the complete list of moves.
        return movesList


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=="__main__":
    t=int(input())
    for _ in range(t):
        S=input()
        ob=Solution()
        ans=ob.ShortestPath(S)
        for i in ans:
            print(i,end=" ")
        print()
        print("~")
# } Driver Code Ends