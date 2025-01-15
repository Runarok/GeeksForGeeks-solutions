#User function Template for python3

from collections import Counter

class Solution:
    #Function to find the maximum occurring character in a string.
    def getMaxOccurringChar(self, s):
        # Count frequencies of each character
        freq = Counter(s)
        
        # Initialize variables to track the result
        max_char = ''
        max_freq = 0
        
        # Iterate through the frequency map
        for char in freq:
            # Check if we found a character with a higher frequency, or the same frequency but lexicographically smaller
            if freq[char] > max_freq or (freq[char] == max_freq and char < max_char):
                max_char = char
                max_freq = freq[char]
        
        return max_char

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
        print(Solution().getMaxOccurringChar(s))
        print("~")

# } Driver Code Ends