#User function Template for python3

# Linked List Node 
class Node:
    def __init__(self, d): 
        self.data = d 
        self.next = None

class Solution:    
    def rearrangeEvenOdd(self, head):
        if not head or not head.next:
            return head

        # Initialize pointers for odd and even lists
        odd = head
        even = head.next
        even_head = even  # To remember the head of the even list

        # Rearrange the list
        while even and even.next:
            odd.next = even.next  # Link odd nodes
            odd = odd.next        # Move odd pointer
            even.next = odd.next  # Link even nodes
            even = even.next      # Move even pointer

        # Connect the end of the odd list to the head of the even list
        odd.next = even_head

        # Ensure the last even node points to None (terminate the even list properly)
        if even:
            even.next = None

        return head
#{ 
 # Driver Code Starts
#Initial Template for Python 3


class Node:

    def __init__(self, data):
        self.data = data
        self.next = None


def printList(node):
    while node:
        print(node.data, end=" ")
        node = node.next
    print()


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        arr = list(map(int, input().strip().split()))
        head = None
        if arr:
            head = Node(arr[0])
            tail = head
            for value in arr[1:]:
                tail.next = Node(value)
                tail = tail.next

        Solution().rearrangeEvenOdd(head)
        printList(head)

# This code is contributed by Prerna Saini

# } Driver Code Ends