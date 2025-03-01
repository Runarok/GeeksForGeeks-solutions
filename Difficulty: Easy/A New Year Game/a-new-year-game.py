# User function Template for python3

class Solution:
    def minimumChocolates(self, arr, N):
        # Initialize the total chocolates to be given (ans) and the remaining chocolates (rem)
        ans = 0
        rem = 0
        
        # Loop through the array of elements (arr) to calculate the minimum chocolates
        for i in range(N):
            el = arr[i]  # Get the current element
            
            # If the current element is greater than the remaining chocolates to be given
            if el > rem:
                temp = el - rem  # Calculate how many more chocolates are needed
                ans += temp      # Add this amount to the total chocolates
                rem += temp      # Update the remaining chocolates to the current count
            
            # Decrease the remaining chocolates for the next iteration
            rem -= 1
        
        # Return the total chocolates needed
        return ans

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range (t):
        N = int(input())
        arr = input().split()
        for itr in range(N):
            arr[itr] = int(arr[itr])
        
        ob = Solution()
        print(ob.minimumChocolates(arr, N))
# } Driver Code Ends