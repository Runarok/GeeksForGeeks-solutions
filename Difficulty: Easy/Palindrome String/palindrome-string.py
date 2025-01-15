class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Check if the string is equal to its reverse
        return s == s[::-1]

#{ 
 # Driver Code Starts
# Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        s = input()  # Use lowercase 's'
        ob = Solution()
        answer = ob.isPalindrome(s)
        print("true" if answer else "false")  # Print "true" or "false"
        print("~")

# } Driver Code Ends
