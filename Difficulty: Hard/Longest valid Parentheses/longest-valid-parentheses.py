class Solution:
    def maxLength(self, s):
        # Stack to store indices of unmatched '('
        stack = [-1]  # Initialize with -1 to handle the base case
        max_len = 0
        
        for i in range(len(s)):
            if s[i] == '(':
                # Push the index of '(' onto the stack
                stack.append(i)
            else:
                # Pop the last '(' index from the stack
                stack.pop()
                
                if stack:
                    # Calculate the length of the valid substring
                    max_len = max(max_len, i - stack[-1])
                else:
                    # If the stack is empty, push the current index as the base for future valid substrings
                    stack.append(i)
        
        return max_len

#{ 
 # Driver Code Starts
# Initial Template for Python3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        S = input()

        ob = Solution()
        print(ob.maxLength(S))
        print("~")

# } Driver Code Ends