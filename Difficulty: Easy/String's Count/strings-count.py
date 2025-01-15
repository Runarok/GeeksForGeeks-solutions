class Solution:
    def countStr(self, n):
        # Applying integer division for the third term
        ans = 1 + (n * 2) + (n * ((n * n) - 1)) // 2
        return int(ans)  # Return as an integer



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        n = int(input())

        solObj = Solution()

        print(solObj.countStr(n))
        print("~")
# } Driver Code Ends