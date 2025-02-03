from typing import List

class Solution:
    def rearrangeQueue(self, N: int, queue: List[int]) -> List[int]:
        halfSize = N // 2  # Find the midpoint of the queue
        firstHalf = []  # Stores the first half of the queue
        
        # Extract the first half of the queue
        for _ in range(halfSize):
            firstHalf.append(queue.pop(0))  # Remove elements from the front
        
        rearrangedQueue = []  # Stores the final rearranged queue
        
        # Interleave elements from firstHalf and remaining queue
        while firstHalf:
            rearrangedQueue.append(firstHalf.pop(0))  # Add from first half
            rearrangedQueue.append(queue.pop(0))  # Add from second half
        
        return rearrangedQueue

#{ 
 # Driver Code Starts

class IntArray:
    def __init__(self) -> None:
        pass
    def Input(self,n):
        arr=[int(i) for i in input().strip().split()]#array input
        return arr
    def Print(self,arr):
        for i in arr:
            print(i,end=" ")
        print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        N = int(input())
        
        
        q=IntArray().Input(N)
        
        obj = Solution()
        res = obj.rearrangeQueue(N, q)
        
        IntArray().Print(res)
        

# } Driver Code Ends