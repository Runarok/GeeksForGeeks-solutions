#User function Template for python3

class Solution:
    # Function to find triplets with zero sum.
    def findTriplets(self, arr):
        arr.sort()  # Sort the array to use two-pointer approach
        n = len(arr)
        
        # Traverse through the array
        for i in range(n - 2):
            # Skip the same element to avoid duplicate triplets
            if i > 0 and arr[i] == arr[i - 1]:
                continue
            
            left, right = i + 1, n - 1  # Set left and right pointers
            
            while left < right:
                current_sum = arr[i] + arr[left] + arr[right]
                
                if current_sum == 0:
                    return True  # Found a triplet
                elif current_sum < 0:
                    left += 1  # Need a larger sum, move left pointer to the right
                else:
                    right -= 1  # Need a smaller sum, move right pointer to the left
        
        return False  # No triplet found

#{ 
 # Driver Code Starts
# Initial Template for Python 3

t = int(input())  # number of test cases
for _ in range(t):
    arr = list(map(int, input().split()))  # input array
    n = len(arr)  # get the length of the array
    if Solution().findTriplets(arr):
        print("true")
    else:
        print("false")

# } Driver Code Ends