#User function Template for python3

class Solution:
    
    def inPlace(self, root):
        # Step 1: Traverse the linked list and store the node data in an array
        current = root
        arr = []
        while current:
            arr.append(current.data)  # Add the data of the current node to the array
            current = current.next    # Move to the next node
        
        # Step 2: Initialize pointers to the start and end of the array
        left = 0
        right = len(arr) - 1
        current = root  # Reset 'current' to the head of the list
        
        # Step 3: Traverse the linked list again and update the data with the values from the array
        while right >= left:
            if right == left:
                current.data = arr[left]  # If only one element is left, assign it to current node
            else:
                current.data = arr[left]  # Assign data from the 'left' end of the array
                current = current.next    # Move to the next node
                current.data = arr[right]  # Assign data from the 'right' end of the array
            left += 1
            right -= 1
            current = current.next  # Move to the next node
        
        return root  # Return the modified linked list


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
    print("~")


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

        ob = Solution()
        ans = ob.inPlace(head)
        printList(ans)

# } Driver Code Ends