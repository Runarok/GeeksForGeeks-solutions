from collections import deque

class Solution:
    def modifyQueue(self, q, k):
        # Initialize an empty list to use as a stack
        s = []

        # Pop the first k elements from the queue and push them into the stack
        for _ in range(k):
            s.append(q.popleft())

        # Pop all elements from the stack and push them back into the queue
        while s:
            q.append(s.pop())

        # Now, move the remaining elements from the front of the queue to the back
        # to preserve their order
        for _ in range(len(q) - k):
            q.append(q.popleft())

        return q


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
    for cases in range(test_cases) :
        n,k = map(int,input().strip().split())
        a = list(map(int,input().strip().split()))

        queue = deque() # our queue to be used
        for i in range(n):
            queue.append(a[i]) # enqueue elements of array in our queue
        
        ob = Solution()
        result = ob.modifyQueue(queue,k)
        list_result = []
        while result:
            list_result.append(result.popleft())
        print(*list_result)
        
        print("~")
# } Driver Code Ends