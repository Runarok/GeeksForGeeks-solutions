#{ 
 # Driver Code Starts
#Initial Template for Python 3


from collections import deque
import sys
sys.setrecursionlimit(50000)
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
    

# } Driver Code Ends
#User function Template for python3
from collections import deque

class Solution:
    def maximumValue(self, node):
        # Edge case: if the tree is empty
        if not node:
            return []
        
        # Initialize a queue for level-order traversal
        queue = deque([node])
        result = []
        
        while queue:
            level_size = len(queue)
            level_max = float('-inf')  # Start with the smallest possible value
            
            # Process all nodes at the current level
            for _ in range(level_size):
                current_node = queue.popleft()
                
                # Update the maximum value for this level
                level_max = max(level_max, current_node.data)
                
                # Enqueue left and right children if they exist
                if current_node.left:
                    queue.append(current_node.left)
                if current_node.right:
                    queue.append(current_node.right)
            
            # After processing this level, add the max value to the result list
            result.append(level_max)
        
        return result


#{ 
 # Driver Code Starts.
if __name__=="__main__":
    t=int(input())
    for _ in range(0,t):
        s=input()
        root=buildTree(s)
        obj=Solution()
        ans=obj.maximumValue(root)
        for i in ans:
            print(i,end=' ')
        print();

        print("~")
# } Driver Code Ends