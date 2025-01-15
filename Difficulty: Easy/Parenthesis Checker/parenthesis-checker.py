class Solution:
    # Function to check if brackets are balanced or not.
    def isParenthesisBalanced(self, s):
        # Initialize a stack to keep track of opening brackets.
        stack = []
        
        # Dictionary to map closing brackets to their corresponding opening brackets.
        matching_bracket = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        # Iterate through each character in the string.
        for char in s:
            # If it's an opening bracket, push it to the stack.
            if char in "({[":
                stack.append(char)
            # If it's a closing bracket, check if the top of the stack matches.
            elif char in ")}]":
                if not stack or stack.pop() != matching_bracket[char]:
                    return False

        # If the stack is empty, all brackets were matched correctly.
        return len(stack) == 0


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import atexit
import io
import sys

#Contributed by : Nagendra Jha

_INPUT_LINES = sys.stdin.read().splitlines()
input = iter(_INPUT_LINES).__next__
_OUTPUT_BUFFER = io.StringIO()
sys.stdout = _OUTPUT_BUFFER


@atexit.register
def write():
    sys.__stdout__.write(_OUTPUT_BUFFER.getvalue())


if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases):
        #n = int(input())
        #n,k = map(int,imput().strip().split())
        #a = list(map(int,input().strip().split()))
        s = str(input())
        obj = Solution()
        if obj.isParenthesisBalanced(s):
            print("true")
        else:
            print("false")
        print("~")

# } Driver Code Ends
