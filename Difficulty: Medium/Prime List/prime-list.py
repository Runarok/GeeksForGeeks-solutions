from typing import Optional
class Solution:
    def primeList(self, head: Optional['Node']) -> Optional['Node']:
        # Step 1: Find the maximum value in the linked list
        maximum = 0
        cur = head

        # Traverse the linked list to find the maximum value
        while cur:
            if cur.data > maximum:
                maximum = cur.data
            cur = cur.next
        
        # Step 2: Generate all prime numbers up to the maximum value
        cur = head
        primes = self.primes(maximum)  # Get all primes up to the maximum value

        # Step 3: Process each node in the linked list
        while cur:
            # If the node's value is not prime, we try to replace it with the nearest prime
            if cur.data not in primes:
                l, r = cur.data, cur.data  # Start searching from the node's value
                
                # Find the nearest prime numbers on both sides (left and right)
                while l not in primes and r not in primes:
                    l -= 1  # Check left side
                    r += 1  # Check right side
                
                # Initialize the node value with the closest prime
                node = None
                diff = float('inf')  # Initialize the difference as a large value

                # Compare the left and right values
                if l in primes:
                    node = l
                    diff = abs(node - cur.data)
                if r in primes:
                    if abs(cur.data - r) < diff:
                        node = r  # If the right prime is closer, update node
                    elif abs(cur.data - r) == diff:
                        node = min(l, r)  # If both are equidistant, choose the smaller one
                
                # Set the current node's data to the nearest prime
                cur.data = node
            
            # Move to the next node in the linked list
            cur = cur.next

        return head  # Return the modified head of the linked list

    def primes(self, r: int) -> set:
        # Generate all prime numbers up to a given range 'r'
        numbers = [True] * (r + 100)  # Sieve array to track prime numbers
        res = set()  # Set to store the prime numbers

        # Implementing the Sieve of Eratosthenes to find prime numbers
        for i in range(2, r + 100):
            if numbers[i]:
                res.add(i)  # Add prime number to the set
                for j in range(i ** 2, r + 100, i):
                    numbers[j] = False  # Mark multiples of i as non-prime

        return res  # Return the set of prime numbers


#{ 
 # Driver Code Starts
class Node:

    def __init__(self, x):
        self.data = x
        self.next = None


def printList(node):
    while (node != None):
        print(node.data, end=" ")
        node = node.next
    print()


def inputList():

    data = [int(i) for i in input().strip().split()
            ]  #all data of linked list in a line
    head = Node(data[0])
    tail = head
    for i in range(1, len(data)):
        tail.next = Node(data[i])
        tail = tail.next
    return head


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):

        head = inputList()

        obj = Solution()
        res = obj.primeList(head)

        printList(res)

        print("~")

# } Driver Code Ends