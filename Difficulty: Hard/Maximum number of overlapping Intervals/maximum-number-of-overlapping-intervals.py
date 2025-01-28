from typing import List
class Solution:
    def overlap(self, n: int, intervals: List[List[int]]) -> int:
        times = []  # List to store the start and end times as tuples
        
        # Iterate over the intervals and add the start times first, followed by end times
        # "start" precedence is ensured because we will add the start times first
        for i in range(0, len(intervals)):
            times.append((intervals[i][0], "start"))  # Add start time with "start" label
            
        for i in range(0, len(intervals)):    
            times.append((intervals[i][1], "end"))  # Add end time with "end" label
    
        # Sort the list of times.
        # Sorting is done primarily by time, and in case of ties, "start" will come before "end" 
        # because it was added first and will have precedence in sorting.
        times = sorted(times, key=lambda x: x[0])
    
        # Initialize counters for tracking the number of ongoing intervals
        max_overlaps = 0  # To keep track of the maximum number of overlapping intervals
        count = 0  # To track the current number of active intervals
    
        # Iterate through the sorted times list to calculate the number of overlaps
        for i in range(0, len(times)):
            if times[i][1] == "start":  # If the time is a start time, increment the count
                count += 1
                max_overlaps = max(max_overlaps, count)  # Update the maximum overlaps if necessary
            else:  # If the time is an end time, decrement the count
                count -= 1
    
        # Return the maximum number of overlaps
        return max_overlaps
#{ 
 # Driver Code Starts

class IntMatrix:
    def __init__(self) -> None:
        pass
    def Input(self,n,m):
        matrix=[]
        #matrix input
        for _ in range(n):
            matrix.append([int(i) for i in input().strip().split()])
        return matrix
    def Print(self,arr):
        for i in arr:
            for j in i:
                print(j,end=" ")
            print()


if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n = int(input())
        
        
        intervals=IntMatrix().Input(n, n)
        
        obj = Solution()
        res = obj.overlap(n, intervals)
        
        print(res)
        

# } Driver Code Ends