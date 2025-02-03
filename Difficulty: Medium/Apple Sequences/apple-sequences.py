# User function Template for python3

class Solution:
    def appleSequences(self, n, m, arr):
        # Initialize variables
        l = 0
        oc = 0
        ans = 0
        
        # Iterate through the array using the right pointer
        for r in range(n):
            # Count the number of 'O' (rotten apples)
            if arr[r] == 'O':
                oc += 1
            
            # If the number of rotten apples exceeds 'm', shift the left pointer
            while oc > m:
                lval = arr[l]
                oc -= (lval == 'O')  # Decrease the count of 'O' if at the left pointer
                l += 1  # Move the left pointer
            
            # Update the maximum length of valid sequence
            ans = max(ans, r - l + 1)
        
        return ans  # Return the maximum valid sequence length


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        temp = input().split()
        N = int(temp[0])
        M = int(temp[1])
        arr = input()

        ob = Solution()
        print(ob.appleSequences(N, M, arr))

        print("~")
# } Driver Code Ends