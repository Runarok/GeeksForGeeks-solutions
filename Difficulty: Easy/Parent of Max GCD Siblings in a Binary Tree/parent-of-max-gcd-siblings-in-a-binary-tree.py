import math
from collections import defaultdict

class Solution:
    def maxGCD(self, root):
        # Create a dictionary to store GCD values and corresponding nodes
        temp = defaultdict(list)
        
        # Preorder traversal function to calculate GCD of child nodes
        def preorder(root):
            if root is None:
                return 
            # If both left and right child exist, calculate the GCD
            if root.left is not None and root.right is not None:
                gcd = math.gcd(root.left.data, root.right.data)
                temp[gcd].append(root.data)
            preorder(root.left)
            preorder(root.right)
        
        # Start the preorder traversal
        preorder(root)
        
        # If no GCD values are found, return 0
        if len(temp) == 0:
            return 0
        
        # Find the maximum GCD value and return the largest node associated with it
        res = temp[max(temp)]
        
        return max(res)

#{ 
 # Driver Code Starts
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
        print(ob.maxGCD(root))
        
        


        print("~")
# } Driver Code Ends