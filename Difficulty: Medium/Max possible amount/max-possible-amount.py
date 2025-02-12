# User function Template for python3
class Solution:
    def maxAmount(self, arr, N):
        # Create a memoization table to store results of subproblems
        dp = [[-1 for _ in range(N)] for _ in range(N)]

        # Recursive function to calculate the maximum score for player 1
        def maxScore(l, r):
            # Base case: no elements left to pick
            if l > r:
                return 0

            # Return memoized result if it already exists
            if dp[l][r] != -1:
                return dp[l][r]

            # Choose the maximum between picking the left or right element
            # and minimize the opponent's response in both cases
            pickLeft = arr[l] + min(maxScore(l + 2, r), maxScore(l + 1, r - 1))
            pickRight = arr[r] + min(maxScore(l + 1, r - 1), maxScore(l, r - 2))

            # Store the result in the dp table and return it
            dp[l][r] = max(pickLeft, pickRight)
            return dp[l][r]

        # Player 1's optimal score is the result of the recursive function
        player1Score = maxScore(0, N - 1)

        # The score of Player 2 can be derived by subtracting Player 1's score
        # from the total sum of the array. But here we only need to return
        # the result of Player 1's optimal score.
        return player1Score
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        N = int(input())
        Arr = [int(x) for x in input().split()]
        ob = Solution()
        ans = ob.maxAmount(Arr, N)
        print(ans)
        print("~")

# } Driver Code Ends