# Definition for the Node class
class Node:
    def __init__(self, key, children=None):
        self.key = key
        self.children = children or []
    
    def __str__(self):
        return str(self.key)

class Solution:
    def duplicateSubtreeNaryTree(self, root):
        # Set to store keys of duplicate subtrees
        ans = set()
        
        # Helper function to check if two subtrees are identical
        def checkSame(root1, root2):
            if root1 is None or root2 is None:
                return root1 == root2
            if root1.key == root2.key and len(root1.children) == len(root2.children):
                # Recursively check all children of both subtrees
                for i in range(len(root1.children)):
                    if not checkSame(root1.children[i], root2.children[i]):
                        return False
                return True
            return False

        # Dictionary to store nodes by their key
        dic = {}
        
        # Recursive DFS function to traverse the tree
        def dfs(root):
            if root is None:
                return
            # For each node, check if there's a subtree with the same key
            if dic.get(root.key) is None:
                dic[root.key] = [root]
            else:
                # Compare current node with all previously found nodes having the same key
                for nodes in dic[root.key]:
                    if checkSame(nodes, root):
                        ans.add(root.key)  # Add the key of duplicate subtree
                        break
                dic[root.key].append(root)
            # Recurse through all children of the current node
            for child in root.children:
                dfs(child)
        
        # Start the DFS traversal
        dfs(root)
        
        # Return the count of duplicate subtrees
        return len(ans)
#{ 
 # Driver Code Starts
#Initial Template for Python 3

from collections import defaultdict
from collections import deque


class NodeNotFoundException(Exception):

    def __init__(self, value):
        self.value = value

    def __str__(self):
        return repr(self.value)


class Node:

    def __init__(self, key, children=None):
        self.key = key
        self.children = children or []

    def __str__(self):
        return str(self.key)


class N_ary_Tree:

    def __init__(self):
        self.root = None
        self.size = 0

    def find_node(self, node, key):
        if node == None or node.key == key:
            return node
        for child in node.children:
            return_node = self.find_node(child, key)
            if return_node:
                return return_node
        return None

    def add(self, new_key, parent_key=None):
        new_node = Node(new_key)
        if parent_key == None:
            self.root = new_node
            self.size = 1
        else:
            parent_key.children.append(new_node)
            self.size += 1
        return new_node


if __name__ == '__main__':
    test_cases = int(input())
    for _ in range(test_cases):

        N = [el for el in input().split()]
        '''
        N-ary Tree Building
        '''

        tree = N_ary_Tree()
        curr = 0
        for i in range(len(N)):
            if i == 0:
                q = deque()
                curr = tree.add(int(N[0]))
            elif N[i] == " " or N == "\n":
                continue
            elif q and N[i] == "N":
                curr = q.popleft()
            elif N[i] != "N":
                q.append(tree.add(int(N[i]), curr))

        res = Solution().duplicateSubtreeNaryTree(tree.root)
        print(res)
        print("~")

# } Driver Code Ends