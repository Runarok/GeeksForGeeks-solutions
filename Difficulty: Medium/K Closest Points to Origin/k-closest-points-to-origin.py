#{ 
 # Driver Code Starts
#Initial Template for Python 3
from typing import List
import heapq


# } Driver Code Ends

# User function Template for python3
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        # Function to calculate the Euclidean distance of a point (x, y) from the origin
        def calc_distance(x, y):
            return round((x**2 + y**2)**0.5, 2)

        # Dictionary to store points grouped by their distances from the origin
        pairs_with_distances = {}

        # Calculate the distance for each point and add it to the dictionary
        for (x, y) in points:
            distance = calc_distance(x, y)
            if distance in pairs_with_distances:
                pairs_with_distances[distance].append((x, y))
            else:
                pairs_with_distances[distance] = [(x, y)]
        
        # Sort the dictionary items based on distance (ascending order)
        pairs_with_distances = sorted(pairs_with_distances.items())
        
        res = []  # List to store the result
        # Iterate through the sorted distances and pick the k closest points
        for distance, pairs in pairs_with_distances:
            for pair in pairs:
                res.append(pair)
                k -= 1
                if k == 0:
                    return res  # Return the result when we've found k closest points
        
        return res  # Return the result if k points are found
        

#{ 
 # Driver Code Starts.

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        t -= 1
        k = int(input())
        n = int(input())
        points = []
        for _ in range(n):
            x, y = map(int, input().split())
            points.append([x, y])
        
        solution = Solution()
        ans = solution.kClosest(points, k)
        ans.sort()
        for point in ans:
            print(point[0], point[1])
        print("~")

# } Driver Code Ends