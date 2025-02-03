# User function Template for python3

class Solution:
    # Function to delete an element in a binary tree
    
    @staticmethod
    def deleteDeepest(root, node):
        q = []
        q.append(root)
        
        # Perform level-order traversal to find and delete the deepest node
        while len(q) > 0:
            temp = q.pop(0)
            
            # If the current node is the deepest node, delete it
            if temp == node:
                temp = None
                del node
                return
            
            # Add left and right children to the queue for traversal
            if temp.right:
                if temp.right == node:
                    temp.right = None
                    del node
                    return
                else:
                    q.append(temp.right)
            if temp.left:
                if temp.left == node:
                    temp.left = None
                    del node
                    return
                else:
                    q.append(temp.left)

    def deleteNode(self, root, key): 
        # If the root is None, return None
        if root == None:
            return None
        
        # If the tree only has one node and it's the key node, delete it
        if not root.left and not root.right:
            if root.data == key:
                return None
            else:
                return root
            
        q = []
        q.append(root)
        temp = None
        delNode = None
        
        # Perform level-order traversal to find the node to delete
        while len(q) > 0:
            temp = q.pop(0)
            
            if temp.data == key:
                delNode = temp
                
            # Add left and right children to the queue
            if temp.left:
                q.append(temp.left)
            if temp.right:
                q.append(temp.right)
        
        # If the node to delete is found, swap it with the deepest node
        if delNode:
            x = temp.data
            delNode.data = x
            
            # Delete the deepest node
            self.deleteDeepest(root, temp)
        
        return root


#{ 
 # Driver Code Starts
# Initial Template for Python 3

# Contributed by Sudarshan Sharma
from collections import deque


# Tree Node
class Node:

    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None


# Function to Build Tree
def buildTree(s):
    # Corner Case
    if (len(s) == 0 or s[0] == "N"):
        return None

    # Creating list of strings from input string after splitting by space
    ip = list(map(str, s.split()))

    # Create the root of the tree
    root = Node(int(ip[0]))
    size = 0
    q = deque()

    # Push the root to the queue
    q.append(root)
    size = size + 1

    # Starting from the second element
    i = 1
    while (size > 0 and i < len(ip)):
        # Get and remove the front of the queue
        currNode = q[0]
        q.popleft()
        size = size - 1

        # Get the current node's value from the string
        currVal = ip[i]

        # If the left child is not null
        if (currVal != "N"):
            # Create the left child for the current node
            currNode.left = Node(int(currVal))

            # Push it to the queue
            q.append(currNode.left)
            size = size + 1

        # For the right child
        i = i + 1
        if (i >= len(ip)):
            break
        currVal = ip[i]

        # If the right child is not null
        if (currVal != "N"):
            # Create the right child for the current node
            currNode.right = Node(int(currVal))

            # Push it to the queue
            q.append(currNode.right)
            size = size + 1
        i = i + 1

    return root


# In-order traversal of the tree to print nodes
def inorder(root):
    if not root:
        return
    inorder(root.left)
    print(root.data, end=' ')
    inorder(root.right)


# Main function to read input and process the binary tree
if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        s = input()
        key = int(input())
        root = buildTree(s)

        # Creating an object of the Solution class to call its methods
        sol = Solution()

        # Deleting the node with the given key
        root = sol.deleteNode(root, key)

        # Inorder traversal of the modified tree
        inorder(root)
        print()
        print("~")

# } Driver Code Ends