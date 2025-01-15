class Solution:
    def romanToDecimal(self, s):
        # Dictionary to map Roman symbols to their respective values
        roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        
        total = 0
        n = len(s)
        
        # Loop through the string, checking each character and its next character
        for i in range(n):
            # If the current symbol's value is less than the next symbol, subtract it
            if i + 1 < n and roman_map[s[i]] < roman_map[s[i + 1]]:
                total -= roman_map[s[i]]
            else:
                total += roman_map[s[i]]
        
        return total

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        ob = Solution()
        S = input()
        print(ob.romanToDecimal(S))
        print("~")

# } Driver Code Ends
