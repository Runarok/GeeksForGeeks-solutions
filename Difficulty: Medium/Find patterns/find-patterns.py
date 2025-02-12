class Solution:
    def numberOfSubsequences(self, S, W):
        # Return the length of the list of subsequences found
        return len(self.Subsequences(S, W))
        
    def Subsequences(self, S, W):
        # Initialize a list to store the indices of matching characters
        indices = []
        m = []
        j = 0
        
        # Traverse through the string S
        for i in range(len(S)):
            # If characters match with the current character in W
            if S[i] == W[j]:
                indices.append(i)  # Store the index of the match
                j += 1  # Move to the next character in W
                if j == len(W):  # If the whole word W is matched
                    m.append(W)  # Add the subsequence to the result list
                    break
        
        # If any subsequence has been found
        if len(m) != 0:
            # Remove the characters from S that are part of the matched subsequence
            s1 = ''.join(char for i, char in enumerate(S) if i not in indices)
            
            # Recursively search in the remaining part of the string if possible
            if len(s1) >= len(W):
                return m + self.Subsequences(s1, W)
        
        return m
#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        
        S=str(input())
        W=str(input())

        ob = Solution()
        print(ob.numberOfSubsequences(S,W))

        print("~")
# } Driver Code Ends