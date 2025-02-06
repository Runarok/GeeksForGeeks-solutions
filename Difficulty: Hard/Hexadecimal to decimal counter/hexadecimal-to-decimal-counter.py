class Solution:
    def countOfDistinctNo(self, str: str) -> int:
        # Get the length of the input string
        length = len(str)

        # Arrays to store the dynamic programming results and character frequencies
        dp = [0] * (length + 1)
        charFrequency = [0] * 256  # To store frequency of each character (ASCII range)

        # Auxiliary DP table for binomial coefficients
        binomialCoeff = [[0] * (length + 1) for _ in range(length + 1)]

        # Modulo value to prevent overflow
        mod = 1000000007

        # Precompute binomial coefficients using Pascal's Triangle
        for i in range(length + 1):
            for j in range(i + 1):
                if j == 0 or j == i:
                    binomialCoeff[i][j] = 1
                elif j == 1:
                    binomialCoeff[i][j] = i
                else:
                    binomialCoeff[i][j] = (binomialCoeff[i - 1][j] + binomialCoeff[i - 1][j - 1]) % mod

        # Base case for DP: an empty string has one way to form a number (empty set)
        dp[0] = 1

        # Count how many zeros are present in the string
        zeroCount = 0
        for char in str:
            if char != '0':
                charFrequency[ord(char)] += 1
            else:
                zeroCount += 1

        # Process each distinct non-zero character
        for i in range(256):
            if charFrequency[i] == 0:
                continue  # Skip characters that don't appear in the string

            frequency = charFrequency[i]

            # Update the DP table based on character frequency
            for k in range(length, -1, -1):
                for j in range(1, frequency + 1):
                    if k - j < 0:
                        break
                    dp[k] = (dp[k] + (dp[k - j] * binomialCoeff[k][k - j]) % mod) % mod

        # Process zeros separately, considering the constraint that numbers can't start with zero
        for k in range(length, -1, -1):
            for j in range(1, zeroCount + 1):
                if k - j <= 0:
                    break
                dp[k] = (dp[k] + (dp[k - j] * binomialCoeff[k - 1][k - j - 1]) % mod) % mod

        # If there are zeros, we need to account for the case where a number starts with a non-zero digit
        if zeroCount:
            dp[1] += 1

        # Compute the final sum of distinct numbers by summing up the valid DP results
        result = 0
        for i in range(1, length + 1):
            result = (result + dp[i]) % mod

        return result

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		str = input()
		obj = Solution()
		ans = obj.countOfDistinctNo(str)
		print(ans)

# } Driver Code Ends
