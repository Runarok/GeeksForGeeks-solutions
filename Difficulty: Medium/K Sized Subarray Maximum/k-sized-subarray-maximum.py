#User function Template for python3

from collections import deque

class Solution:
    def maxOfSubarrays(self, arr, k):
        result = []
        q = deque()

        for i in range(len(arr)):
            # Remove elements out of the current window
            if q and q[0] < i - k + 1:
                q.popleft()

            # Remove elements smaller than the current element
            while q and arr[q[-1]] <= arr[i]:
                q.pop()

            # Add current element at the end of the deque
            q.append(i)

            # When the window is of size k, add the maximum element (arr[q[0]])
            if i >= k - 1:
                result.append(arr[q[0]])

        return result


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import atexit
import io
import sys
from collections import deque

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
        arr = list(map(int, input().strip().split()))
        k = int(input())
        ob = Solution()
        res = ob.maxOfSubarrays(arr, k)
        for i in range(len(res)):
            print(res[i], end=" ")
        print()
        print("~")
# } Driver Code Ends