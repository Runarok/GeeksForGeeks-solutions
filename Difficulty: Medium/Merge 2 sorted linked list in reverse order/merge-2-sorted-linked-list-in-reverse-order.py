#User function Template for python3

'''
class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
'''

# User function Template for python3

'''
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
'''

class Solution:
    # Function to merge two sorted linked lists and return the result in reversed order
    def mergeResult(self, list1, list2):
        # Reverse the merged list and return
        return self.reverse(self.merge(list1, list2))
    
    # Function to merge two sorted linked lists in ascending order
    def merge(self, list1, list2):
        # If one of the lists is empty, return the other
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        
        # Compare the data of the two nodes and recursively merge the rest
        if list1.data <= list2.data:
            list1.next = self.merge(list1.next, list2)
            return list1
        else:
            list2.next = self.merge(list1, list2.next)
            return list2
        
    # Function to reverse the linked list
    def reverse(self, head):
        # Base case: if the list is empty or has only one node, return it
        if head is None or head.next is None:
            return head
        
        # Recursively reverse the rest of the list
        reversed_head = self.reverse(head.next)
        
        # Reversing the links
        head.next.next = head
        head.next = None
        
        # Return the new head of the reversed list
        return reversed_head
#{ 
 # Driver Code Starts
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None


def print_list(head):
    temp = head
    while temp:
        print(temp.data, end=' ')
        temp = temp.next
    print()


if __name__ == "__main__":
    T = int(input())
    for _ in range(T):
        input1 = input().split()
        input2 = input().split()

        head1, tail1 = None, None
        for item in input1:
            new_node = Node(int(item))
            if not head1:
                head1 = new_node
                tail1 = new_node
            else:
                tail1.next = new_node
                tail1 = new_node

        head2, tail2 = None, None
        for item in input2:
            new_node = Node(int(item))
            if not head2:
                head2 = new_node
                tail2 = new_node
            else:
                tail2.next = new_node
                tail2 = new_node

        ob = Solution()
        result = ob.mergeResult(head1, head2)
        print_list(result)

# } Driver Code Ends