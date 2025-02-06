# User function template for Python3

class Solution():

    # Function to find the minimum number of changes to make a string palindrome
    def specialPalindrome(self, s1, s2):
        # Helper function to get the character at position k
        def _get(k): 
            return (s2[k-i], True) if i <= k < i + N2 else (s1[k], False)
        
        # Initialize constants and variables
        INV, N1, N2 = 10**9, len(s1), len(s2)
        ans, baseline = INV, 0

        # Count the number of mismatches in the first half of s1
        for i in range(N1 // 2):
            if s1[i] != s1[N1 - 1 - i]: 
                baseline += 1
        
        # Try inserting s2 at different positions in s1
        for i in range(N1 - N2 + 1):
            tmp = baseline  # Temporary variable to store the number of operations required
            for j in range(i, i + N2):
                c0, (c1, f1) = s2[j - i], _get(N1 - 1 - j)
                
                # Adjust tmp based on character matching
                if s1[j] != s1[N1 - 1 - j] and (not f1 or j < N1 - 1 - j): 
                    tmp -= 1
                if c0 != s1[j]: 
                    tmp += 1
                if c0 != c1:
                    if f1: 
                        tmp = INV  # Impossible case
                        break
                    tmp += 1
            
            ans = min(ans, tmp)  # Keep track of the minimum operations
        
        # Return -1 if no valid palindrome can be formed
        return -1 if ans >= INV else ans


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    for _ in range(int(input())):
        s1, s2 = input().split()
        obj = Solution()
        print(obj.specialPalindrome(s1, s2))
        print("~")
# } Driver Code Ends