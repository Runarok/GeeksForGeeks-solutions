class Solution:
    def longestPrefixSuffix(self, s):
        n = len(s)
        
        # Create an array to store the length of the longest prefix-suffix
        lps = [0] * n
        length = 0  # length of the previous longest prefix suffix
        i = 1
        
        # Loop through the string to fill the lps array
        while i < n:
            if s[i] == s[length]:
                length += 1
                lps[i] = length
                i += 1
            else:
                if length != 0:
                    length = lps[length - 1]
                else:
                    lps[i] = 0
                    i += 1
        
        # The length of the longest prefix which is also suffix
        return lps[n - 1]


#{ 
 # Driver Code Starts
# Testing the function
if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        str_input = input()
        ob = Solution()
        print(ob.longestPrefixSuffix(str_input))
        print("~")
# } Driver Code Ends