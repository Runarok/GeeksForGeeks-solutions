class Solution:
    def findMaxLen(self, S):
        stack = [-1]  # Initialize stack with -1 to handle base case
        max_len = 0
        
        # Traverse through the string
        for i in range(len(S)):
            if S[i] == '(':
                stack.append(i)  # Push the index of '(' onto the stack
            else:
                stack.pop()  # Pop the last '(' index
                if stack:
                    max_len = max(max_len, i - stack[-1])  # Calculate the length of valid substring
                else:
                    stack.append(i)  # If stack is empty, push current index as base for next valid substring
        
        return max_len

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        S = input()

        ob = Solution()
        print(ob.findMaxLen(S))
        print("~")

# } Driver Code Ends