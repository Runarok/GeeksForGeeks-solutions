class Solution:
    def __init__(self):
        # Initialize two stacks: one for storing elements and another for tracking the maximum value.
        self.stack = []
        self.max_stack = []

    # Add an element to the top of the stack
    def push(self, x):
        self.stack.append(x)
        # Update max_stack to track the maximum value at each step
        if not self.max_stack or x >= self.max_stack[-1]:
            self.max_stack.append(x)

    # Remove the top element from the stack
    def pop(self):
        if self.stack:
            popped = self.stack.pop()
            # If the popped element is the current maximum, remove it from max_stack as well
            if self.max_stack and popped == self.max_stack[-1]:
                self.max_stack.pop()

    # Return the top element of the stack
    def peek(self):
        return self.stack[-1] if self.stack else -1

    # Return the maximum element in the stack
    def getMax(self):
        return self.max_stack[-1] if self.max_stack else -1
#{ 
 # Driver Code Starts
# Driver Code
if __name__ == '__main__':
    t = int(input())  # Number of test cases

    for _ in range(t):
        q = int(input())  # Number of queries
        stk = Solution()  # Initialize stack
        results = []

        for _ in range(q):
            query = list(map(int, input().split()))

            if query[0] == 1:
                stk.push(query[1])  # Push operation
            elif query[0] == 2:
                stk.pop()  # Pop operation (no return value)
            elif query[0] == 3:
                results.append(str(stk.peek()))  # Peek operation
            elif query[0] == 4:
                results.append(str(stk.getMax()))  # GetMin operation

        print(" ".join(results))  # Print all results in one line
        print("~")

# } Driver Code Ends