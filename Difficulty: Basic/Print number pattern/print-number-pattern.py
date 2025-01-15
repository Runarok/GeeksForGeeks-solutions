class Solution:
    def printPat(self, n):
        result = []

        # Loop for each row in the pattern
        for k in range(n):
            # Loop to add numbers in descending order starting from n
            for i in range(n, 0, -1):
                # Repeat each number (n - k) times in each row
                for j in range(n - k):
                    result.append(i)
            # Append -1 after each row as a separator
            result.append(-1)

        return result
#{ 
 # Driver Code Starts
if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n = int(input())
        sol = Solution()
        ans = sol.printPat(n)

        # Print the result list with -1 as a separator
        for num in ans:
            print(num, end=" ")
        print()

# } Driver Code Ends