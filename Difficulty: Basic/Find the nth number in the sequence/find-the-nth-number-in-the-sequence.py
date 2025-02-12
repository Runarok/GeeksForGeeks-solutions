# User function Template for Python3

class Solution:
    def get(self, n):
        # Calculate the largest triangular number less than or equal to n
        level = int(n ** 0.5)
        triangular_sum = (level * (level + 1)) // 2

        # Increase the level until the triangular sum reaches or exceeds n
        while triangular_sum < n:
            level += 1
            triangular_sum = (level * (level + 1)) // 2

        # Compute the position of n in the current triangular level
        ans = n - ((level * (level - 1)) // 2)
        return ans
#{ 
 # Driver Code Starts
#Initial Template for Python 3


if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n = int(input())
        ob = Solution()
        print(ob.get(n))
# } Driver Code Ends