#Back-end complete function Template for Python 3
from collections import defaultdict

class Solution:
    def maxPoints(self, X, Y, N):
        # If there are 2 or fewer points, all points lie on the same line
        if N <= 2:
            return N

        max_points = 0  # Variable to store the maximum number of points on the same line
        
        # Loop through each point, considering it as the base point
        for i in range(N):
            slopes = defaultdict(int)  # Dictionary to store the frequency of different slopes
            duplicate = 1  # Count for points that are identical to the current base point
            current_max = 0  # Variable to store the maximum number of points on the same line for the current base point
            
            # Loop through the remaining points to calculate slopes
            for j in range(i + 1, N):
                # Check if both points are identical
                if X[i] == X[j] and Y[i] == Y[j]:
                    duplicate += 1  # Increase the duplicate count if the points are identical
                # Check if both points have the same x-coordinate (vertical line)
                elif X[i] == X[j]:
                    slopes['inf'] += 1  # Use 'inf' to represent a vertical line slope
                else:
                    # Calculate the slope between the points (y2 - y1) / (x2 - x1)
                    slope = (Y[j] - Y[i]) / (X[j] - X[i])
                    slopes[slope] += 1  # Increment the count for this slope
            
            # Get the maximum count of points with the same slope (max on the same line)
            current_max = max(slopes.values(), default=0)
            # Update the overall maximum, adding duplicates to the count
            max_points = max(max_points, current_max + duplicate)
        
        return max_points  # Return the maximum number of points on the same line


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n=int(input())
        xarr=[int(x) for x in input().split()]
        yarr=[int(x) for x in input().split()]
        ob = Solution()
        ans = ob.maxPoints(xarr, yarr, n)
        print(ans)
        print("~")
# } Driver Code Ends