#User function Template for python3

class Solution:

    def countWords(self, s):
        # Replace escaped newline and tab characters with spaces
        s = s.replace("\\n", " ").replace("\\t", " ")

        # Split the string by spaces and count the resulting words
        return len(s.split())



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()

        solObj = Solution()

        print(solObj.countWords(s))
# } Driver Code Ends