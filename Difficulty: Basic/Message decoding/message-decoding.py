class Solution:

    def decode(self, S):
        # Target string we are looking for
        find = "hello"
        
        # Initialize two pointers i and j
        i, j = 0, 0
        n = len(S)
        
        # Iterate over the string S
        while i < n:
            # If the current character matches the target character in 'hello'
            if S[i] == find[j]:
                j += 1  # Move to the next character in 'hello'
                
                # If we've matched all characters of 'hello', return 1
                if j == 5:
                    return 1
            # Move to the next character in the string
            i += 1
        
        # If we didn't match 'hello', return 0
        return 0


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()

        solObj = Solution()

        ans = solObj.decode(s)

        if ans:
            print(1)
        else:
            print(0)
# } Driver Code Ends