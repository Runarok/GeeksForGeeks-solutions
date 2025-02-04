class Solution:
    def minFlips(self, S):
        n = len(S)

        # Pattern 1: Starting with '0' (e.g., '010101...')
        flips_pattern_1 = 0
        # Pattern 2: Starting with '1' (e.g., '101010...')
        flips_pattern_2 = 0
        
        for i in range(n):
            expected_bit_1 = '0' if i % 2 == 0 else '1'
            expected_bit_2 = '1' if i % 2 == 0 else '0'
            
            if S[i] != expected_bit_1:
                flips_pattern_1 += 1
            if S[i] != expected_bit_2:
                flips_pattern_2 += 1
        
        # Return the minimum flips needed
        return min(flips_pattern_1, flips_pattern_2)



#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t=int(input())
    for i in range(t):
        S=input()
        Obj=Solution()
        ans=Obj.minFlips(S)
        print(ans)
# } Driver Code Ends