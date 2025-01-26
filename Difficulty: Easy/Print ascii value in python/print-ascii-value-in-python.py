#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3
class Solution:
    def printAscii(self, ch):
        ascii_value = ord(ch)  # Get the ASCII value of the character
        print(ascii_value)

#{ 
 # Driver Code Starts.

t = int(input())
while t:
    t-=1
    ch = input()[0]
    s = Solution()
    s.printAscii(ch)
# } Driver Code Ends