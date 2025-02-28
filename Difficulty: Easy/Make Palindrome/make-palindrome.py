from typing import List
from collections import defaultdict

class Solution:
    def makePalindrome(self, n: int, arr: List[str]) -> bool:
        # Helper function to check if a string is a palindrome.
        def isPalindrome(word):
            left, right = 0, len(word) - 1
            while left < right:
                if word[left] != word[right]:
                    return False
                left += 1
                right -= 1
            return True

        # Dictionary to store the frequency of each string.
        wordCount = defaultdict(int)

        # Dictionary to store the frequency of palindromic strings.
        palindromeCount = defaultdict(int)

        # Count the occurrences of each string.
        for i in range(n):
            word = arr[i]
            wordCount[word] += 1

        # Process each string to check for palindromes and reverse pairs.
        for i in range(n):
            word = arr[i]
            if not isPalindrome(word):
                reversedWord = word[::-1]
                if wordCount[word] != wordCount[reversedWord]:
                    return False
            else:
                # Count palindromic strings separately.
                palindromeCount[word] += 1

        # Count how many palindromic words appear an odd number of times.
        oddCount = 0
        for frequency in palindromeCount.values():
            if frequency % 2 == 1:
                oddCount += 1

        # At most one palindromic word can have an odd count (for the center).
        return oddCount <= 1

#{ 
 # Driver Code Starts
class StringArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=input().strip().split()#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()

if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n = int(input())
        
        
        arr=StringArray().Input(n)
        
        obj = Solution()
        res = obj.makePalindrome(n, arr)
        
        result_val = "YES" if res else "NO"
        print(result_val)

# } Driver Code Ends