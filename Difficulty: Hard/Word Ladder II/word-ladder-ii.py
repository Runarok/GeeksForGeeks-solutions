#User function Template for python3

class Solution:
    def findSequences(self,startWord, targetWord, wordList):
        wordList = set(wordList)
        n = len(startWord)
        ans = []
    
        q = deque([[startWord]])

        currlen = 1
        usedOnLevel = {startWord}

        while (q):
            arr = q.popleft()
            lastWord = arr[-1]

            if lastWord == targetWord:
                ans.append(arr)
                continue

            if currlen < len(arr)+1:
                currlen += 1
                for i in usedOnLevel:
                    if i in wordList:
                        wordList.remove(i)
                usedOnLevel = set()

            for i in range(n):
                for j in range(26):
                    char = chr(97+j)
                    newWord = lastWord[:i]+char+lastWord[i+1:]
                    if newWord in wordList:
                        # print("aaa", arr+[newWord])
                        q.append(arr+[newWord])

                        usedOnLevel.add(newWord)

                    # print("Queue", q)

        return ans


#{ 
 # Driver Code Starts

from collections import deque 
import functools

def comp(a, b):
    x = ""
    y = ""
    for i in a:
        x += i 
    for i in b:
        y += i
    if x>y:
        return 1
    elif y>x:
        return -1 
    else:
        return 0

if __name__ == '__main__':
    T=int(input())
    for tt in range(T):
        n = int(input())
        wordList = []
        for i in range(n):
            wordList.append(input().strip())
        startWord = input().strip()
        targetWord = input().strip()
        obj = Solution()
        ans = obj.findSequences(startWord, targetWord, wordList)
        if len(ans)==0:
            print(-1)
        else:
            ans = sorted(ans, key=functools.cmp_to_key(comp))
            for i in range(len(ans)):
                for j in range(len(ans[i])):
                    print(ans[i][j],end=" ")
                print()

        print("~")
# } Driver Code Ends