# class Node:
#     def __init__(self):
#         self.data = None
#         self.left = None
#         self.right = None
        
class Solution:
    def absolute_diff(self, root):
        prev = None  # To store the previous node's value during inorder traversal
        min_diff = float('inf')  # Initialize minimum difference as infinity

        # Helper function for inorder traversal
        def inorder(node):
            nonlocal prev, min_diff
            if not node:
                return
            
            inorder(node.left)  # Visit left subtree
            
            # Compute the absolute difference between the current node and the previous node
            if prev is not None:
                min_diff = min(min_diff, node.data - prev)
            
            prev = node.data  # Update previous node to current node's value
            
            inorder(node.right)  # Visit right subtree

        inorder(root)  # Start inorder traversal from the root
        return min_diff  # Return the minimum absolute difference found




#{ 
 # Driver Code Starts
from collections import deque


class Node:

    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


# Function to Build Tree
def buildTree(str):
    # Corner Case
    if len(str) == 0 or str[0] == 'N':
        return None

    # Creating list of strings from input string after splitting by space
    ip = str.split()

    # Create the root of the tree
    root = Node(int(ip[0]))

    # Push the root to the queue
    queue = deque()
    queue.append(root)

    # Starting from the second element
    i = 1
    while queue and i < len(ip):
        # Get and remove the front of the queue
        currNode = queue.popleft()

        # Get the current node's value from the string
        currVal = ip[i]

        # If the left child is not null
        if currVal != "N":
            # Create the left child for the current node
            currNode.left = Node(int(currVal))

            # Push it to the queue
            queue.append(currNode.left)

        # For the right child
        i += 1
        if i >= len(ip):
            break
        currVal = ip[i]

        # If the right child is not null
        if currVal != "N":
            # Create the right child for the current node
            currNode.right = Node(int(currVal))

            # Push it to the queue
            queue.append(currNode.right)

        i += 1
    return root


for _ in range(int(input())):
    s = input()
    root = buildTree(s)
    if root is None:
        continue
    if root.left is None and root.right is None:
        continue

    ob = Solution()
    print(ob.absolute_diff(root))
    print("~")

# } Driver Code Ends