# User function Template for python3

class Solution:
    # Function to find the minimum value required to balance the array.
    def min_value_to_balance(self, arr):
        left_half = []  # Stores the first half of the array
        right_half = []  # Stores the second half of the array

        # Splitting the array into two halves
        for i in range(0, len(arr) // 2):
            left_half.append(arr[i])
        for j in range(len(arr) // 2, len(arr)):
            right_half.append(arr[j])

        # Calculating the absolute difference between the sums of both halves
        return abs(sum(left_half) - sum(right_half))

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input().strip())
    for _ in range(t):
        arr = list(map(int, input().strip().split()))
        ob = Solution()
        ans = ob.min_value_to_balance(arr)
        print(ans)
        print("~")

# } Driver Code Ends