#User function Template for python3

'''
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
'''
'''
    head1:  head of linkedList 1
    head2:  head of linkedList 2
    n1:  len of  linkedList 1
    n2:  len of linkedList 1
    x:   given sum
'''
class Solution:
    def countPairs(self, head1, head2, x):
        elements = set()
        count = 0
        current = head1
        
        # Traverse the first linked list and add the data to the set
        while current:
            elements.add(current.data)
            current = current.next
            
        # Traverse the second linked list and check if complement exists in the set
        currentInHead2 = head2
        while currentInHead2:
            if (x - currentInHead2.data) in elements:
                count += 1
            currentInHead2 = currentInHead2.next
        
        return count

#{ 
 # Driver Code Starts
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None


def printList(head):
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

        x = int(input().strip())
        obj = Solution()
        count = obj.countPairs(head1, head2, x)
        print(count)
        print("~")

# } Driver Code Ends