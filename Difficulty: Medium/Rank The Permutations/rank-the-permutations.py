# User function Template for Python3

class Solution:
    def factorial(self, num):
        """Calculates factorial of a given number."""
        return 1 if num <= 1 else num * self.factorial(num - 1)

    def findRank(self, S):
        """Finds the lexicographic rank of the given string S."""
        if not S:
            return 1  # Base case: empty string has rank 1

        sorted_chars = sorted(S)  # Sorting characters of the string
        first_char = S[0]  # First character of the string

        # Finding the position of the first character in sorted list
        for index, char in enumerate(sorted_chars):
            if char == first_char:
                return index * self.factorial(len(S) - 1) + self.findRank(S[1:])

#{ 
 # Driver Code Starts
# Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        str = input().strip()
        obj = Solution()
        ans = obj.findRank(str)
        print(ans)
        print("~")

# } Driver Code Ends