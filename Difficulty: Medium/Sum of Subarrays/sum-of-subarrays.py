#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

class Solution:
    def subarraySum(self, arr):
        '''
        Function to calculate the sum of all subarrays of the given array.

        @param arr: List of integers representing the input array.
        @return: The sum of all subarray sums modulo (10^9 + 7).
        '''
        subarr_sum = 0  # Initialize variable to store the sum of all subarrays
        n = len(arr)  # Get the length of the array

        # Iterate through the array to calculate the sum of all subarrays
        for i in range(n):
            # For each element, calculate how many times it will contribute to the subarray sums
            subarr_sum += ((i + 1) * arr[i] * (n - i))
        
        # Return the result modulo (10^9 + 7)
        return subarr_sum % (10**9 + 7)


#{ 
 # Driver Code Starts.
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.subarraySum(arr)
        print(res)
        # print("~")
        t -= 1
        print("~")
# } Driver Code Ends