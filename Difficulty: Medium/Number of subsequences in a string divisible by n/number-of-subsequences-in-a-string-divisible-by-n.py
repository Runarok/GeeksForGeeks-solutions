class Solution:
    def countDivisibleSubseq(self, s, n):
        self.mod = 10 ** 9 + 7  # Set modulo to avoid overflow
        self.s = s  # The string input
        self.s_len = len(s)  # Length of the string
        self.n = n  # Divisor for divisibility check
        self.memo = {}  # Memoization dictionary to store intermediate results
        return self._count(0, 0) - 1  # Start the recursive count, subtracting 1 to exclude the empty subsequence
    
    def _count(self, index: int, rem: int) -> int:
        # Base case: if we've processed all characters, check if the remainder is divisible by n
        if index == self.s_len:
            return 1 if rem == 0 else 0  # 1 if divisible, otherwise 0
        
        memo_key = (index, rem)  # Create a unique key for memoization based on index and remainder
        if memo_key in self.memo:  # Check if the result is already computed for this index and remainder
            return self.memo[memo_key]
        
        # Option 1: Exclude the current digit and move to the next
        exclude = self._count(index + 1, rem) % self.mod
        
        # Option 2: Include the current digit in the subsequence and update the remainder
        include = self._count(index + 1, (rem * 10 + ord(self.s[index]) - ord("0")) % self.n) % self.mod
        
        # Store the result in the memo dictionary
        self.memo[memo_key] = (exclude + include) % self.mod
        
        return self.memo[memo_key]  # Return the computed result
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		s = input()
		n = int(input())
		ob = Solution()
		ans = ob.countDivisibleSubseq(s,n)
		print(ans)

# } Driver Code Ends