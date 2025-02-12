# User function Template for Python 3

# Function to compute the sum of digits of a given number
def digit_sum(n):
    total = 0
    while n > 0:
        total += n % 10  # Extract the last digit and add it to the sum
        n //= 10  # Remove the last digit from the number
    return total

class Solution:
    def RulingPair(self, arr, n): 
        # Dictionary to store the maximum number for each unique digit sum
        digit_sum_map = {}
        max_pair_sum = -1  # Variable to track the maximum sum of valid pairs

        # Iterate through each number in the array
        for num in arr:
            sum_digits = digit_sum(num)  # Calculate the sum of digits

            # If the digit sum is not in the dictionary, store the number
            if sum_digits not in digit_sum_map:
                digit_sum_map[sum_digits] = num
            else:
                # If a pair exists with the same digit sum, update max_pair_sum
                max_pair_sum = max(max_pair_sum, digit_sum_map[sum_digits] + num)
                # Store the maximum number corresponding to the current digit sum
                digit_sum_map[sum_digits] = max(digit_sum_map[sum_digits], num)

        return max_pair_sum

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        n = int(input())
        arr = list(map(int, input().strip().split()))
        obj = Solution();
        print(obj.RulingPair(arr,n))



        print("~")
# } Driver Code Ends