import heapq

class Solution:
    def kthLargest(self, k, arr, n):
        heap = []
        res = []
        
        for num in arr:
            # If the heap has less than k elements, push the current number
            if len(heap) < k:
                heapq.heappush(heap, num)
                res.append(-1 if len(heap) < k else heap[0])
            else:
                # If the heap has k elements, replace the smallest element with the current number
                heapq.heappushpop(heap, num)
                res.append(heap[0])
        
        return res

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        k,n=map(int,input().split())
        arr=list(map(int,input().split()))
        
        ob = Solution()
        print(*ob.kthLargest(k,arr,n))
        print("~")
# } Driver Code Ends