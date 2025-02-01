# User function Template for Python3

class Solution:
    def minManipulation(self, N, S1, S2): 
        # Array to store frequency differences of characters
        freq = [0] * 26
        
        # Count frequency differences between S1 and S2
        for i in range(N):
            freq[ord(S1[i]) - ord('a')] += 1  # Increment for S1 characters
            freq[ord(S2[i]) - ord('a')] -= 1  # Decrement for S2 characters
        
        # Sum of absolute differences divided by 2 gives minimum manipulations
        manipulations = sum(abs(f) for f in freq) // 2
        
        return manipulations


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        N = int(input().strip())
        S1,S2 = input().strip().split()
        ob = Solution()
        ans = ob.minManipulation(N, S1, S2)
        print(ans)
        print("~")
# } Driver Code Ends