# User function Template for python3

class Solution:
    def searchWord(self, grid, word):
        # Get the dimensions of the grid
        rows, cols = len(grid), len(grid[0])
        word_len = len(word)  # Length of the word to search
        result = set()  # To store the starting coordinates where the word is found
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (1, -1), (-1, 1), (-1, -1)]  # Possible directions to move in the grid

        # Helper function to check if a cell is within the grid's bounds
        def is_valid(x, y):
            return 0 <= x < rows and 0 <= y < cols
        
        # Function to search for the word starting from a specific cell (x, y) in the grid
        def search(x, y, dx, dy):
            for i in range(word_len):
                # Calculate the next cell's coordinates
                nx, ny = x + i * dx, y + i * dy
                # If the cell is out of bounds or the character doesn't match, return False
                if not is_valid(nx, ny) or grid[nx][ny] != word[i]:
                    return False
            return True
        
        # Traverse every cell in the grid
        for i in range(rows):
            for j in range(cols):
                # If the first character matches, start searching in all 8 directions
                if grid[i][j] == word[0]:  
                    for dx, dy in directions:
                        # Search in the current direction
                        if search(i, j, dx, dy):
                            result.add((i, j))  # Add the starting position to the result

        # Sort the result before returning it
        return sorted(result)

#{ 
 # Driver Code Starts
# Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        n, m = input().split()
        n = int(n)
        m = int(m)
        grid = []
        for _ in range(n):
            cur = input()
            temp = []
            for __ in cur:
                temp.append(__)
            grid.append(temp)
        word = input()
        obj = Solution()
        ans = obj.searchWord(grid, word)
        for _ in ans:
            for __ in _:
                print(__, end=" ")
            print()
        if len(ans) == 0:
            print(-1)

        print("~")

# } Driver Code Ends