class Solution:
    def missingIntervals(self, arr, l, r):
        # Initialize the result list
        missing_intervals = []
        
        # Handle the case where no elements in the array
        if not arr:
            if l <= r:
                missing_intervals.append([l, r])
            return missing_intervals if missing_intervals else [[-1, -1]]

        # Check missing numbers before the first element of arr
        if arr[0] > l:
            missing_intervals.append([l, arr[0] - 1])
        
        # Check gaps between consecutive elements in arr
        for i in range(1, len(arr)):
            if arr[i] > arr[i - 1] + 1:
                missing_intervals.append([arr[i - 1] + 1, arr[i] - 1])
        
        # Check missing numbers after the last element of arr
        if arr[-1] < r:
            missing_intervals.append([arr[-1] + 1, r])

        # If there are no missing intervals, return [-1, -1]
        if not missing_intervals:
            return [[-1, -1]]
        
        return missing_intervals


#{ 
 # Driver Code Starts
def main():
    t = int(input())
    for _ in range(t):
        arr = list(map(int, input().split()))
        l, r = map(int, input().split())

        obj = Solution()
        result = obj.missingIntervals(arr, l, r)
        for pr in result:
            print("{{{} {}}}".format(pr[0], pr[1]), end=" ")
        print()
        print("~")


if __name__ == "__main__":
    main()

# } Driver Code Ends