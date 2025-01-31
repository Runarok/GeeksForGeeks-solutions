#User function Template for python3

'''
class DLLNode:
    def __init__(self, val):
        self.data = val
        self.next = None
        self.prev = None
'''

class Solution:
    def quickSort(self, head):
        # Base cases: if the list is empty or has only one element
        if head is None or head.next is None:
            return head, head
        
        # Choose the first node as pivot
        pivot = head
        i = pivot
        j = pivot.next
        
        # Partition the list around the pivot
        while j is not None:
            if j.data < pivot.data:
                i = i.next
                i.data, j.data = j.data, i.data
            j = j.next
        
        # After partitioning, `i` is the last node smaller than the pivot
        temp = i.next
        if temp:
            i.next = None  # Break the list into two parts
        
        # Recursively sort the left and right parts of the list
        left_head, left_tail = self.quickSort(pivot.next)  # Sort the right part
        right_head, right_tail = self.quickSort(temp)      # Sort the left part
        
        # Reconnect the pivot with the sorted parts
        if left_head is None and right_head is None:
            pivot.next = None
            pivot.prev = None
            return pivot, pivot
        
        elif left_head is None:
            pivot.next = right_head
            right_head.prev = pivot
            pivot.prev = None
            return pivot, right_tail
        
        elif right_head is None:
            left_tail.next = pivot
            pivot.prev = left_tail
            pivot.next = None
            return left_head, pivot
        
        else:
            left_tail.next = pivot
            pivot.prev = left_tail
            pivot.next = right_head
            right_head.prev = pivot
            return left_head, right_tail

    def quick_sort(self, head):
        # Call the helper function and return the sorted list head
        sorted_head, _ = self.quickSort(head)
        return sorted_head

#{ 
 # Driver Code Starts
class DLLNode:

    def __init__(self, val):
        self.data = val
        self.next = None
        self.prev = None


def push(head_ref, tail_ref, new_data):
    new_node = DLLNode(new_data)

    new_node.next = None

    if tail_ref[0] is not None:
        new_node.prev = tail_ref[0]
        tail_ref[0].next = new_node
    else:
        head_ref[0] = new_node
        new_node.prev = None

    tail_ref[0] = new_node


def print_list(head):
    if head is None:
        return

    while head is not None:
        print(head.data, end=" ")
        head = head.next


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        arr = list(map(int, input().split()))
        head = [None]
        tail = [None]
        for num in arr:
            push(head, tail, num)

        obj = Solution()
        head[0] = obj.quick_sort(head[0])
        print_list(head[0])
        print()
        print("~")

# } Driver Code Ends