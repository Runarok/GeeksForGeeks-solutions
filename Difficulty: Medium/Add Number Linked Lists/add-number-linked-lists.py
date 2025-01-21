#User function Template for python3

''' Node for linked list:

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

'''
class Node:
    def __init__(self, data=0):
        self.data = data
        self.next = None

class Solution:
    def addTwoLists(self, num1, num2):
        # Helper function to reverse a linked list
        def rev(head):
            prev = None
            curr = head
            while curr:
                tmp = curr.next
                curr.next = prev
                prev = curr
                curr = tmp
            return prev
        
        # Reverse both input lists
        num1 = rev(num1)
        num2 = rev(num2)
        
        carry = 0
        # Create a new linked list to store the result
        ret = Node(0)
        cur = ret
        
        # Traverse through the lists and add corresponding digits
        while num1 or num2 or carry:
            # Get current digits or 0 if one of the lists is exhausted
            val = (num1.data if num1 else 0) + (num2.data if num2 else 0) + carry
            cur.data = val % 10  # Store the single digit in the current node
            carry = val // 10  # Calculate the carry for the next iteration
            
            # Move to the next node in the result list
            if num1:
                num1 = num1.next
            if num2:
                num2 = num2.next
                
            if num1 or num2 or carry:  # Only add a new node if necessary
                cur.next = Node(0)
                cur = cur.next
        
        # Reverse the result list to restore original order
        ret = rev(ret)
        
        # Remove any leading zeroes in the result
        while ret and ret.data == 0:
            ret = ret.next
        
        return ret

#{ 
 # Driver Code Starts
#Initial Template for Python 3


# Node Class
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None


# Linked List Class
class LinkedList:

    def __init__(self):
        self.head = None
        self.tail = None

    # creates a new node with given value and appends it at the end of the linked list
    def insert(self, val):
        if self.head is None:
            self.head = Node(val)
            self.tail = self.head
        else:
            self.tail.next = Node(val)
            self.tail = self.tail.next


# prints the elements of linked list starting with head
def printList(n):
    while n:
        print(n.data, end=' ')
        n = n.next
    print()


if __name__ == '__main__':
    for _ in range(int(input())):

        arr1 = (int(x) for x in input().split())
        num1 = LinkedList()
        for i in arr1:
            num1.insert(i)

        arr2 = (int(x) for x in input().split())
        num2 = LinkedList()
        for i in arr2:
            num2.insert(i)

        res = Solution().addTwoLists(num1.head, num2.head)
        printList(res)
        print("~")

# } Driver Code Ends