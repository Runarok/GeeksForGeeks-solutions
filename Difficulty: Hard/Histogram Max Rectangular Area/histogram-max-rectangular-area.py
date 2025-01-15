#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3


class Solution:
    
    # Function to find largest rectangular area possible in a given histogram.
    def getMaxArea(self, arr):
        # Create an empty stack
        stack = []
        max_area = 0
        index = 0
        
        while index < len(arr):
            # If this bar is higher than the bar at stack top, push it to the stack
            if not stack or arr[index] >= arr[stack[-1]]:
                stack.append(index)
                index += 1
            else:
                # Pop the top
                top_of_stack = stack.pop()
                # Calculate the area with arr[top_of_stack] as the smallest height
                area = (arr[top_of_stack] * 
                        ((index - stack[-1] - 1) if stack else index))
                # Update max_area, if needed
                max_area = max(max_area, area)
        
        # Now, pop the remaining bars from the stack and calculate area with each popped bar
        while stack:
            top_of_stack = stack.pop()
            area = (arr[top_of_stack] * 
                    ((index - stack[-1] - 1) if stack else index))
            max_area = max(max_area, area)
        
        return max_area



#{ 
 # Driver Code Starts.
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.getMaxArea(arr)
        print(res)
        print("~")
        t -= 1


# } Driver Code Ends