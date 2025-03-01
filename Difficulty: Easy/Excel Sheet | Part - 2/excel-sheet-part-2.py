# User function Template for python3

class Solution:
    def ExcelColumnNumber(self, s):
        # Initialize result to store the final column number
        result = 0
        
        # Iterate over each character in the column string
        for char in s:
            # Each character contributes to the column number like digits in a base-26 number system
            result = result * 26 + (ord(char) - ord('A') + 1)
        
        # Return the final computed column number
        return result


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t=int(input())
    for tcs in range(t):
        s=input()
        ob=Solution()
        print(ob.ExcelColumnNumber(s))
        print("~")
# } Driver Code Ends