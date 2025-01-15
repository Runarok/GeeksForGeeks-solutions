#User function Template for python3

class Solution:
    
    #Function to check if two strings are isomorphic.
    def areIsomorphic(self,s1,s2):
        if len(s1) != len(s2):
            return False
        
        mapping_s1 = {}
        mapping_s2 = {}
        
        for c1, c2 in zip(s1, s2):
            if c1 in mapping_s1 and mapping_s1[c1] != c2:
                return False
            if c2 in mapping_s2 and mapping_s2[c2] != c1:
                return False
            mapping_s1[c1] = c2
            mapping_s2[c2] = c1
        
        return True

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import atexit
import io
import sys
from collections import defaultdict

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
        p = str(input())
        ob = Solution()
        if (ob.areIsomorphic(s, p)):
            print("true")
        else:
            print("false")
        print("~")

# } Driver Code Ends