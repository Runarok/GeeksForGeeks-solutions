#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for Python3
import heapq

class Solution:
    def replaceWithRank(self, N, arr):
        # Creating a min heap from the array elements
        heap = [i for i in arr]
        heapq.heapify(heap)
        
        # Dictionary to store ranks of unique elements
        rank_dict = {}
        rank = 1
        
        # Assign ranks to unique elements in sorted order
        while heap:
            element = heapq.heappop(heap)
            if element not in rank_dict:
                rank_dict[element] = rank
                rank += 1
        
        # Replace elements in the original array with their ranks
        for i in range(len(arr)):
            arr[i] = rank_dict[arr[i]]
        
        return arr


#{ 
 # Driver Code Starts.
if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        N = int(input())
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.replaceWithRank(N, arr)
        for rank in res:
            print(rank, end = ' ')
        print()
        print("~")
# } Driver Code Ends