# User function Template for python3

'''
# Node Class:
class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None
'''

# Function to return a list containing elements of left view of the binary tree.
class Solution:
    def LeftView(self, root):
        # If the tree is empty, return an empty list
        if root is None:
            return []
        
        queue = []  # Queue to perform level order traversal
        queue.append(root)  # Start with the root node
        res = []  # List to store the left view elements
        
        # Perform level order traversal
        while len(queue) != 0:
            level_length = len(queue)  # Number of nodes at the current level
            
            # Iterate through all nodes at the current level
            for i in range(level_length):
                node = queue.pop(0)  # Dequeue the front node
                
                # If it's the first node of the current level, add it to the result
                if i == 0:
                    res.append(node.data)
                
                # Enqueue left and right children if they exist
                if node.left is not None:
                    queue.append(node.left)
                if node.right is not None:
                    queue.append(node.right)
        
        return res  # Return the left view of the binary tree

#{ 
 # Driver Code Starts
#Contributed by Sudarshan Sharma
from collections import deque


# Tree Node
class Node:

    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None


# Function to Build Tree
def buildTree(s):
    #Corner Case
    if (len(s) == 0 or s[0] == "N"):
        return None

    # Creating list of strings from input
    # string after spliting by space
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


if __name__ == "__main__":
    t = int(input())
    for _ in range(0, t):
        s = input()
        root = buildTree(s)
        ob = Solution()
        result = ob.LeftView(root)
        if len(result) == 0:
            print("[]", end=" ")
        for value in result:
            print(value, end=" ")
        print()

        print("~")

# } Driver Code Ends