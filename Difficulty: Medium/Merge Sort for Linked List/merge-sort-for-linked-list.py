#User function Template for python3

'''
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
'''

class Solution:
    # Function to sort the given linked list using Merge Sort.
    def mergeSort(self, head):
        if not head or not head.next:
            return head
        
        # Finding the middle node
        slow, fast = head, head
        prev = None
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
        
        # Split the list into two halves
        prev.next = None
        
        # Recursively sort the two halves
        left = self.mergeSort(head)
        right = self.mergeSort(slow)
        
        # Merge the sorted halves
        return self.merge(left, right)

    def merge(self, list1, list2):
        # Dummy node to simplify merge logic
        dummy = Node(0)
        tail = dummy
        
        # Merging two sorted linked lists
        while list1 and list2:
            if list1.data < list2.data:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next
        
        # Attach any remaining nodes from either list
        if list1:
            tail.next = list1
        elif list2:
            tail.next = list2
        
        # Return the sorted list (skipping the dummy node)
        return dummy.next

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

        printList(Solution().mergeSort(head))
        print("~")
# } Driver Code Ends