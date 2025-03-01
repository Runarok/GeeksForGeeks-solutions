class Solution:
    def is_valid(self, s):
        # Check the length of the input string
        l = len(s)

        # Validate if the string contains only digits and has length 10, 11, or 12
        if s.isdigit() and (l in [10, 11, 12]):
            
            # If length is 12, remove the country code "91" if it exists
            if l == 12 and s[:2] == "91":
                s = s[2:]

            # If length is 11, remove the leading "0" if it exists
            if l == 11 and s[0] == "0":
                s = s[1:]

            # Recalculate the length after possible modifications
            l = len(s)

            # If the length is 10 and the first digit is in "7", "8", or "9", return 1 (valid)
            if l == 10 and (s[0] in ["7", "8", "9"]):
                return 1
            else:
                return 0
        else:
            return 0

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		s = input()
		ob = Solution()
		ans = ob.is_valid(s)
		print(ans)

# } Driver Code Ends