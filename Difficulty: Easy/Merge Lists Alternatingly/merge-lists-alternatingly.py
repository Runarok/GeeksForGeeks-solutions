'''
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
'''

''' your task is to complete this function
    function should return a list of the two new heads
'''
class Solution:
    def merge_list(self, head1, head2):
        # Initialize pointers for both lists
        list1_pointer = head1
        list2_pointer = head2
    
        # Traverse both lists until we reach the end of one of them
        while list1_pointer and list2_pointer:
            # Save the next nodes of both lists before altering the pointers
            next_list1 = list1_pointer.next
            next_list2 = list2_pointer.next
    
            # Create a new node from the second list and link it after the current node of the first list
            new_node_from_list2 = Node(list2_pointer.data)
            list1_pointer.next = new_node_from_list2
            new_node_from_list2.next = next_list1
    
            # Move the pointer of the first list ahead by two steps
            list1_pointer = next_list1
    
            # Move the pointer of the second list ahead by one step
            list2_pointer = next_list2
    
        # Return the merged list (head1) and the remaining nodes of head2 (if any)
        return head1, list2_pointer


#{ 
 # Driver Code Starts
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None


def print_list(head):
    temp = head
    if (not head):
        print("NULL")
        return
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

        obj = Solution()
        new_heads = obj.merge_list(head1, head2)
        print_list(new_heads[0])
        print_list(new_heads[1])
        print("~")

# } Driver Code Ends