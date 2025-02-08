#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function template for Python3
import heapq

class Solution:
    def maxHeapify(self, arr, size, index):
        """
        Function to ensure the Max Heap property is satisfied for a given node.
        
        :param arr: List representing the heap
        :param size: Total number of elements in the heap
        :param index: Index of the current node to heapify
        """
        largest = index  # Assume the current node is the largest

        while True:
            leftChild = 2 * index + 1  # Left child index
            rightChild = 2 * index + 2  # Right child index

            # Check if left child exists and is greater than the current largest
            if leftChild < size and arr[largest] < arr[leftChild]:
                largest = leftChild

            # Check if right child exists and is greater than the current largest
            if rightChild < size and arr[largest] < arr[rightChild]:
                largest = rightChild

            # If the largest index changed, swap and continue heapifying
            if largest != index:
                arr[largest], arr[index] = arr[index], arr[largest]  # Swap parent with the largest child
                index = largest  # Move to the new position
            else:
                return  # If heap property is satisfied, exit the loop

    def convertMinToMaxHeap(self, size, arr):
        """
        Function to convert a Min Heap to a Max Heap.
        
        :param size: Number of elements in the heap
        :param arr: List representing the heap
        """
        # Start from the last non-leaf node and heapify each node to enforce the Max Heap property
        for index in range((size - 2) // 2, -1, -1):
            self.maxHeapify(arr, size, index)
        

#{ 
 # Driver Code Starts.
if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        N = int(input())
        arr = list(map(int, input().split()))
        ob = Solution()
        ob.convertMinToMaxHeap(N, arr)
        for val in arr:
            print(val, end = ' ')
        print()
        print("~")
# } Driver Code Ends