import re

class Solution:
    
    def extractIntegerWords(self, s):
        # Initialize an empty list to store numbers and a temporary string n to build numbers
        num = []
        n = ''
        
        # Iterate through each character in the string
        for i in s:
            # If the character is a digit, append it to n
            if i.isdigit():
                n += i
            # If the character is not a digit and n is not empty
            # append the number n to the num list and reset n
            elif n:
                num.append(n)
                n = ''
        
        # After the loop, check if n is not empty (this handles the case when the string ends with a number)
        if n:
            num.append(n)
        
        # Return the list of extracted numbers
        return num



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()

        solObj = Solution()

        if solObj.extractIntegerWords(s):
            print(*solObj.extractIntegerWords(s))
        else:
            print("No Integers")

# } Driver Code Ends