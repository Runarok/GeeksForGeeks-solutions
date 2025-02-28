#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

class Solution:

    def areConsecutives(self, arr):
        # Get the length of the array
        n = len(arr)

        # Find the minimum element in the array
        first_term = min(arr)

        # Calculate the expected sum of an arithmetic progression (AP) starting from the first_term
        # with a common difference of 1
        ap_sum = n * (2 * first_term + (n - 1)) // 2

        # Calculate the actual sum of the given array
        arr_sum = sum(arr)

        # Compare both sums, if they are equal then the array contains consecutive integers
        return ap_sum == arr_sum


#{ 
 # Driver Code Starts.
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        res = ob.areConsecutives(arr)
        if(res):
            print("true")
        else:
            print("false")
        # print(res)
        print("~")
        t -= 1


# } Driver Code Ends