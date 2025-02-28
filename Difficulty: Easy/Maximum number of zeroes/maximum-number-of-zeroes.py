class Solution:
    def maxZero(self, arr):
        mx = 0  # To track the maximum count of '0' digits found
        result = -1  # Variable to store the number with the maximum '0' digits

        # Iterate through each number in the array
        for i in arr:
            count = 0  # Count the '0' digits in the current number
            
            # Convert the number to string and count '0's
            for j in str(i):
                if j == "0":
                    count += 1

            # If the current number has more '0's than the previous maximum
            if count > mx:
                mx = count
                result = i

            # If there's a tie in the count of '0's, check for lexicographical order and length
            if mx != 0:
                if mx == count:
                    # If both have the same number of '0's, choose the smaller number by length
                    if len(str(result)) == len(str(i)) and result < i:
                        result = i
                    # If the current number is longer, select it
                    if len(str(result)) < len(str(i)):
                        result = i

        return result

#{ 
 # Driver Code Starts
import sys

input = sys.stdin.read
data = input().splitlines()

t = int(data[0])
solution = Solution()

for i in range(1, t + 1):
    arr = data[i].split()
    print(solution.maxZero(arr))
    print("~")
# } Driver Code Ends