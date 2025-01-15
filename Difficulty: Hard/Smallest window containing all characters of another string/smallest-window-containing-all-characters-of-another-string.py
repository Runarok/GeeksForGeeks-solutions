from collections import Counter

class Solution:
    
    # Function to find the smallest window in the string s1 consisting
    # of all the characters of string s2.
    def smallestWindow(self, s1, s2):
        # If s2 is longer than s1, return empty string
        if len(s1) < len(s2):
            return ""
        
        # Create a dictionary to count the frequency of characters in s2
        required = Counter(s2)
        # Create a dictionary to count the frequency of characters in the current window of s1
        window_count = {}
        
        # Number of characters matched
        matched = 0
        # Initialize left and right pointers
        left = 0
        # Result variables to store the window
        min_length = float('inf')
        start_index = 0
        
        # Traverse the string s1 using the right pointer
        for right in range(len(s1)):
            # Add the character from s1 to the window count
            char = s1[right]
            window_count[char] = window_count.get(char, 0) + 1
            
            # If the current character is part of s2 and the frequency is matched, increment matched
            if char in required and window_count[char] == required[char]:
                matched += 1
            
            # When all characters are matched, try to shrink the window from the left
            while matched == len(required):
                # Update the result if the current window is smaller
                window_length = right - left + 1
                if window_length < min_length:
                    min_length = window_length
                    start_index = left
                
                # Now shrink the window from the left
                window_count[s1[left]] -= 1
                if s1[left] in required and window_count[s1[left]] < required[s1[left]]:
                    matched -= 1
                left += 1
        
        # If a valid window was found, return the substring, otherwise return ""
        return s1[start_index:start_index + min_length] if min_length != float('inf') else ""



#{ 
 # Driver Code Starts
# Initial Template for Python 3
import sys
import io
import atexit
from collections import defaultdict

if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        s1 = input().strip()  # Read the first string from a new line
        s2 = input().strip()  # Read the second string from the next line
        obj = Solution()
        str_res = obj.smallestWindow(s1, s2)
        if len(str_res) == 0:
            print("\"\"")
        else:
            print(str_res)
        print("~")

# } Driver Code Ends