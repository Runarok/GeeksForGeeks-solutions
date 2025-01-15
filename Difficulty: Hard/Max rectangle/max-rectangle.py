#{ 
 # Driver Code Starts
# Initial Template for Python 3


# } Driver Code Ends
#User function Template for python3
class Solution:
    def maxArea(self, mat):
        if not mat or not mat[0]:
            return 0

        n, m = len(mat), len(mat[0])
        max_area = 0
        heights = [0] * m

        for i in range(n):
            for j in range(m):
                # Update heights for histogram
                if mat[i][j] == 0:
                    heights[j] = 0
                else:
                    heights[j] += 1
            
            # Calculate the maximum area for the current histogram
            max_area = max(max_area, self.maxHistogramArea(heights))

        return max_area

    def maxHistogramArea(self, heights):
        stack = []
        max_area = 0
        heights.append(0)  # Sentinel value to ensure the stack is emptied at the end

        for i in range(len(heights)):
            while stack and heights[i] < heights[stack[-1]]:
                h = heights[stack.pop()]
                w = i if not stack else i - stack[-1] - 1
                max_area = max(max_area, h * w)
            stack.append(i)

        return max_area


#{ 
 # Driver Code Starts.

# Driver Code
if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        R = int(input())
        C = int(input())
        mat = []
        for i in range(R):
            line = [int(x) for x in input().strip().split()]
            mat.append(line)
        print(Solution().maxArea(mat))
        print("~")

# } Driver Code Ends