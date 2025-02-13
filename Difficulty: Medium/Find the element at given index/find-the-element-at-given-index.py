# User function Template for Python3

class Solution:
    def findElement(self, arr, n, x, ranges, k):
        # Process the queries in reverse order
        for i in range(k - 1, -1, -1):
            a, b = ranges[i]

            # Adjust x based on the current range
            if a < x <= b:
                x -= 1
            elif x == a:
                x = b

        # Return the final value at position x
        return arr[x]
#{ 
 # Driver Code Starts
#Initial Template for Python 3




if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        n, x, k = list(map(int, input().strip().split()))
        arr = list(map(int, input().strip().split()))
        ranges = [[0 for i in range(2)] for j in range(k)]

        inputLine = list(map(int, input().strip().split()))
        kt=0
        for i in range(k):
            for j in range(2):
                ranges[i][j] = inputLine[kt]
                kt+=1

        ans = Solution().findElement(arr, n, x, ranges, k)
        print(ans)
        tc -= 1

# } Driver Code Ends