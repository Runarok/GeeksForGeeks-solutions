# User function Template for python3
from functools import reduce

class Solution:
    def remove3ConsecutiveDuplicates(self, S):
        # Initialize the result using reduce function.
        # It processes each character in the string `S` and builds the result string.

        res = reduce(
            lambda result, currentChar: (
                # Add the current character if there are less than 2 characters in result,
                # OR if the last two characters in result are not the same as currentChar.
                result + currentChar
                if len(result) < 2 or (result[-1] != currentChar or result[-2] != currentChar)
                else result[:-2]  # Otherwise, remove the last two characters (consecutive duplicates found).
            ),
            S,  # Input string to process.
            ""  # Initial empty result string.
        )
        
        # If the final result string is empty after processing, return -1.
        # Otherwise, return the result string itself.
        return res if res else -1


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		S = input()
		ob = Solution()	
		answer = ob.remove3ConsecutiveDuplicates(S)
		
		print(answer)


# } Driver Code Ends