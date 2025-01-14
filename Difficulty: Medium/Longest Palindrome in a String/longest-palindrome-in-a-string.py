class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n == 0:
            return ""
        
        start, max_length = 0, 1
        
        # Function to expand around center and update max_length and start
        def expandAroundCenter(left: int, right: int):
            nonlocal start, max_length
            while left >= 0 and right < n and s[left] == s[right]:
                current_length = right - left + 1
                if current_length > max_length:
                    max_length = current_length
                    start = left
                left -= 1
                right += 1
        
        for i in range(n):
            # Odd-length palindrome centered at i
            expandAroundCenter(i, i)
            # Even-length palindrome centered between i and i+1
            expandAroundCenter(i, i + 1)
        
        return s[start:start + max_length]


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        S = input()

        ob = Solution()

        ans = ob.longestPalindrome(S)

        print(ans)
# } Driver Code Ends