#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

class Solution:
    def betterString(self, str1, str2):
        def count_distinct_subsequences(s):
            n = len(s)
            dp = [0] * (n + 1)
            dp[0] = 1  # Base case: empty string has one subsequence (the empty subsequence)
            last_occurrence = {}  # To store last occurrence of each character
            
            for i in range(1, n + 1):
                dp[i] = 2 * dp[i - 1]  # Every subsequence can either include or exclude the current character
                char = s[i - 1]
                
                if char in last_occurrence:
                    dp[i] -= dp[last_occurrence[char] - 1]  # Subtract subsequences that are counted twice
                
                last_occurrence[char] = i  # Update last occurrence of the character
            
            return dp[n] - 1  # Subtract 1 to exclude the empty subsequence
        
        count1 = count_distinct_subsequences(str1)
        count2 = count_distinct_subsequences(str2)
        
        if count1 >= count2:
            return str1
        else:
            return str2


#{ 
 # Driver Code Starts.
if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        str1 = input()
        str2 = input()
        ob = Solution()
        res = ob.betterString(str1, str2)
        print(res)
        print("~")
# } Driver Code Ends