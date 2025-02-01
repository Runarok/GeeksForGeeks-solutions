from heapq import *

class Solution:
    def maxEvents(self, start, end, N):
        # Merge the start and end times into tuples and sort by start time
        merged = sorted([(start[i], end[i]) for i in range(N)])
        
        d = 0  # Current day
        h = []  # Min-heap to track end times of the events
        ps = 0  # Pointer to iterate over the sorted events
        ans = 0  # Count of maximum events we can attend

        # Process events
        while h or ps < N:
            if not h:  # If heap is empty, push the next event's end time
                heappush(h, merged[ps][1])
                d = merged[ps][0]  # Start from the next event's start time
                ps += 1
            
            # Add all events that start before or at the current day `d`
            while ps < N and merged[ps][0] <= d:
                heappush(h, merged[ps][1])
                ps += 1
            
            # Pop the event with the earliest end time
            heappop(h)
            ans += 1  # Increment count of attended events
            
            # Move to the next day
            d += 1

            # Remove events that have already ended (those whose end time < d)
            while h and h[0] < d:
                heappop(h)
        
        return ans
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N=int(input())
        start=list(map(int,input().split()))
        end=list(map(int,input().split()))
        
        ob = Solution()
        print(ob.maxEvents(start,end,N))
        print("~")
# } Driver Code Ends