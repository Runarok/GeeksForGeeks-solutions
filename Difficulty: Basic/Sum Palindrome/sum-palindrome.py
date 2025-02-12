# User function Template for Python3

class Solution:
    # Helper function to check if a number is a palindrome by reversing it
    def reverseNumber(self, x):
        rev = 0
        while x:
            rev = rev * 10 + x % 10
            x //= 10
        return rev

    # Function to check if sum of number and its reverse becomes a palindrome
    def isSumPalindrome(self, n):
        count = 0

        # Iterate up to 5 times to find a palindrome sum
        while count <= 5:
            reversed_n = self.reverseNumber(n)
            if reversed_n == n:
                return n  # Return palindrome number

            # Add number and its reverse
            n = n + reversed_n
            count += 1

        return -1  # Return -1 if no palindrome is found within 5 iterations

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        n = int(input())
        
        ob = Solution()
        print(ob.isSumPalindrome(n))
        print("~")
# } Driver Code Ends