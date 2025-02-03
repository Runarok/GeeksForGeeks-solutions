class Solution():

    def checkRedundancy(self, s):
        # Stack to track characters
        stack = []
        
        for c in s:
            # If character is part of the operators or opening bracket, add to stack
            if c in ('(', '+', '-', '*', '/'):
                stack.append(c)
            
            else:
                # If we encounter closing bracket ')'
                if c == ')':
                    redundant = 1  # Assume redundancy initially
                    
                    # Pop elements until we find '('
                    while stack and stack[-1] != '(':
                        top = stack.pop()
                        # If there's an operator, it's not redundant
                        if top in ('+', '-', '*', '/'):
                            redundant = 0
                    
                    # If no operators found, return redundancy (1)
                    if redundant:
                        return 1
                    
                    # Pop the opening bracket
                    stack.pop()
        
        # If no redundant expressions found, return 0
        return 0



#{ 
 # Driver Code Starts

if __name__ == "__main__":
    for _ in range(int(input())):
        s = input()
        print(Solution().checkRedundancy(s))

        print("~")
# } Driver Code Ends