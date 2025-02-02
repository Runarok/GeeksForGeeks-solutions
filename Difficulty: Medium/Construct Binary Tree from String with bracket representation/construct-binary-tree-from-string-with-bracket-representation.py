from typing import Optional
from collections import deque

# Definition of binary tree node.
class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None

class Solution:
    def getIndex(self, start, end, s):
        stack = []
        for i in range(start, end + 1):
            if s[i] == '(':
                stack.append('(')
            elif s[i] == ')':
                stack.pop()
                if len(stack) == 0:
                    return i
        return -1

    def solve(self, start, end, s):
        if start > end:
            return None

        # Extract number (node value)
        num = 0
        while start < len(s) and s[start].isdigit():
            num = num * 10 + int(s[start])
            start += 1
        
        node = Node(num)

        # If there is a left or right child enclosed in parentheses
        index = -1
        if start < len(s) and s[start] == '(':
            index = self.getIndex(start, end, s)

        # Recurse to construct left and right subtrees
        if index != -1:
            node.left = self.solve(start + 1, index - 1, s)
            node.right = self.solve(index + 2, end - 1, s)
        
        return node

    def treeFromString(self, s: str) -> Optional['Node']:
        # Code to convert string to binary tree
        return self.solve(0, len(s) - 1, s)

#{ 
 # Driver Code Starts
class Node:
    def __init__(self,val):
        self.data=val
        self.right=None
        self.left=None

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

def inputTree():
    treeString=input().strip()
    root = buildTree(treeString)
    return root
def inorder(root):
    if (root == None):
       return
    inorder(root.left);
    print(root.data,end=" ")
    inorder(root.right)

if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        s = (input())
        
        obj = Solution()
        res = obj.treeFromString(s)
        
        inorder(res)
        print()
        

        print("~")
# } Driver Code Ends