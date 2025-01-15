#User function Template for python3

class Solution:
    def longestKSubstr(self, s, k):
        # Dictionary to store the frequency of characters in the current window
        freq = {}
        
        # Start and end pointers for the window
        start = 0
        max_len = -1
        
        for end in range(len(s)):
            # Add the current character to the frequency dictionary
            freq[s[end]] = freq.get(s[end], 0) + 1
            
            # If the number of unique characters exceeds k, move the start pointer
            while len(freq) > k:
                freq[s[start]] -= 1
                if freq[s[start]] == 0:
                    del freq[s[start]]
                start += 1
            
            # If we have exactly k unique characters, update the max_len
            if len(freq) == k:
                max_len = max(max_len, end - start + 1)
        
        return max_len

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()
        k = int(input())

        solObj = Solution()

        ans = solObj.longestKSubstr(s, k)

        print(ans)

        print("~")
# } Driver Code Ends