#function Template for python3

"""
# Node Class

class Node:
    def __init__(self, val):
        self.data = val
        self.next = None

"""

class Solution:
    def reverseList(self, head):
        prev = None  # Initially, no previous node
        curr = head  # Start with the head of the list
        
        while curr:
            next_node = curr.next  # Store next node
            curr.next = prev       # Reverse current node's pointer
            prev = curr            # Move prev to current node
            curr = next_node       # Move to next node
        
        return prev  # Prev will be the new head of the reversed list

