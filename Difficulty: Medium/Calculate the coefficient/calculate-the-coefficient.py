from math import factorial

class Solution:
    def permutationCoeff(self, n, k):
        # Code here
        result = 1
        mod = 10**9 + 7
        for i in range(0, k):
            result *= (n - i)
        return result % mod


#{ 
 # Driver Code Starts
#Initial Template for Python 3


if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n, k = input().split()
		n = int(n)
		k = int(k) 
		ob = Solution();
		ans = ob.permutationCoeff(n, k)
		print(ans)
# } Driver Code Ends