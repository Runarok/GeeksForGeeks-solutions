
class Solution:
    # Function to sort the binary array in non-decreasing order
    def binSort(self, arr):
        # Count the number of 0's in the array
        count_zeros = arr.count(0)
        
        # Fill the array with the correct number of 0's followed by 1's
        for i in range(len(arr)):
            if i < count_zeros:
                arr[i] = 0
            else:
                arr[i] = 1




#{ 
 # Driver Code Starts
# Driver code
t = int(input())  # number of test cases
for _ in range(t):
    arr = list(map(int, input().split()))  # input array
    Solution().binSort(arr)  # sort the binary array

    print(*arr)  # print the sorted array
    print("~")

# } Driver Code Ends