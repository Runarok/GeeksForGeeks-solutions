class Solution:
    def __init__(self):
        self.mp = {}  # Dictionary for memoization
    
    def isScramble(self, S1: str, S2: str):
        # If both strings are identical, return True
        if S1 == S2:
            return True
        
        # If lengths are different, they can't be scramble strings
        if len(S1) != len(S2):
            return False
        
        # Check if result already exists in memoization dictionary
        if S1 + " " + S2 in self.mp:
            return self.mp[S1 + " " + S2]
        
        n = len(S1)
        
        # Try splitting the strings at different positions
        for i in range(1, n):
            # Case 1: Check if both left and right halves match
            if self.isScramble(S1[:i], S2[:i]) and self.isScramble(S1[i:], S2[i:]):
                self.mp[S1 + " " + S2] = True  # Store result in memoization
                return True

            # Case 2: Check if swapping the halves leads to a match
            if self.isScramble(S1[:i], S2[n-i:]) and self.isScramble(S1[i:], S2[:n-i]):
                self.mp[S1 + " " + S2] = True  # Store result in memoization
                return True
        
        # If no valid scramble is found, store False in memoization
        self.mp[S1 + " " + S2] = False
        return False

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t=int(input())
    for i in range(t):
        S1,S2=input().split()
        if(Solution().isScramble( S1 , S2)):
            print("Yes")
        
        else:
            print("No")


        print("~")
# } Driver Code Ends