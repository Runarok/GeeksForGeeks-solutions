from typing import Optional

"""
Definition for singly Link List Node
class Node:
    def __init__(self, x):
        self.data = x
        self.next = None

You can also use the following for printing the link list.
printList(node)
"""

class Solution:
    def reverse(self, head: Optional['Node'], k: int) -> Optional['Node']:
        # Helper function to reverse a linked list
        def reverse_list(node):
            current_node = node
            previous_node = None
            while current_node:
                next_node = current_node.next
                current_node.next = previous_node
                previous_node = current_node
                current_node = next_node
            return previous_node

        # Step 1: Calculate the length of the linked list
        current_node = head
        list_length = 0
        while current_node:
            current_node = current_node.next
            list_length += 1
        
        # Step 2: Traverse to the kth node to split the list
        current_node = head
        for _ in range(k - 1):
            current_node = current_node.next
        
        # 'remaining_list' is the part after the kth node
        remaining_list = current_node.next
        current_node.next = None  # Break the list into two parts
        
        # Step 3: Reverse the first part (head to kth node)
        reversed_first_part = reverse_list(head)
        
        # Step 4: Traverse to the end of the reversed first part
        last_node_of_first_part = reversed_first_part
        while last_node_of_first_part.next:
            last_node_of_first_part = last_node_of_first_part.next
        
        # Step 5: Reverse the second part (kth node to the end)
        reversed_second_part = reverse_list(remaining_list)
        
        # Step 6: Connect the two reversed parts
        last_node_of_first_part.next = reversed_second_part
        
        # Step 7: Return the new head of the list (reversed first part)
        return reversed_first_part

 # Driver Code Starts
class Node:

    def __init__(self, x):
        self.data = x
        self.next = None


def printList(node):
    while (node != None):
        print(node.data, end=" ")
        node = node.next
    print()


def inputList():

    data = [int(i) for i in input().strip().split()
            ]  #all data of linked list in a line
    n = len(data)
    head = Node(data[0])
    tail = head
    for i in range(1, n):
        tail.next = Node(data[i])
        tail = tail.next
    return head


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):

        head = inputList()

        k = int(input())

        obj = Solution()
        res = obj.reverse(head, k)

        printList(res)

        print("~")

# } Driver Code Ends