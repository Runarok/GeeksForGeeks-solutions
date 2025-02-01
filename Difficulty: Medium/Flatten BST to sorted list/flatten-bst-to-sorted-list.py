# User function Template for Python3

'''
class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None
'''

class Solution:
    def flattenBST(self, root):
        # Initialize a dummy node to help with the flattening process
        dummy = Node(-1)  # Dummy node to keep track of the previous node
        prev = dummy  # This will be used to link the nodes
        
        # Function for in-order traversal of the tree
        def inorder(node):
            nonlocal prev  # To modify the 'prev' variable defined outside the function
            
            if not node:
                return None  # Return None if the current node is None
            
            inorder(node.left)  # Traverse the left subtree first
            
            # Attach the current node to the right of the previous node
            prev.right = node
            node.left = None  # Set the left child of the current node to None
            prev = node  # Update 'prev' to the current node
            
            inorder(node.right)  # Traverse the right subtree
        
        # Perform in-order traversal starting from the root
        inorder(root)
        
        return dummy.right  # Return the flattened tree starting from the first node
#{ 
 # Driver Code Starts

#Initial Template for Python 3

from queue import Queue

class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None


def newNode(key):
    node = Node(key)
    return node

def buildTree(s):
    if len(s) == 0 or s[0] == 'N':
        return None

    ip = s.split()
    root = newNode(int(ip[0]))
    q = Queue()
    q.put(root)

    i = 1
    while not q.empty() and i < len(ip):
        currNode = q.get()

        currVal = ip[i]
        if currVal != "N":
            currNode.left = newNode(int(currVal))
            q.put(currNode.left)

        i += 1
        if i >= len(ip):
            break
        currVal = ip[i]
        if currVal != "N":
            currNode.right = newNode(int(currVal))
            q.put(currNode.right)

        i += 1

    return root


def printList(head):
    # if head==None:
    #     return
    # print(head.data, end=" ")
    # printList(head.left)
    # printList(head.right)
    while head:
        if head.left:
            print(-1,end=" ")
        print(head.data, end=" ")
        head = head.right
        
    print()

if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        s = input()
        root = buildTree(s)
        ob = Solution()
        ans = ob.flattenBST(root)
        printList(ans)
        # print()

        print("~")
# } Driver Code Ends