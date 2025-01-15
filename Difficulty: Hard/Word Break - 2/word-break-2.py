#User function Template for python3

from collections import defaultdict

class Solution:
    def wordBreak(self, dict, s):
        word_set = set(dict)
        memo = defaultdict(list)

        def backtrack(index):
            if index == len(s):
                return [""]
            if index in memo:
                return memo[index]

            sentences = []
            for end in range(index + 1, len(s) + 1):
                word = s[index:end]
                if word in word_set:
                    for rest in backtrack(end):
                        sentence = word + ("" if not rest else " " + rest)
                        sentences.append(sentence)

            memo[index] = sentences
            return sentences

        return backtrack(0)



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        dicti = input().split()
        s = input()

        ob = Solution()
        ans = ob.wordBreak(dicti, s)
        if (len(ans) == 0):
            print("Empty")
        else:
            ans.sort()
            for it in (ans):
                print("(" + it, end=")")
            print()
        print("~")

# } Driver Code Ends