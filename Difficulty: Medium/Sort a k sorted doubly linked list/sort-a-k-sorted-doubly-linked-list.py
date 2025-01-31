#User function Template for python3
'''
class DLLNode:
    def __init__(self,val) -> None:
        self.data = val
        self.prev = None
        self.next = None
'''
import heapq

class Solution:
    def sortAKSortedDLL(self, head, k):
        # Initialize the current pointer and counter
        temp = head
        cnt = 0
        
        # Create a min-heap (priority queue)
        pq = []
        
        # First, add the first 'k+1' nodes to the min-heap
        while temp is not None:
            if cnt < k + 1:
                heapq.heappush(pq, temp.data)  # Push the node's data into the heap
                cnt += 1
                temp = temp.next  # Move to the next node
            else:
                break
        
        # Initialize 'var' to point to the head of the list for modifying the data
        var = head
        
        # Continue processing the remaining nodes in the list
        while temp is not None:
            var.data = heapq.heappop(pq)  # Pop the smallest element from the heap and assign it to the current node
            var = var.next  # Move to the next node
            heapq.heappush(pq, temp.data)  # Push the next node's data into the heap
            temp = temp.next  # Move to the next node
        
        # Empty the heap and assign remaining sorted values to the nodes
        while pq:
            var.data = heapq.heappop(pq)  # Pop the smallest element and assign it to the current node
            var = var.next  # Move to the next node
        
        return head  # Return the head of the sorted DLL
#{ 
 # Driver Code Starts
import heapq


# A node of the doubly linked list
class DLLNode:

    def __init__(self, val):
        self.data = val
        self.next = None
        self.prev = None


# Function to insert a node at the end of the doubly linked list
def push(tail, new_data):
    new_node = DLLNode(new_data)
    new_node.next = None
    new_node.prev = tail

    if tail is not None:
        tail.next = new_node

    return new_node


# Function to print nodes in a given doubly linked list
def printList(head):
    while head is not None:
        print(head.data, end=" ")
        head = head.next
    print()


# Driver code
if __name__ == "__main__":
    t = int(input())  # Number of test cases
    for _ in range(t):
        arr = list(map(int, input().split()))  # Read the input array
        k = int(input())  # Read the value of k

        head = DLLNode(arr[0])
        tail = head

        for i in range(1, len(arr)):
            tail = push(tail, arr[i])

        solution = Solution()
        sorted_head = solution.sortAKSortedDLL(head, k)
        printList(sorted_head)
        print("~")

# } Driver Code Ends