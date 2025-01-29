#{ 
 # Driver Code Starts
#Initial Template for Python 3
import heapq


# } Driver Code Ends
#User function Template for python3
import heapq

class Solution:
    def mostBooked(self, n, meetings):
        # Initialize a list to count meetings held in each room
        meeting_count = [0] * n
        
        # Create a list of available rooms, starting with all rooms available
        available = [_ for _ in range(n)]
        heapq.heapify(available)  # Convert the list to a heap for efficient room allocation
        
        # Sort the meetings by their start time
        meetings.sort()
        
        # Initialize an empty heap to track rooms that are currently allocated
        allocated = []
        heapq.heapify(allocated)  # Convert the allocated list to a heap
        
        # Iterate over all the meetings
        for start, end in meetings:
            # Free up rooms that have finished their meetings before the current meeting starts
            while allocated and start >= allocated[0][0]:
                _, room = heapq.heappop(allocated)
                heapq.heappush(available, room)
            
            # If no rooms are available, delay the meeting until a room becomes free
            if not available:
                end = end + (allocated[0][0] - start)  # Extend the meeting time accordingly
                start, room = heapq.heappop(allocated)
                heapq.heappush(available, room)
            
            # If there is an available room, allocate it for the current meeting
            if available:
                room = heapq.heappop(available)
                meeting_count[room] += 1  # Increment the meeting count for the room
                heapq.heappush(allocated, (end, room))  # Push the room back to allocated with updated end time
        
        # Return the index of the room that hosted the most meetings
        return meeting_count.index(max(meeting_count))

#{ 
 # Driver Code Starts.

if __name__ == "__main__":
    import sys
    input = sys.stdin.read().split()
    it = iter(input)
    t = int(next(it))
    while t > 0:
        t -= 1
        n = int(next(it))
        m = int(next(it))
        meetings = []
        for _ in range(m):
            s = int(next(it))
            e = int(next(it))
            meetings.append([s, e])
        sol = Solution()
        res = sol.mostBooked(n, meetings)
        print(res)
        print("~")
# } Driver Code Ends