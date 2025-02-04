from typing import List

class Solution:
    def sentences(self, list: List[List[str]]) -> List[List[str]]:
        # List to store the final sentences
        ans = []

        # Helper function to backtrack through the words and build sentences
        def backtrack(i, curr):
            # If we've reached the end of the list, append the current sentence
            if i >= len(list):
                ans.append([curr.lstrip()])  # .lstrip() to remove any leading spaces
                return 

            # Try each word in the current list (list[i])
            for j in list[i]:
                # Add the word to the current sentence
                curr = curr + " " + j

                # Recur for the next list of words
                backtrack(i + 1, curr)

                # Backtrack by removing the last word added to the sentence
                curr = curr[:-(len(j) + 1)]

        # Start backtracking from index 0 with an empty string
        backtrack(0, "")

        # Return the list of all generated sentences
        return ans

#{ 
 # Driver Code Starts
class IntArray:

    def __init__(self) -> None:
        pass

    def Input(self, n):
        arr = [int(i) for i in input().strip().split()]  #array input
        return arr

    def Print(self, arr):
        for i in arr:
            print(i, end=" ")
        print()


class StringMatrix:

    def __init__(self) -> None:
        pass

    def Input(self, n, m):
        matrix = []
        #matrix input
        for _ in range(n):
            matrix.append([str(i) for i in input().strip().split()])
        return matrix

    def Print(self, arr):
        for i in arr:
            for j in i:
                print(j, end=" ")
            print()


if __name__ == "__main__":

    a = IntArray().Input(2)

    list = StringMatrix().Input(a[0], a[1])

    obj = Solution()
    res = obj.sentences(list)

    StringMatrix().Print(res)

# } Driver Code Ends