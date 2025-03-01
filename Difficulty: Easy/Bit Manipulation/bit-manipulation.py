#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3

class Solution:
    # Function to perform bit manipulation on a number at a specific index
    def bitManipulation(self, num, i):
        # Extract the bit at the (i-1)th position using right shift and bitwise AND
        res = (num >> (i - 1)) & 1
        
        # Set the bit at the (i-1)th position to 1 using bitwise OR
        num = num | (1 << (i - 1))
        
        # Clear the bit at the (i-1)th position (set it to 0) using bitwise AND with negated shift
        new = num & ~(1 << (i - 1))
        
        # Print the results: original bit, modified number (with the bit set), and modified number (with the bit cleared)
        print(res, num, new)


#{ 
 # Driver Code Starts.
if __name__ == '__main__': 
    t = int(input ())
    for _ in range (t):
        n, i = list(map(int, input().split()))
        ob = Solution()
        ob.bitManipulation(n, i)
        print("~")
# } Driver Code Ends