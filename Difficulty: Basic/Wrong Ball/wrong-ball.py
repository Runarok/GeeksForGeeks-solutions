class Solution:
    # Function to count the number of balls that are wrongly placed
    def countWrongPlacedBalls(self, balls):
        n = len(balls)  # Get the length of the string
        wrong_count = 0  # Initialize counter for wrong placements

        # Loop through the string indices
        for i in range(n):
            # If the ball is misplaced based on its index (even index for 'B' and odd for 'R')
            if (i % 2 == 0 and balls[i] == 'B') or (i % 2 == 1 and balls[i] == 'R'):
                wrong_count += 1  # Increment the count for wrong placements

        return wrong_count  # Return the final count of misplaced balls
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        s = input().strip()
        
        ob = Solution()
        print(ob.countWrongPlacedBalls(s))
# } Driver Code Ends