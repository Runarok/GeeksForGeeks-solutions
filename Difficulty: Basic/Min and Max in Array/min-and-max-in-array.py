#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends
#User function Template for python3
#User function Template for python3

class Solution:
    def get_min_max(self, arr):
        # Initialize the min and max with the first element of the array
        min_element = arr[0]
        max_element = arr[0]
        
        # Traverse through the array and update min and max
        for num in arr:
            if num < min_element:
                min_element = num
            if num > max_element:
                max_element = num
                
        # Return the result as a pair (min, max)
        return min_element, max_element



#{ 
 # Driver Code Starts.
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    while t > 0:
        arr = list(map(int, input().split()))
        ob = Solution()
        mn, mx = ob.get_min_max(arr)
        print(mn, mx)
        t -= 1
        print("~")


# } Driver Code Ends