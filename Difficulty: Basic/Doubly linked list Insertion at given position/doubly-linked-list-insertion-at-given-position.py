# Your task is to complete this function
# function should add a new node after the pth position
# function shouldn't print or return any data

'''
class Node:
	def __init__(self, data):
		self.data = data
		self.next = None
		self.prev = None

'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class Solution:
    # Function to insert a new node at given position in doubly linked list.
    def addNode(self, head, p, x):
        new_node = Node(x)
        current = head
        
        # Traverse to the p-th node
        for i in range(p):
            if current is None:
                return head  # Position is out of bounds
            current = current.next
        
        # If we are inserting at the beginning (before the first node)
        if current is head:
            new_node.next = head
            head.prev = new_node
            return new_node
        
        # Insert the new node after the p-th node
        new_node.next = current.next
        if current.next:
            current.next.prev = new_node
        current.next = new_node
        new_node.prev = current
        
        return head


#{ 
 # Driver Code Starts
class Node:

    def __init__(self, data):
        self.data = data

        self.next = None
        self.prev = None


class DoublyLinkedList:

    def __init__(self):
        self.head = None
        self.tail = None

    def add(self, new_data):
        new_node = Node(new_data)
        if (self.head == None):
            self.head = new_node
            self.tail = new_node
            return

        self.tail.next = new_node
        new_node.prev = self.tail
        self.tail = new_node
        return

    def printList(self, node):
        while (node.next is not None):
            node = node.next
        while node.prev is not None:
            node = node.prev
        while (node is not None):
            print(node.data, end=" ")
            node = node.next
        print()


if __name__ == '__main__':
    t = int(input())
    for i in range(t):

        arr = map(int, input().strip().split())
        llist = DoublyLinkedList()
        for e in arr:
            llist.add(e)

        pos, data = map(int, input().strip().split())

        head = Solution().addNode(llist.head, pos, data)
        llist.printList(head)

        print("~")

# } Driver Code Ends