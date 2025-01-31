class Node:
    def __init__(self, val):
        self.data = val
        self.next = None

class Solution:
    # Function to arrange vowels and consonants in the linked list.
    def arrangeCV(self, head):
        # Edge case: If the list is empty or has only one node
        if head is None or head.next is None:
            return head
        
        vowels = {'a', 'i', 'e', 'o', 'u', 'A', 'I', 'E', 'O', 'U'}
        
        vowels_node = Node(-1)  # Dummy node to start the vowels list
        consonants_node = Node(-1)  # Dummy node to start the consonants list
        
        vowels_pointer = vowels_node
        consonants_pointer = consonants_node
        
        current_pointer = head
        
        # Traverse the linked list and separate vowels and consonants
        while current_pointer is not None:
            if current_pointer.data in vowels:
                vowels_pointer.next = current_pointer
                vowels_pointer = vowels_pointer.next
            else:
                consonants_pointer.next = current_pointer
                consonants_pointer = consonants_pointer.next
            
            current_pointer = current_pointer.next
        
        # Terminate the consonants list and join the two lists
        vowels_pointer.next = consonants_node.next
        consonants_pointer.next = None
        
        # Return the head of the rearranged list
        return vowels_node.next
#{ 
 # Driver Code Starts
# Node Class
class Node:

    def __init__(self, val):
        self.data = val
        self.next = None


# Linked List Class
class Linked_List:

    def __init__(self):
        self.head = None
        self.tail = None

    def insert(self, val):
        if self.head is None:
            self.head = Node(val)
            self.tail = self.head
        else:
            self.tail.next = Node(val)
            self.tail = self.tail.next


def printList(head):
    tmp = head
    while tmp:
        print(tmp.data, end=' ')
        tmp = tmp.next
    print()


if __name__ == '__main__':
    for i in range(int(input())):

        arr = [str(x) for x in input().split()]

        lis = Linked_List()
        for i in arr:
            lis.insert(i)

        newHead = Solution().arrangeCV(lis.head)
        printList(newHead)

        print("~")

# } Driver Code Ends