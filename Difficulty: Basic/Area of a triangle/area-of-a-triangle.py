# User function Template for Python3

class Solution:
    def findArea(self, A, B, C):
        # Calculate the semi-perimeter
        semi_perimeter = (A + B + C) / 2.0
        
        # Check if the given sides can form a valid triangle
        if (A + B <= C) or (A + C <= B) or (B + C <= A):
            return 0.000  # Return 0 if the triangle is invalid
        
        # Apply Heron's formula to calculate the area
        area = (semi_perimeter * (semi_perimeter - A) * (semi_perimeter - B) * (semi_perimeter - C)) ** 0.5
        
        return area
#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        A,B,C=map(int,input().strip().split(' '))
        ob=Solution()
        print("%.3f"%ob.findArea(A,B,C))
        print("~")
# } Driver Code Ends