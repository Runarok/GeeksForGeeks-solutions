#Your task is to complete this function
#Your function should print the data in one line only

'''
class Node:
    def __init__(self, x):
        self.data = x
        self.next = None
'''


class Solution:
    # Function to display the elements of a linked list in the same line
    def printList(self, head):
        # A loop that runs until head is None
        while head is not None:
            # Printing data of current node
            print(head.data, end=" ")
            # Moving to the next node
            head = head.next


#{ 
 # Driver Code Starts
class Node:

    def __init__(self, x):
        self.data = x
        self.next = None


if __name__ == "__main__":
    t = int(input())  # Number of test cases
    for _ in range(t):
        input_list = list(map(int, input().split()))
        head = None
        tail = None

        # Building the linked list from input
        for x in input_list:
            if head is None:
                head = Node(x)
                tail = head
            else:
                tail.next = Node(x)
                tail = tail.next

        ob = Solution()
        ob.printList(head)
        print()  # Newline after printing the linked list
        print("~")

# } Driver Code Ends