class Solution:
    def reverseSpiral(self, R, C, a):
        # Initialize the boundaries of the matrix
        top, bottom, left, right = 0, R - 1, 0, C - 1
        result = []
        
        # Traverse the matrix in spiral order
        while top <= bottom and left <= right:
            # Traverse from left to right along the top row
            for i in range(left, right + 1):
                result.append(a[top][i])
            top += 1
            
            # Traverse from top to bottom along the right column
            for i in range(top, bottom + 1):
                result.append(a[i][right])
            right -= 1
            
            # If there are still rows left, traverse from right to left along the bottom row
            if top <= bottom:
                for i in range(right, left - 1, -1):
                    result.append(a[bottom][i])
                bottom -= 1
            
            # If there are still columns left, traverse from bottom to top along the left column
            if left <= right:
                for i in range(bottom, top - 1, -1):
                    result.append(a[i][left])
                left += 1
        
        # Reverse the result to return the spiral in reverse order
        return result[::-1]

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t=int(input())
    for _ in range(t):
        R,C=[int(x) for x in input().split()]
        a=[[0]*C for c in range(R)]
        arr=input().split()
        for i in range(R*C):
            a[i//C][i%C]=int(arr[i])
            
        ob=Solution()
        ans=ob.reverseSpiral(R,C,a)
        for i in range(len(ans)):
            print(ans[i],end=" ")
            
        print()
        print("~")
# } Driver Code Ends