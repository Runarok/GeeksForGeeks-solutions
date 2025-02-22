# User function Template for python3

class Solution:
    def demonitize(self, S, m, n):
        # Check for overlap and create a combined pattern
        if m[-1:] == n[:1]:  # If the last character of m equals the first character of n
            combined = m + n[1:]  # Merge m and n, excluding the duplicate character
        else:
            combined = ""  # No overlap, no combined pattern
        
        # If the combined pattern exists in S, remove it
        if combined and combined in S:
            S = S.replace(combined, "")
        
        # Remove individual patterns m and n from S
        if m in S:
            S = S.replace(m, "")
        if n in S:
            S = S.replace(n, "")
    
        # Return the modified string or -1 if it's empty
        return S if S else -1


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        S=input()
        m=input()
        n=input()
        
        ob = Solution()
        print(ob.demonitize(S , m , n))
        print("~")
# } Driver Code Ends