#{ 
 # Driver Code Starts
#Initial Template for Python 3

import heapq

# } Driver Code Ends

# User function Template for python3
import heapq as hq

class Solution:
    def Kclosest(self, arr, n, x, k):
        # Convert elements to (distance, value) tuples
        for idx in range(n):
            distance = abs(x - arr[idx])
            arr[idx] = (distance, arr[idx])
            
        # Convert list into a min-heap based on distance
        hq.heapify(arr)
        
        result = []
        
        # Extract k closest elements
        while k > 0:
            result.append(hq.heappop(arr)[1])
            k -= 1
        
        # Return the sorted list of k closest elements
        return sorted(result)

#{ 
 # Driver Code Starts.
if __name__=="__main__":
    t=int(input())
    for _ in range(t):
        line=input().strip().split()
        n=int( line[0] )
        x=int( line[1] )
        k=int( line[2] )
        arr=[int(x) for x in input().strip().split()]
        obj = Solution()
        result=obj.Kclosest(arr, n, x, k)
        for i in result:
            print(i, end=' ')
        print()
        print("~")
# } Driver Code Ends