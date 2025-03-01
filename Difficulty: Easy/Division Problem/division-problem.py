class Solution:
    def findX(self, A, B):
        # Iterate over all possible values of x from 1 to the maximum of A and B
        for x in range(1, max(A, B) + 1):
            # Check if (A * x - 1) is divisible by B
            if (A * x - 1) % B == 0:
                return x  # Return the value of x if the condition is satisfied
        return -1  # Return -1 if no valid x is found

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        A, B = [int(x) for x in input().split()]
        
        ob = Solution()
        print(ob.findX(A, B))
# } Driver Code Ends