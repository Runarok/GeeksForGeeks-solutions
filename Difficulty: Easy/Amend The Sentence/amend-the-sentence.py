class Solution:
    def amendSentence(self, s):
        # Initialize an empty string for the result
        new = ""
        
        # Start by converting the first character to lowercase
        new += s[0].lower()
        
        # Iterate through the string starting from the second character
        for i in range(1, len(s)):
            # If the character is lowercase, add it to the result string
            if s[i].islower():
                new += s[i]
            # If the character is uppercase, add a space and then the lowercase version of the character
            elif s[i].isupper():
                new += " " + s[i].lower()
        
        return new  # Return the modified string

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()

        solObj = Solution()

        print(solObj.amendSentence(s))
        

# } Driver Code Ends