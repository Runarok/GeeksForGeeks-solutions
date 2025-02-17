# User function Template for Python3

class Solution:
    def encodeTheName(self, S):
        # Initialize an empty string to store the encoded result
        res = ""
        
        # Variable to track the increment for each character
        p = 0
        
        # Iterate through each character in the input string S
        for i in S:
            # Calculate the encoded value by adjusting the ASCII value of the character
            k = ord(i) + p - 10
            
            # Append the encoded value (converted to string) to the result
            res += str(k)
            
            # Increment the counter for the next character
            p += 1
        
        # Return the final encoded result
        return res
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        S=input()
        
        ob = Solution()
        print(ob.encodeTheName(S))
# } Driver Code Ends