#User function Template for python3

class Solution:
    def add_polynomial(self, head1, head2):
        # Initialize pointers to traverse both polynomials
        h1 = head1
        h2 = head2

        # Create a dummy node to simplify edge case handling
        dummy = Node(0, 0)
        current = dummy

        # Traverse both polynomial linked lists and merge them
        while h1 and h2:
            # If h1 has higher power, add h1's term to the result
            if h1.power > h2.power:
                current.next = Node(h1.coef, h1.power)
                h1 = h1.next
            # If h2 has higher power, add h2's term to the result
            elif h2.power > h1.power:
                current.next = Node(h2.coef, h2.power)
                h2 = h2.next
            # If both terms have the same power, add their coefficients
            else:
                new_coef = h1.coef + h2.coef
                # If the result is non-zero, add the term to the result
                if new_coef != 0:
                    current.next = Node(new_coef, h1.power)
                h1 = h1.next
                h2 = h2.next
            
            # Move the current pointer forward in the result list
            if current.next:
                current = current.next
        
        # If any terms are left in h1, append them to the result
        while h1:
            current.next = Node(h1.coef, h1.power)
            h1 = h1.next
            current = current.next
        
        # If any terms are left in h2, append them to the result
        while h2:
            current.next = Node(h2.coef, h2.power)
            h2 = h2.next
            current = current.next
        
        # Return the result starting from the first actual node (skip dummy)
        return dummy.next

#{ 
 # Driver Code Starts
import sys

input = sys.stdin.read


# Node Class
class Node:

    def __init__(self, coeff, pwr):
        self.coef = coeff
        self.power = pwr
        self.next = None


# Linked List Class
class LinkedList:

    def __init__(self):
        self.head = None

    def insert(self, coeff, pwr):
        if self.head is None:
            self.head = Node(coeff, pwr)
        else:
            new_node = Node(coeff, pwr)
            temp = self.head
            while temp.next:
                temp = temp.next
            temp.next = new_node


# Driver code
if __name__ == '__main__':
    data = input().splitlines()
    t = int(data[0])
    index = 1
    for _ in range(t):
        arr1 = list(map(int, data[index].strip().split()))
        poly1 = LinkedList()
        for i in range(0, len(arr1), 2):
            poly1.insert(arr1[i], arr1[i + 1])

        index += 1
        arr2 = list(map(int, data[index].strip().split()))
        poly2 = LinkedList()
        for i in range(0, len(arr2), 2):
            poly2.insert(arr2[i], arr2[i + 1])

        index += 1
        sum_head = Solution().add_polynomial(poly1.head, poly2.head)

        # Print the result
        temp = sum_head
        first = True
        while temp is not None:
            if not first:
                print(' + ', end='')
            print(str(temp.coef) + 'x^' + str(temp.power), end='')
            temp = temp.next
            first = False
        print()
        print("~")

# } Driver Code Ends