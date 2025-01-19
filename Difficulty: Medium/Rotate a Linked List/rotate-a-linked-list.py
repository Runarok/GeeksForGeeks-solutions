# Your task is to complete this function

'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

'''


class Solution:
    
    #Function to rotate a linked list.
    def rotate(self, head, k):
        # code here
        # contrain is that there is atleast 1 node, but k can be 0 
        if k == 0:
            return head
        # get the length of the linked list to handle large k using k modulo length
        curr = head
        l = 1
        while curr.next is not None:
            curr = curr.next
            l += 1
        k %= l
        # if k is multiple of length, then no change in the linked list
        if k == 0:
            return head
        # make the current linkedlist circular
        curr.next = head
        # Traverse the linked list to find the kth node
        curr = head
        for _ in range(1, k):
            curr = curr.next
        # Update the (k + 1)th node as the new head
        head = curr.next
        # Break the loop by updating the next pointer of kth node
        curr.next = None
        return head


#{ 
 # Driver Code Starts
#Initial Template for Python 3


# Define the Node class for the linked list
class Node:

    def __init__(self, x):
        self.data = x
        self.next = None


# Function to print the linked list
def printList(node):
    while node:
        print(node.data, end=" ")
        node = node.next
    print()


#Position this line where user code will be pasted.

# Main function
if __name__ == "__main__":
    import sys
    input = sys.stdin.read
    data = input().splitlines()

    t = int(data[0].strip())
    idx = 1

    while t > 0:
        arr = list(map(int, data[idx].strip().split()))

        head = None
        if arr:
            head = Node(arr[0])
            tail = head
            for num in arr[1:]:
                tail.next = Node(num)
                tail = tail.next

        k = int(data[idx + 1].strip())
        idx += 2
        head = Solution().rotate(head, k)
        printList(head)
        print("~")
        t -= 1

# } Driver Code Ends