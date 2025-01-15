#User function Template for python3

class Solution:
    def countBits(self, N, A):
        MOD = 10**9 + 7
        total_sum = 0
        
        # Iterate through each bit position (from 0 to 30 for 32-bit integers)
        for bit in range(31):
            count_1 = 0
            for num in A:
                if num & (1 << bit):  # Check if the current bit is 1
                    count_1 += 1
            
            count_0 = N - count_1  # Elements with bit 0
            # Each differing pair contributes 1 to the sum for this bit
            # We need to account for both (i, j) and (j, i) so multiply by N
            total_sum += count_1 * count_0 * 2
            total_sum %= MOD  # To prevent overflow
            
        return total_sum


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        A = input().split()
        for it in range(N):
            A[it] = int(A[it])
        
        ob = Solution()
        print(ob.countBits(N, A))
        print("~")
# } Driver Code Ends