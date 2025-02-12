#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3

class Solution:
    def findMatching(self, text, pattern):
        # Check if the pattern exists in the text
        if pattern in text:
            # Return the index of the first occurrence of the pattern in the text
            return text.find(pattern)
        else:
            # If pattern is not found, return -1
            return -1


#{ 
 # Driver Code Starts.
if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        text, pattern = input().split()
        ob = Solution()
        res = ob.findMatching(text, pattern)
        print(res)
        print("~")
# } Driver Code Ends