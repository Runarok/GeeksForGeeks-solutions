# User function Template for python3

class Solution:

    def fun(self, s, k, n, c):
        # Initialize count to track occurrences of character c
        count = 0
        size = len(s)  # Get the length of the input string s
        
        # Calculate how many times the whole string can be repeated in n characters
        rem = n // size
        # Add the count of c in the full repeated parts of the string
        count += rem * s.count(c)
        
        # Calculate the number of characters remaining after full repetitions
        size_max = size * rem
        temp = n - size_max
        
        # Count occurrences of c in the remaining characters
        for i in range(temp):
            if s[i] == c:
                count += 1
        
        return count

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()
        knc = input().split()
        
        k = int(knc[0])
        n = int(knc[1])
        c = knc[2]

        solObj = Solution()

        print(solObj.fun(s,k,n,c))
# } Driver Code Ends