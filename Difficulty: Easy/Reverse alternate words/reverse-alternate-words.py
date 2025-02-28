#User function Template for python3

class Solution:

    def reverseAlternate(self, inputString):
        # Split the input string into words.
        wordsList = inputString.split()

        # List to store the final result.
        resultList = []

        # Iterate through each word.
        for index in range(len(wordsList)):
            if index % 2 == 1:
                # Reverse word at odd positions (1st, 3rd, 5th...).
                resultList.append(wordsList[index][::-1])
            else:
                # Keep word at even positions (0th, 2nd, 4th...) unchanged.
                resultList.append(wordsList[index])

        # Join all processed words into a single string.
        resultString = ' '.join(resultList)

        # Return the final result.
        return resultString

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):

        Str = input()

        solObj = Solution()

        print(solObj.reverseAlternate(Str))

# } Driver Code Ends