#User function Template for python3
'''
	Function to return the value at point of intersection
	in two linked list, connected in y shaped form.
	
	Function Arguments: head1, head2 (heads of both the lists)
	
	Return Type: Node # driver code will print the Node->data
'''
'''
# Node Class
class Node:
    def __init__(self, data):   # data -> value stored in node
        self.data = data
        self.next = None

'''
class Solution:
    def intersectPoint(self, head1, head2):
        # Initialize pointers for both linked lists
        cur1, cur2 = head1, head2
        travel1, travel2 = False, False
        
        # Traverse both lists, switching to the other list when reaching the end
        # This ensures that both pointers traverse an equal length before they meet at the intersection
        while not travel1 or not travel2:
            # Move cur1 and cur2 to the next node in their respective lists
            cur1 = cur1.next if cur1 else None
            cur2 = cur2.next if cur2 else None
            
            # When cur1 reaches the end of the first list, switch it to the head of the second list
            if cur1 is None:
                cur1 = head2
                travel1 = True
            # When cur2 reaches the end of the second list, switch it to the head of the first list
            if cur2 is None:
                cur2 = head1
                travel2 = True

        # Now both pointers are guaranteed to be equidistant from the intersection
        while cur1:
            # If the two pointers meet, return the intersection point (node)
            if cur1 == cur2:
                return cur1
            # Move both pointers to the next node in their respective lists
            cur1 = cur1.next
            cur2 = cur2.next
        
        # If no intersection point is found, return None
        return None
#{ 
 # Driver Code Starts
class Node:

    def __init__(self, x):
        self.data = x
        self.next = None


def build_linked_list(values):
    head = tail = None
    for val in values:
        new_node = Node(val)
        if head is None:
            head = tail = new_node
        else:
            tail.next = new_node
            tail = new_node
    return head


if __name__ == "__main__":
    T = int(input())

    for _ in range(T):
        input1 = list(map(int, input().split()))
        input2 = list(map(int, input().split()))
        input3 = list(map(int, input().split()))

        head1 = build_linked_list(input1)
        head2 = build_linked_list(input2)
        head3 = build_linked_list(input3)

        # Connect the common linked list to both head1 and head2
        tail1 = head1
        while tail1 and tail1.next:
            tail1 = tail1.next
        if tail1:
            tail1.next = head3

        tail2 = head2
        while tail2 and tail2.next:
            tail2 = tail2.next
        if tail2:
            tail2.next = head3

        solution = Solution()
        intersection_node = solution.intersectPoint(head1, head2)
        if intersection_node:
            print(intersection_node.data)
        else:
            print(-1)  # Print -1 if no intersection
        print("~")

# } Driver Code Ends