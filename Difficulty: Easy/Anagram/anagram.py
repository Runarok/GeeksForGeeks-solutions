class Solution:
    
    # Function to check whether two strings are anagrams of each other.
    def areAnagrams(self, s1, s2):
        # If lengths are different, they cannot be anagrams.
        if len(s1) != len(s2):
            return False
        
        # Use a dictionary to count character frequencies.
        char_count = {}
        
        # Count characters in s1.
        for char in s1:
            char_count[char] = char_count.get(char, 0) + 1
        
        # Subtract character counts using s2.
        for char in s2:
            if char not in char_count or char_count[char] == 0:
                return False
            char_count[char] -= 1
        
        # If all counts are zero, they are anagrams.
        return all(value == 0 for value in char_count.values())


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        a = input().strip()
        b = input().strip()
        if (Solution().areAnagrams(a, b)):
            print("true")
        else:
            print("false")
        print("~")

# } Driver Code Ends