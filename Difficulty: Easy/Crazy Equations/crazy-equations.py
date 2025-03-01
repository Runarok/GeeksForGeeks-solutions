class Solution:
    def distinctValues(self, n, a, b, c, d):
        # Calculate the lower bound for k by taking the maximum of 
        # the differences (a + b - n), (a + c - n), (c + d - n), (b + d - n)
        low = max(a + b - n, a + c - n, c + d - n, b + d - n)

        # Calculate the upper bound for k by taking the minimum of 
        # the differences (a + b - 1), (a + c - 1), (c + d - 1), (b + d - 1)
        high = min(a + b - 1, a + c - 1, c + d - 1, b + d - 1)
        
        # If the lower bound is greater than the upper bound, no valid k exists
        if low > high:
            return 0
        
        # Return the count of distinct values for k within the range [low, high]
        return high - low + 1


#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n,a,b,c,d = input().split()
		n=int(n)
		a=int(a)
		b=int(b)
		c=int(c)
		d=int(d)
		ob = Solution();
		print(ob.distinctValues(n,a,b,c,d))

# } Driver Code Ends