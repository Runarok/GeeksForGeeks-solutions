#User function Template for python3

'''
#LinkedList Node
class LNode:
    def __init__(self, data):   # data -> value stored in node
        self.data = data
        self.next = None
        
#Tree Node        
class TNode:
    def __init__(self, data):
        self.data=data
        self.left = self.right = None
'''

class LNode:
    def __init__(self, x):
        self.data = x
        self.next = None

class TNode:
    def __init__(self, x):
        self.data = x
        self.left = None
        self.right = None

class Solution:
    def sortedListToBST(self, head: LNode) -> TNode:
        # Base case: if the list is empty, return None
        if not head:
            return None
        
        # Base case: if there is only one node in the list, return it as the tree root
        if not head.next:
            return TNode(head.data)
        
        # Find the middle element using the slow and fast pointer technique
        slow = head
        fast = head
        prev = None  # To keep track of the node before slow
        
        # Move slow to the middle, and fast to the end
        while fast and fast.next:
            fast = fast.next.next
            prev = slow
            slow = slow.next
        
        # The slow pointer is now at the middle node, which becomes the root
        root = TNode(slow.data)
        
        # Disconnect the left part of the list to avoid cycles
        if prev:
            prev.next = None
        
        # Recursively construct the left and right subtrees
        root.left = self.sortedListToBST(head)  # Left subtree
        root.right = self.sortedListToBST(slow.next)  # Right subtree
        
        return root

#{ 
 # Driver Code Starts
#Initial Template for Python 3


#Initial Template for Python 3
# Node Class
class LNode:

    def __init__(self, data):  # data -> value stored in node
        self.data = data
        self.next = None


class TNode:

    def __init__(self, data):
        self.data = data
        self.left = self.right = None


# Linked List Class
class LinkedList:

    def __init__(self):
        self.head = None
        self.tail = None

    # creates a new node with given value and appends it at the end of the linked list
    def append(self, new_value):
        new_node = LNode(new_value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return
        self.tail.next = new_node
        self.tail = new_node


# prints the elements of linked list
def preOrder(root):
    if root == None:
        return

    print(root.data, end=" ")
    preOrder(root.left)
    preOrder(root.right)


if __name__ == '__main__':
    for _ in range(int(input())):

        a = LinkedList()  # create a new linked list 'a'.
        #b = LinkedList() # create a new linked list 'b'.

        nodes_a = list(map(int, input().strip().split()))
        #nodes_b = list(map(int, input().strip().split()))

        for x in nodes_a:
            a.append(x)

        ob = Solution()
        root = ob.sortedListToBST(a.head)
        preOrder(root)

        print()

        print("~")

# } Driver Code Ends