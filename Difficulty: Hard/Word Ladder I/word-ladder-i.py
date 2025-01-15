from collections import deque

class Solution:
    def wordLadderLength(self, startWord, targetWord, wordList):
        # If targetWord is not in wordList, return 0 as no valid transformation is possible.
        if targetWord not in wordList:
            return 0
        
        # Create a queue for BFS, each element is a tuple (word, transformation length)
        queue = deque([(startWord, 1)])
        
        # Convert wordList to a set for O(1) lookup times
        wordSet = set(wordList)
        
        while queue:
            current_word, length = queue.popleft()
            
            # Try changing each character in the current word
            for i in range(len(current_word)):
                for c in 'abcdefghijklmnopqrstuvwxyz':
                    new_word = current_word[:i] + c + current_word[i+1:]
                    
                    # If the new word is the target word, return the transformation length
                    if new_word == targetWord:
                        return length + 1
                    
                    # If the new word is in wordSet, add it to the queue and remove from wordSet
                    if new_word in wordSet:
                        wordSet.remove(new_word)
                        queue.append((new_word, length + 1))
        
        # If no transformation sequence is found, return 0
        return 0

#{ 
 # Driver Code Starts
# from collections import deque
if __name__ == '__main__':
    T = int(input())
    for tt in range(T):
        n = int(input())
        wordList = []
        for i in range(n):
            wordList.append(input().strip())
        startWord = input().strip()
        targetWord = input().strip()
        obj = Solution()
        ans = obj.wordLadderLength(startWord, targetWord, wordList)
        print(ans)
        print("~")

# } Driver Code Ends