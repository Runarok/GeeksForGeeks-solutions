from typing import List

class trie:
    def __init__(self):
        # Initialize the children array with None values for each letter of the alphabet
        self.children = [None]*26
        # Initialize the count of words as 0
        self.cnt = 0

def build(a, root):
    # Iterate over each word in the input list
    for i in range(len(a)):
        temp = root

        # Iterate over each letter in the current word
        for j in range(len(a[i])):

            # Check if the current letter's child node is None
            if temp.children[ord(a[i][j]) - ord("a")] is None:

                # If it is None, create a new node and assign it as the child
                temp.children[ord(a[i][j]) - ord("a")] = trie()

            # Increment the count of words in the subtree rooted at the current letter's node
            temp.children[ord(a[i][j]) - ord("a")].cnt += 1

            # Update the current node to be the child of the current letter
            temp = temp.children[ord(a[i][j]) - ord("a")]

def find(s, root):
    # Iterate over each letter in the prefix
    for i in range(len(s)):
        # Check if the current letter's child node is None
        if root.children[ord(s[i]) - ord("a")] == None:
            return 0

        # Update the current node to be the child of the current letter
        root = root.children[ord(s[i]) - ord("a")]

    # Return the count of words in the subtree rooted at the final letter
    return root.cnt

class Solution:
    def prefixCount(self, N, Q, li, query):
        res = []
        root = trie()

        # Build the trie using the input list
        build(li, root)

        # Iterate over each query and find the count of words with the given prefix
        for i in range(Q):
            res.append(find(query[i], root))

        # Return the list of counts
        return res


#{ 
 # Driver Code Starts
# Initial Template for Python3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        li = []
        for i in range(N):
            s=input().split()
            li.append(s[0])
        Q = int(input())
        query = []
        for i in range(Q):
            s=input().split()
            query.append(s[0])
        
        ob = Solution()
        ans = ob.prefixCount(N, Q, li, query)
        for i in range(Q):
            print(ans[i])
        print("~")
# } Driver Code Ends