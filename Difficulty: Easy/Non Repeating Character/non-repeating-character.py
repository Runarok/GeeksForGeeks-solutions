class Solution:
    
    # Function to find the first non-repeating character in a string
    def nonRepeatingChar(self, s):
        # Create a dictionary to store the frequency of characters
        freq = {}
        
        # Iterate through the string and count the frequency of each character
        for char in s:
            if char in freq:
                freq[char] += 1
            else:
                freq[char] = 1
        
        # Iterate through the string again to find the first non-repeating character
        for char in s:
            if freq[char] == 1:
                return char
        
        # If no non-repeating character is found, return '$'
        return '$'



#{ 
 # Driver Code Starts
#Initial Template for Python 3

import atexit
import io
import sys

_INPUT_LINES = sys.stdin.read().splitlines()
input = iter(_INPUT_LINES).__next__
_OUTPUT_BUFFER = io.StringIO()
sys.stdout = _OUTPUT_BUFFER


@atexit.register
def write():
    sys.__stdout__.write(_OUTPUT_BUFFER.getvalue())


if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        s = str(input())
        obj = Solution()
        ans = obj.nonRepeatingChar(s)
        if (ans != '$'):
            print(ans)
        else:
            print(-1)

        print("~")

# } Driver Code Ends
