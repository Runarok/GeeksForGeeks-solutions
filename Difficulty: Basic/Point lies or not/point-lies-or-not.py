# User function Template for Python3

class Solution:
    def isInsideTri(self, x1, y1, x2, y2, x3, y3, x, y):
        # Helper function to calculate the area of a triangle given three points
        def calculate_area(a1, b1, a2, b2, a3, b3):
            return abs((a1 * (b2 - b3) + a2 * (b3 - b1) + a3 * (b1 - b2)) / 2)

        # Calculate the area of the original triangle
        total_area = calculate_area(x1, y1, x2, y2, x3, y3)
        
        # Calculate the area of the three sub-triangles formed with the given point (x, y)
        area1 = calculate_area(x1, y1, x2, y2, x, y)
        area2 = calculate_area(x1, y1, x, y, x3, y3)
        area3 = calculate_area(x, y, x2, y2, x3, y3)
        
        # If the sum of the sub-triangle areas equals the original triangle's area, the point is inside
        if (area1 + area2 + area3) == total_area:
            return 'Yes'
        return 'No'
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        x1,y1,x2,y2,x3,y3=map(int,input().split())
        x,y=map(int,input().split())
        
        ob = Solution()
        print(ob.isInsideTri(x1,y1,x2,y2,x3,y3,x,y))
# } Driver Code Ends