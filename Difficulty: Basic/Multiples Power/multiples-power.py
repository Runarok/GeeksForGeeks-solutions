# User function Template for Python3

class Solution:
    def sum(self, N):
        # Calculate the sum of multiples of 3 below N
        count_3 = (N - 1) // 3
        sum_3 = 3 * count_3 * (count_3 + 1) // 2

        # Calculate the sum of multiples of 7 below N
        count_7 = (N - 1) // 7
        sum_7 = 7 * count_7 * (count_7 + 1) // 2

        # Calculate the sum of multiples of 21 (LCM of 3 and 7) to avoid double counting
        count_21 = (N - 1) // 21
        sum_21 = 21 * count_21 * (count_21 + 1) // 2

        # Apply the inclusion-exclusion principle
        return sum_3 + sum_7 - sum_21
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		ob = Solution();
		ans = ob.sum(n)
		print(ans)
# } Driver Code Ends