#User function Template for python3

from typing import Tuple

class Solution:
    def _depth(self, root: 'Node | None') -> int:
        if root is None:
            return 0
        return 1 + max(self._depth(root.left), self._depth(root.right))

    def burn(self, root: 'Node | None', target: int) -> Tuple['int | None', int]:
        if root is None:
            return None, 0
        if target == root.data:
            return self._depth(root) - 1, 0
        left_elapsed, left_depth = self.burn(root.left, target)
        right_elapsed, right_depth = self.burn(root.right, target)
        if left_elapsed is None and right_elapsed is None:
            return None, 1 + max(left_depth, right_depth)
        if left_elapsed is None:
            assert right_elapsed is not None
            right_depth += 1
            return max(right_elapsed, left_depth + right_depth), right_depth
        left_depth += 1
        return max(left_elapsed, left_depth + right_depth), left_depth

    def minTime(self, root: 'Node | None', target: int) -> int:
        return self.burn(root, target)[0] or 0


#{ 
 # Driver Code Starts
#Initial Template for Python 3

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
    for _ in range(t):
        line=input()
        target=int(input())
        root=buildTree(line)
        print(Solution().minTime(root,target))

        print("~")
# } Driver Code Ends