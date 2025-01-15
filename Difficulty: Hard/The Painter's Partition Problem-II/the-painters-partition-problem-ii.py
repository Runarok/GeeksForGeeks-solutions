#User function Template for python3

class Solution:
    def minTime(self, arr, k):
        def canPaintWithMaxTime(arr, k, max_time):
            painters = 1
            current_time = 0
            for board in arr:
                if current_time + board <= max_time:
                    current_time += board
                else:
                    painters += 1
                    current_time = board
                    if painters > k:
                        return False
            return True
        
        low = max(arr)
        high = sum(arr)
        
        while low < high:
            mid = (low + high) // 2
            if canPaintWithMaxTime(arr, k, mid):
                high = mid
            else:
                low = mid + 1
        
        return low    


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        arr = list(map(int, input().strip().split()))
        k = int(input())

        ob = Solution()
        print(ob.minTime(arr, k))

# } Driver Code Ends