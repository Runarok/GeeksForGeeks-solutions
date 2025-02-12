#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for Python3
import heapq

class Solution:
    def maxCombinations(self, N, C, A, B):
        # Sorting both arrays to get the largest sums first
        A.sort()
        B.sort()
        n = len(A)
        result = []  # List to store the top C maximum sums
        
        # Max heap initialized with the largest pair sum
        max_heap = [(-1 * (A[n - 1] + B[n - 1]), n - 1, n - 1)]
        visited_pairs = set()  # To track visited index pairs
        
        while len(result) < C:
            curr_sum, indexA, indexB = heapq.heappop(max_heap)
            
            # If the pair has already been processed, skip it
            if (indexA, indexB) in visited_pairs:
                continue
                
            visited_pairs.add((indexA, indexB))
            result.append(-curr_sum)  # Convert back to positive sum
            
            # Push the next possible largest sums into the heap
            if indexA > 0:
                heapq.heappush(max_heap, (-1 * (A[indexA - 1] + B[indexB]), indexA - 1, indexB))
            if indexB > 0:
                heapq.heappush(max_heap, (-1 * (A[indexA] + B[indexB - 1]), indexA, indexB - 1))

        return result


#{ 
 # Driver Code Starts.
if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        N, K = list(map(int, input().split()))
        A = list(map(int, input().split()))
        B = list(map(int, input().split()))
        ob = Solution()
        res = ob.maxCombinations(N, K, A, B)
        for val in res:
            print(val, end =' ')
        print()
        print("~")
# } Driver Code Ends