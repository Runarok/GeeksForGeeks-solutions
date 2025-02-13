class Solution:
    def countIntegralPoints(self, x1, y1, x2, y2):
        # Function to count the number of integral points between two given points
        
        # Helper function to compute the greatest common divisor (GCD)
        def gcd(x, y):
            while y:
                x, y = y, x % y  # Continue dividing until the remainder is zero
            return x

        # Helper function to calculate the number of integral points between two points
        def boundingPoints(p, q):
            # Case 1: Vertical line (same x-coordinates)
            if p[0] == q[0]:
                return abs(p[1] - q[1]) - 1  # Number of integral points along the y-axis

            # Case 2: Horizontal line (same y-coordinates)
            elif p[1] == q[1]:
                return abs(p[0] - q[0]) - 1  # Number of integral points along the x-axis

            # Case 3: Diagonal line, use GCD of differences in x and y to find number of integral points
            else:
                return gcd(abs(p[0] - q[0]), abs(p[1] - q[1])) - 1
        
        # Main function to compute the result
        def main():
            p = [x1, y1]  # Point 1 coordinates
            q = [x2, y2]  # Point 2 coordinates
            
            # Calculate the bounding points (integral points between p and q)
            B = boundingPoints(p, q)

            # If no integral points exist, return 0
            if B < 0:
                return 0

            # Return the calculated number of bounding points
            return B
        
        # Call the main function and return its result
        return main()

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        x1, y1, x2, y2 = map(int, input().split())

        ob = Solution()
        print(ob.countIntegralPoints(x1, y1, x2, y2))

# } Driver Code Ends