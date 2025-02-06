from collections import deque

class Solution:
    def rotation(self, N):
        # code here
        if N <= 0:
            return []
        
        # Initialize the sorted deck
        q = deque(range(0, N))
        result = [-1] * N
        
        # Simulate the described process
        for i in range(1, N + 1):
            # Perform the step
            for _ in range(i % len(q)):
                q.append(q[0])
                q.popleft()
            
            result[q[0]] = i
            q.popleft()
        
        return result
#{ 
 # Driver Code Starts
#Initial Template for Python 3



if __name__ == '__main__': 
    ob = Solution()
    t = int (input ())
    for _ in range (t):
        N = int(input())
        ans = ob.rotation(N);
        print(*ans)


# } Driver Code Ends