#User function Template for python3

class Solution:
    def cuts(self, s: str) -> int:
        # List of binary representations of powers of 5 up to length 50
        powers_of_5 = []
        i = 1
        while True:
            bin_rep = bin(i)[2:]  # Get binary representation of i without '0b' prefix
            if len(bin_rep) > len(s):  # No need to consider powers of 5 longer than s
                break
            powers_of_5.append(bin_rep)
            i *= 5  # Move to the next power of 5
        
        n = len(s)
        # DP array to store the minimum cuts for substring s[0:i]
        dp = [float('inf')] * (n + 1)
        dp[0] = 0  # No cuts for the empty string

        # Iterate over all the positions of the string
        for i in range(1, n + 1):
            # Check all possible lengths of substrings ending at position i
            for length in range(1, i + 1):
                sub = s[i - length:i]  # Substring from i-length to i
                if sub in powers_of_5:  # Check if it's a power of 5
                    dp[i] = min(dp[i], dp[i - length] + 1)
        
        # If we can partition the entire string, return the number of cuts
        return dp[n] if dp[n] != float('inf') else -1



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()

        solObj = Solution()

        print(solObj.cuts(s))

        print("~")
# } Driver Code Ends