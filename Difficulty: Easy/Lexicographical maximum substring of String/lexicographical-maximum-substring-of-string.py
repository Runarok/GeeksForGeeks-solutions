class Solution:
    def lexicographicalMaxString(self, s: str) -> str:
        # Initialize an empty string to store the maximum lexicographical substring
        ans = ""
        
        # Iterate through the string starting from each character
        for i in range(len(s)):
            # Compare and update the answer with the lexicographically larger substring
            ans = max(ans, s[i:])
        
        # Return the lexicographically maximum substring
        return ans


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        s = input().strip()
        ob = Solution()
        print(ob.lexicographicalMaxString(s))
        print("~")

# } Driver Code Ends