class Solution:
    def Nth_mileSpeed(self, n):
        # Check if the given mile number is odd
        if(n % 2 != 0):
            # If odd, calculate the result by raising (n//2 + 1) to the power of 4
            num = n // 2 + 1
            return (num ** 4)
        else:
            # If even, calculate the result by multiplying (3**(n-1)//2) by 7
            num = (n - 1) // 2
            return ((3 ** num) * 7)
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n= int(input())
		ob = Solution()
		ans = ob.Nth_mileSpeed(n)
		print(ans)
# } Driver Code Ends