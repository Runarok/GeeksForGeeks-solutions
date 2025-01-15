#User function Template for python3


class Solution:
    def generate_binary_string(self, s):
        # Find all the indexes of "?" in the input string
        indexes = [ind for ind, num in enumerate(s) if num == "?"]
        
        ln = len(indexes)  # Total number of "?" characters
        
        # If there are no "?" characters, return the string itself
        if ln == 0:
            return [s]
        
        # This will hold all the possible binary strings
        res = []
        
        # Start with a stack to track all possible masks
        stack = [['', 0]]  # The stack holds a tuple (current string with replacements, index to process)
        
        while stack:
            current_str, idx = stack.pop()
            
            # If we've processed all the "?" positions, create the final string
            if idx == ln:
                # Construct the string by replacing "?" with the current mask
                result_str = list(s)  # Work with a list so we can modify characters
                for ind, mask_char in zip(indexes, current_str):
                    result_str[ind] = mask_char
                res.append("".join(result_str))
            else:
                # Try placing '0' or '1' in the current "?" position and push to the stack
                stack.append([current_str + "0", idx + 1])
                stack.append([current_str + "1", idx + 1])
        
        # Sort the results lexicographically
        res.sort()
        return res


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        s = input()
        ob = Solution()
        ans = ob.generate_binary_string(s)
        for i in ans:
            print(i, end=" ")
        print()

# } Driver Code Ends
