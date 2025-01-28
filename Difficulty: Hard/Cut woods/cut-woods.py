from typing import List

class Solution:
    def maxHeight(self, N: int, A: List[int], M: int) -> int:
        # Initialize a temporary list to store the frequency of each number
        temp = []
        for i in range(max(A) + 1):  # Loop from 0 to the maximum element in A
            temp.append(0)
        
        # Count occurrences of each number in A and store them in temp
        for i in A:
            temp[i - 1] += 1  # Increment the corresponding position in temp
        
        w = 0  # This will track the accumulated count of elements
        counter = 0  # To track the total occurrences we've counted so far
        height = 0  # Variable to store the maximum height found
        
        # Iterate backwards through temp to check for the maximum height
        for i in range(len(temp) - 1, -1, -1):
            if temp[i] > 0:
                counter += temp[i]  # Add occurrences to counter
            w += counter  # Update the total number of elements we've processed
            if w >= M:  # If we've reached or exceeded the required threshold M
                height = i  # Set the height at this index
                break
        
        return height  # Return the maximum height

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
        
        
        A=IntArray().Input(N)
        
        
        M = int(input())
        
        obj = Solution()
        res = obj.maxHeight(N, A, M)
        
        print(res)
        

# } Driver Code Ends