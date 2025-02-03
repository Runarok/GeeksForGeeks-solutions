'''
# Node Class:
class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None
'''

def helper(root):
    if root is None or (root.left is None and root.right is None):
        return 1  # Base case: if node is null or leaf, it's valid
    
    # Get values of left and right children, default to 0 if none
    left = root.left.data if root.left else 0
    right = root.right.data if root.right else 0
    
    # Check if current node data equals sum of left and right child data
    if left + right == root.data and helper(root.left) and helper(root.right):
        return 1  # If condition holds for both children, it's valid
    else:
        return 0  # If condition fails, return invalid
    
class Solution:
    # Function to check whether all nodes of a tree have the value 
    # equal to the sum of their child nodes.
    def isSumProperty(self, root):
        if root is None:
            return 1  # If tree is empty, it's trivially valid
        return helper(root)  # Start the helper function to check sum property


#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Initial Template for Python 3

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
    if(len(s)==0 or s[0]=="N"):           
        return None
        
    # Creating list of strings from input 
    # string after spliting by space
    ip=list(map(str,s.split()))
    
    # Create the root of the tree
    root=Node(int(ip[0]))                     
    size=0
    q=deque()
    
    # Push the root to the queue
    q.append(root)                            
    size=size+1 
    
    # Starting from the second element
    i=1                                       
    while(size>0 and i<len(ip)):
        # Get and remove the front of the queue
        currNode=q[0]
        q.popleft()
        size=size-1
        
        # Get the current node's value from the string
        currVal=ip[i]
        
        # If the left child is not null
        if(currVal!="N"):
            
            # Create the left child for the current node
            currNode.left=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.left)
            size=size+1
        # For the right child
        i=i+1
        if(i>=len(ip)):
            break
        currVal=ip[i]
        
        # If the right child is not null
        if(currVal!="N"):
            
            # Create the right child for the current node
            currNode.right=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.right)
            size=size+1
        i=i+1
    return root
    
    
if __name__=="__main__":
    t=int(input())
    for _ in range(0,t):
        s=input()
        root=buildTree(s)
        ob = Solution()
        print(ob.isSumProperty(root))
        
        


        print("~")
# } Driver Code Ends