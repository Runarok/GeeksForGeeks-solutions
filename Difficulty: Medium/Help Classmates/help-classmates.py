# User function Template for python3

class Solution:
    def help_classmate(self, arr, n):
        # Initialize an empty stack to keep track of elements
        stack = []
        # Initialize the result list with zeros
        ans = [0] * len(arr)

        # Traverse the array from right to left
        for i in range(len(arr) - 1, -1, -1):
            # Pop elements from the stack that are greater than or equal to the current element
            while stack and stack[-1] >= arr[i]:
                stack.pop()

            # If the stack is empty, no smaller element exists, so assign -1
            if not stack:
                ans[i] = -1
            else:
                # Otherwise, the top of the stack is the next smaller element
                ans[i] = stack[-1]
            
            # Push the current element onto the stack for future comparisons
            stack.append(arr[i])

        return ans
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=="__main__":
    for _ in range(int(input())):
        n = int(input())
        arr = [ int(x) for x in input().split() ]
        obj = Solution()
        result = obj.help_classmate(arr,n)
        for i in result:
            print(i,end=' ')
        print()

        print("~")
# } Driver Code Ends