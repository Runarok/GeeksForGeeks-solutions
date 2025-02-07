# User function Template for Python3

class Solution:
    def findStartingPoint(self, x, y, pathCoordinates):
        # Iterate through the list of path movements and reverse them to find the starting point
        for move_x, move_y in pathCoordinates:
            x -= move_x  # Subtract x movement
            y -= move_y  # Subtract y movement
        
        # Return the computed starting coordinates
        return (x, y)
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		x, y = input().split()
		x = int(x); y = int(y);
		n = int(input())
		pathCoordinates = []
		for _ in range(n):
			pathCoordinates.append(list(map(int, input().split())))
		obj = Solution()
		ans = obj.findStartingPoint(x, y, pathCoordinates)
		for _ in ans:
			print(_, end = " ")
		print()


# } Driver Code Ends