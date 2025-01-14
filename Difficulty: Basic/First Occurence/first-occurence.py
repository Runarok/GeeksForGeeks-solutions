class Solution:
    def firstOccurence(self, txt, pat):
        m, n = len(txt), len(pat)
        
        # Loop through the text to find the first occurrence of the pattern
        for i in range(m - n + 1):
            # Check if the substring matches the pattern
            if txt[i:i + n] == pat:
                return i
        
        return -1


#{ 
 # Driver Code Starts
#Contributed by : Nagendra Jha

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
    for cases in range(t):
        s = input()
        p = input()
        ob = Solution()
        print(ob.firstOccurence(s, p))

        print("~")

# } Driver Code Ends