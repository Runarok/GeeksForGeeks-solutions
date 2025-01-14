class Solution:
    def leaders(self, arr):
        leaders = []
        max_right = arr[-1]
        leaders.append(max_right)
        
        for i in range(len(arr) - 2, -1, -1):
            if arr[i] >= max_right:
                leaders.append(arr[i])
                max_right = arr[i]
        
        return leaders[::-1]


#{ 
 # Driver Code Starts
t = int(input())  # number of test cases
for _ in range(t):
    arr = list(map(int, input().split()))  # input array
    s = Solution().leaders(arr)  # find the leaders

    # Output formatting
    if s:
        print(" ".join(map(str, s)))  # Print leaders in the required order
    else:
        print("[]")  # Print empty list if no leaders are found

    print("~")

# } Driver Code Ends