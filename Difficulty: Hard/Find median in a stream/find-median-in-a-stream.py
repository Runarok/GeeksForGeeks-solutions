#{ 
 # Driver Code Starts
#Initial Template for Python 3

import atexit
import io
import sys
import heapq
from collections import  defaultdict
import math


# } Driver Code Ends
#User function Template for python3

''' 
use globals min_heap and max_heap, as per declared in driver code
use heapify modules , already imported by driver code
'''

import heapq

class Solution:
    def __init__(self):
        self.minHeap = []  # To store the larger half
        self.maxHeap = []  # To store the smaller half (negative values for max-heap behavior)

    def balanceHeaps(self):
        # Balance the two heaps such that the difference in size is not more than one
        if len(self.maxHeap) > len(self.minHeap) + 1:
            heapq.heappush(self.minHeap, -heapq.heappop(self.maxHeap))
        elif len(self.minHeap) > len(self.maxHeap):
            heapq.heappush(self.maxHeap, -heapq.heappop(self.minHeap))

    def getMedian(self):
        # Return the median of the data received till now
        if len(self.maxHeap) > len(self.minHeap):
            return -self.maxHeap[0]
        return (-self.maxHeap[0] + self.minHeap[0]) / 2

    def insertHeaps(self, x):
        # Insert the element into one of the heaps
        if not self.maxHeap or x <= -self.maxHeap[0]:
            heapq.heappush(self.maxHeap, -x)
        else:
            heapq.heappush(self.minHeap, x)
        self.balanceHeaps()


#{ 
 # Driver Code Starts.

if __name__ == '__main__':
    t = int(input())
    
    for _ in range(t):
        n = int(input())
        ob=Solution()
        for i in range(n):
            x=int(input())
            ob.insertHeaps(x)
            print(math.floor(ob.getMedian()))

# } Driver Code Ends