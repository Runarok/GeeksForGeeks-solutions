class Solution():
    def mergeHeaps(self, a, b, n, m):
        # Function to merge heap 'b' into heap 'a' and return the resulting heap
        # 'a' is the max-heap
        # 'b' is the heap to be merged into 'a'

        # Process each element from heap 'b'
        while m > 0:
            # Remove the last element from heap 'b' (pop)
            node = b.pop()
            # Add the element from 'b' into heap 'a' using the addElement function
            self.addElement(a, node, n)
            # Increase the size of heap 'a'
            n += 1
            # Decrease the number of elements left in heap 'b'
            m -= 1

        # Return the merged heap 'a'
        return a

    def addElement(self, heap, node, N):
        # Function to add an element 'node' into the heap 'heap'
        # and maintain the max-heap property.

        # Append the new node to the end of the heap
        heap.append(node)
        i = N  # Index of the newly added element

        # Reheapify upwards to maintain the max-heap property
        while i > 0:
            parent = (i - 1) // 2  # Parent index
            # If the current node is greater than its parent, swap them
            if heap[parent] < heap[i]:
                heap[parent], heap[i] = heap[i], heap[parent]
                # Move up to the parent's position
                i = parent
            else:
                # If the parent is greater, stop the process
                break


#{ 
 # Driver Code Starts
#Initial Template for Python 3

def isMerged(arr1, arr2, merged):
    if (len(arr1) + len(arr2) != len(merged)):
        return False
    arr1 += arr2
    arr1.sort()
    mergedCopy = sorted(merged)
    if (arr1 != mergedCopy):
        return False
    for i in range(1, len(merged)):
        if merged[i] > merged[(i-1)//2]:
            return False

    return True

if __name__ == "__main__":
    for _ in range(int(input())):
        n, m = map(int, input().split())
        a = [int(i) for i in input().split()]
        b = [int(i) for i in input().split()]
        copyA = a[:]
        copyB = b[:]
        obj = Solution()
        merged = obj.mergeHeaps(a, b, n, m)
        flag = isMerged(copyA, copyB, merged)
        print(0 if flag == False else 1)

        print("~")
# } Driver Code Ends