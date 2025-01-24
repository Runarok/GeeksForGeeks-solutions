#User function Template for python3
class Solution:
    def subsetXORSum(self, arr):
        n = len(arr)
        result = 0
        
        # For each bit position (from 0 to 31, assuming 32-bit integers)
        for i in range(32):  # 32-bit integers
            # Count how many numbers have the i-th bit set
            count = 0
            for num in arr:
                if num & (1 << i):
                    count += 1
            
            # Each bit contributes to exactly 2^(n-1) subsets
            if count > 0:
                result += (1 << i) * (2 ** (n - 1))
        
        return result
#{ 
 # Driver Code Starts
#Initial Template for Python 3

t = int(input())
for _ in range(0, t):
    arr = list(map(int, input().split()))
    s = Solution().subsetXORSum(arr)
    print(s)

    print("~")
# } Driver Code Ends
