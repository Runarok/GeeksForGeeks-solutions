class Solution:
    # Function to maximize the XOR count
    def maximize_xor_count(self, n):
        i = 1  # Initialize i to 1 (this will represent powers of 2)
        count = 0  # Initialize count to 0 to accumulate the XOR values

        # While n is greater than 0, continue processing its bits
        while(n > 0):
            # Check if the least significant bit of n is 0
            if(not(n & 1)):
                count += i  # Add the value of i to count if the bit is 0
            n = n >> 1  # Right shift n to process the next bit
            i = i * 2  # Double i for the next power of 2

        return count  # Return the total XOR count

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		ob = Solution();
		ans = ob.maximize_xor_count(n)
		print(ans)


# } Driver Code Ends