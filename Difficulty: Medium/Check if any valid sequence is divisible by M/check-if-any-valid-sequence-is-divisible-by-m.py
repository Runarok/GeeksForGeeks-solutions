def validSequence(arr, n, m):
    # Initialize the dp table with -1
    dp = []
    for i in range(n + 1):
        dp.append([-1] * m)

    # Helper function for recursion
    def recur(i, arr, n, m, su):
        # Base case: If we've processed all elements
        if i == n:
            # If the sum modulo m is 0, return True
            return su == 0
        
        # If the result is already computed for this state, return it
        if dp[i][su] != -1:
            return dp[i][su]

        # Recursive calls: Include the current element or exclude it
        val1 = recur(i + 1, arr, n, m, (su + arr[i]) % m)
        val2 = recur(i + 1, arr, n, m, (su - arr[i]) % m)

        # Store the result in the dp table
        dp[i][su] = val1 or val2

        # Return the computed result
        return dp[i][su]

    # Start the recursion from the 0th index and initial sum 0
    return recur(0, arr, n, m, 0)
#{ 
 # Driver Code Starts
#Initial Template for Python 3


for _ in range(0,int(input())):
    n = int(input())
    arr = list(map(int, input().strip().split()))
    m = int(input())
    ans = validSequence(arr, n, m)
    if(ans == True):
        print(1)
    else:
        print(0)




# } Driver Code Ends