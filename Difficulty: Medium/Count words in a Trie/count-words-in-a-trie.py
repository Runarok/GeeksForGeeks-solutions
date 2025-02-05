class Solution:
    def wordCount(self, root):
        # Initialize the result counter to 0
        ret = 0

        # Depth-First Search function to traverse the tree
        def dfs(cur=root):
            nonlocal ret
            # Base case: if the current node is None, return
            if not cur:
                return

            # If the current node is a leaf, increment the word count
            if cur.isLeaf:
                ret += 1

            # Recursively visit all child nodes
            for nxt in cur.children:
                dfs(nxt)

        # Start DFS traversal from the root
        dfs()
        
        # Return the final word count
        return ret


#{ 
 # Driver Code Starts
class TrieNode:

    def __init__(self):
        self.ALPHABET_SIZE = 26
        self.children = [None] * self.ALPHABET_SIZE
        self.isLeaf = False


def insert(root, key):
    length = len(key)
    pCrawl = root

    for level in range(length):
        index = ord(key[level]) - ord('a')
        if not pCrawl.children[index]:
            pCrawl.children[index] = TrieNode()

        pCrawl = pCrawl.children[index]

    # Mark last node as a leaf
    pCrawl.isLeaf = True


if __name__ == "__main__":
    import sys
    input = sys.stdin.read

    # Read all the input at once
    data = input().splitlines()

    tc = int(data[0])  # Number of test cases

    for case in range(1, tc + 1):
        s = data[case].split()  # Words in the current test case

        # Initialize a new Trie
        root = TrieNode()

        # Insert each word into the Trie
        for word in s:
            insert(root, word)

        # Create an object of the Solution class
        obj = Solution()

        # Count the number of words in the Trie
        print(obj.wordCount(root))
        print("~")

# } Driver Code Ends