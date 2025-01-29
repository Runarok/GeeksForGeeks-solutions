class Solution:
    def minVal(self, num1, num2):
        count_bits_num2 = bin(num2).count('1')  # Count the set bits in num2
        
        result = 0  # Initialize result
        
        # Use set bits of num1 to minimize XOR
        for i in range(31, -1, -1):
            if count_bits_num2 > 0 and (num1 & (1 << i)):
                result |= (1 << i)
                count_bits_num2 -= 1
        
        # If there are remaining set bits, add them in the lowest positions
        for i in range(32):
            if count_bits_num2 == 0:
                break
            if not (result & (1 << i)):
                result |= (1 << i)
                count_bits_num2 -= 1
        
        return result
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

if __name__=='__main__':
    t = int(input())
    for i in range(t):
        a = int(input())
        b = int(input())
        
        ob= Solution()
        print(ob.minVal(a,b))
        print("~")
# } Driver Code Ends