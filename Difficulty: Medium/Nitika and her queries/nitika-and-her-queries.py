# User function Template for python3

class Solution:
    def specialXor(self, N, Q, a, query):
        from functools import reduce
        
        # Calculating the XOR of the entire array 'a' using reduce function
        xor = reduce(lambda x, y: x ^ y, a)

        # Segment Tree class to handle range XOR queries
        class SegmentTree:
            def __init__(self, arr):
                # Initializing the array for segment tree
                self.arr = [0] * len(arr) + arr
                
                # Building the segment tree
                for ix in range(len(self.arr)//2 - 1, 0, -1):
                    self.arr[ix] = self.arr[ix << 1] ^ self.arr[ix << 1 | 1]

            def que(self, sta, sto):
                # Adjusting the indices for the segment tree query
                n = len(self.arr) // 2
                left = sta + n - 1
                right = sto + n

                ret = 0
                while left < right:
                    # If the left index is odd, include the value in the result
                    if left & 1:
                        ret ^= self.arr[left]
                        left += 1
                    # If the right index is odd, include the value in the result
                    if right & 1:
                        right -= 1
                        ret ^= self.arr[right]
                    left >>= 1
                    right >>= 1
                return ret
        
        # Initializing the segment tree
        st = SegmentTree(a)
        ret = []

        # For each query, calculate the XOR result and store it in the result list
        for sta, sto in query:
            ret.append(xor ^ st.que(sta, sto))
        
        return ret
#{ 
 # Driver Code Starts
#Initial Template for Python 3

import sys 
sys.setrecursionlimit(10**5) 

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N, Q = map(int,input().strip().split())
        a = list(map(int, input().strip().split()))
        query = [[0 for j in range(2)] for i in range(Q)]
        for i in range(Q):
            l, r = map(int,input().strip().split())
            query[i][0] = l
            query[i][1] = r
        
        ob = Solution()
        ans = ob.specialXor(N, Q, a, query)
        for i in ans:
            print(i)
        print("~")
# } Driver Code Ends