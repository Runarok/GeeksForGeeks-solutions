#User function Template for python3

class Solution:
    def minTime(self, S1, S2, N):
        low, high = 0, N * min(S1, S2)
    
        while low <= high:
            mid = (low + high) // 2
            total_scanned = (mid // S1) + (mid // S2)
            
            if total_scanned >= N:
                high = mid - 1  # Try smaller time
            else:
                low = mid + 1  # Increase time
        return low

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        S1, S2, N = [int(x) for x in input().split()]
        
        ob = Solution()
        print(ob.minTime(S1, S2, N))
# } Driver Code Ends