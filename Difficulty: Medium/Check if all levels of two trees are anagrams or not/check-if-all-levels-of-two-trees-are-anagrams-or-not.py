from typing import Optional
from collections import deque

# Definition of binary tree node.
class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None

class Solution:
    def areAnagrams(self, node1: Optional['Node'], node2: Optional['Node']) -> bool:
        # Perform level order traversal for both trees and store the nodes at each level
        dq = deque([node1])
        store = []
        
        # Traverse the first tree
        while dq:
            ln = len(dq)
            res = []
            for i in range(ln):
                temp = dq.popleft()
                res.append(temp.data)
                if temp.left:
                    dq.append(temp.left)
                if temp.right:
                    dq.append(temp.right)
            store.append(res)
        
        dq1 = deque([node2])
        store1 = []
        
        # Traverse the second tree
        while dq1:
            ln1 = len(dq1)
            res1 = []
            for i in range(ln1):
                temp = dq1.popleft()
                res1.append(temp.data)
                if temp.left:
                    dq1.append(temp.left)
                if temp.right:
                    dq1.append(temp.right)
            store1.append(res1)
        
        # If the number of levels are different, the trees are not anagrams
        if len(store) != len(store1):
            return 0
        
        # Check if the nodes at each level are anagrams
        for i in range(len(store)):
            if sorted(store[i]) != sorted(store1[i]):
                return 0
        
        # Return 1 if both trees are anagrams
        return 1

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
        
        node1 = inputTree();
        
        
        node2 = inputTree();
        
        obj = Solution()
        res = obj.areAnagrams(node1, node2)
        
        result_val = 1 if res else 0
        print(result_val)

        print("~")
# } Driver Code Ends