# User function Template for python3

class Solution:
    def nonRepetitive(self, s):
        # Initialize a set to track seen characters
        seen_characters = set()
        
        # Iterate through each character in the string
        for i in range(len(s)):
            # If the character is not in the set, add it
            if s[i] not in seen_characters:
                seen_characters.add(s[i])
            # If the character repeats but is not consecutive, return False
            elif s[i] != s[i - 1]:
                return False
        
        # If no non-consecutive repeats are found, return True
        return True

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        s = input().strip()
        ob = Solution()
        if ob.nonRepetitive(s):
            print(1)
        else:
            print(0)
# } Driver Code Ends