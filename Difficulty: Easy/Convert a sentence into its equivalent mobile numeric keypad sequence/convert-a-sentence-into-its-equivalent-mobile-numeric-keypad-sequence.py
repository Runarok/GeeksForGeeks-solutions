#User function Template for python3

class Solution:
    def printSequence(self, S):
        # Mapping of characters to their respective numeric keypad sequences
        keypad = {
            'A': "2", 'B': "22", 'C': "222",
            'D': "3", 'E': "33", 'F': "333",
            'G': "4", 'H': "44", 'I': "444",
            'J': "5", 'K': "55", 'L': "555",
            'M': "6", 'N': "66", 'O': "666",
            'P': "7", 'Q': "77", 'R': "777", 'S': "7777",
            'T': "8", 'U': "88", 'V': "888",
            'W': "9", 'X': "99", 'Y': "999", 'Z': "9999",
            ' ': "0"  # Space is mapped to '0'
        }
        
        # Result string to accumulate the sequence
        result = ""
        
        # Traverse the input string and construct the result
        for char in S:
            result += keypad[char]  # Append the mapped sequence for each character
            
        return result

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):

        inputStr = input()

        solObj = Solution()

        print(solObj.printSequence(inputStr))
# } Driver Code Ends

