class Solution:
    # Function to find the subarray with the maximum sum
    def findSubarray(self, a):
        n = len(a)  # Get the length of the array
        count = 0  # A counter for the index while iterating through the array
        lis = []  # A list to store positive subarrays
        
        # Iterate through the array to extract subarrays of non-negative numbers
        while count < n:
            li = []  # Temporary list to store a current subarray
            for i in range(count, n):
                if a[i] >= 0:  # Add non-negative elements to the subarray
                    li.append(a[i])
                    count += 1  # Move to the next element
                else:
                    count += 1  # Skip negative numbers
                    break  # Break the inner loop when a negative number is encountered
            
            if len(li) > 0:  # If the subarray has non-negative elements, add it to the list
                lis.append(li)

        # If no valid subarrays were found, return [-1]
        if len(lis) < 1:
            return [-1]
        else:
            myli = []  # List to store the sum of each subarray
            for i in lis:
                myli.append(sum(i))  # Calculate the sum of each subarray
                
            # If multiple subarrays have the maximum sum, return the one with the longest length
            if myli.count(max(myli)) > 1:
                return max(lis, key=len)
            else:
                # Otherwise, return the subarray with the maximum sum
                return max(lis, key=sum)


#{ 
 # Driver Code Starts
# Initial Template for Python 3

t = int(input())  # number of test cases
for _ in range(t):
    arr = list(map(int, input().split()))  # input array
    s = Solution().findSubarray(arr)  # find the subarray with maximum sum

    # Output formatting
    if s:
        print(" ".join(map(str, s)))  # Print subarray with the maximum sum
    else:
        print("[]")  # Print empty list if no subarray found

    print("~")

# } Driver Code Ends