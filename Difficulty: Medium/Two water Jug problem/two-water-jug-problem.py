from collections import deque

class Solution:
    def minSteps(self, m, n, d):
        # Helper function to calculate gcd of two numbers
        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a
        
        # If d is greater than the capacity of either jug, it's impossible to measure
        if d > max(m, n): 
            return -1
        
        # If d is not a multiple of gcd(m, n), it's impossible to measure
        if d % gcd(m, n) != 0:
            return -1
        
        # Set to track visited states (a, b) for the jugs
        visited = set()
        
        # Queue to perform BFS: each element is a tuple ([a, b], steps)
        queue = deque()
        queue.append(([0, 0], 0))  # Start with both jugs empty
        visited.add((0, 0))  # Mark initial state as visited
        
        # BFS to find the minimum steps
        while queue:
            jugs, steps = queue.popleft()
            a, b = jugs[0], jugs[1]
            
            # Possible operations
            ops = [
                (m, b),  # Fill first jug
                (a, n),  # Fill second jug
                (a, 0),  # Empty first jug
                (0, b),  # Empty second jug
                (min(a + b, m), max(0, b - (m - a))),  # Pour from second jug to first
                (max(0, a - (n - b)), min(a + b, n))   # Pour from first jug to second
            ]
            
            # If either jug has the desired amount, return the number of steps
            if a == d or b == d:
                return steps
            
            # For each operation, if the state has not been visited, add it to the queue
            for x in ops:
                if x not in visited:
                    queue.append((x, steps + 1))
                    visited.add(x)
        
        # If it's impossible to measure 'd' amount, return -1
        return -1

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		m, n, d = map(int,input().strip().split())
		ob = Solution()
		ans = ob.minSteps(m, n, d)
		print(ans)
# } Driver Code Ends