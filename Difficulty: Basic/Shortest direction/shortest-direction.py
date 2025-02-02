# User function Template for python3

class Solution:
    def shortestPath(self, directions):
        # Initialize position coordinates [vertical, horizontal]
        position = [0, 0]

        # Process each direction and update the position
        for direction in directions:
            if direction == 'N':
                position[0] += 1  # Move north (increase vertical position)
            elif direction == 'S':
                position[0] -= 1  # Move south (decrease vertical position)
            elif direction == 'E':
                position[1] += 1  # Move east (increase horizontal position)
            elif direction == 'W':
                position[1] -= 1  # Move west (decrease horizontal position)

        # Build the shortest path string
        result = ''
        if position[1] > 0:
            result += 'E' * position[1]  # Move east
        if position[0] > 0:
            result += 'N' * position[0]  # Move north
        if position[0] < 0:
            result += 'S' * (-position[0])  # Move south
        if position[1] < 0:
            result += 'W' * (-position[1])  # Move west

        return result

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        s = input().strip()
        
        ob = Solution()
        ans = ob.shortestPath(s)
        print(ans)
# } Driver Code Ends