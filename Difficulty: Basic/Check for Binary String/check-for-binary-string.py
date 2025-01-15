# Return true if s is binary, else false
class Solution:
    def isBinary(self, s):
        return all(c in '01' for c in s)  # Check if every character in the string is either '0' or '1'

#{ 
 # Driver Code Starts
# Your code goes here
if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        str = input().strip()
        if Solution().isBinary(str):
            print("true")
        else:
            print("false")
        print("~")

# } Driver Code Ends