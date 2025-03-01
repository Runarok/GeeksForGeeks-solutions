class Solution:
    def insert_node_at_pos(self, head, pos, x):
        newnode = Node(x)
        
        # Case when the list is empty
        if head is None:
            newnode.next = newnode  # Circular list with one node
            return newnode
        
        node = head
        index = 0
        parent = None
        
        # Traverse the list to find the correct position
        while index < pos:
            parent, node = node, node.next
            index += 1
        
        # If parent is not None, insert in between
        if parent:
            newnode.next = node
            parent.next = newnode
            result = head
        else:
            # If we are inserting at the head, update the head pointer
            newnode.next = head
            while node.next != head:
                node = node.next  # Go to the last node
            node.next = result = newnode

        return result


#{ 
 # Driver Code Starts
class Node:

    def __init__(self, val):
        self.data = val
        self.next = None


def create_linked_list(arr):
    head = Node(0)
    temp = head
    for val in arr:
        new_node = Node(val)
        temp.next = new_node
        temp = temp.next
    temp.next = head.next
    return head.next


def print_linked_list(head):
    temp = head
    start = head
    while True:
        print(temp.data, end=" ")
        if temp.next == start:
            break
        temp = temp.next
    print()


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        arr = list(map(int, input().split()))
        head = create_linked_list(arr)
        pos = int(input())
        x = int(input())
        assert 0 <= pos <= len(arr)
        solution = Solution()
        head = solution.insert_node_at_pos(head, pos, x)
        print_linked_list(head)
        print("~")

# } Driver Code Ends