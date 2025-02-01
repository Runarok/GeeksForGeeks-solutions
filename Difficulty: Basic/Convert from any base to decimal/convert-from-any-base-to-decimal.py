# User function Template for python3

class Solution:
    def decimalEquivalent(self, N, b):
        res, k = 0, 0  # Initialize result and exponent variable
        
        # Iterate through the input number N in reverse order (from right to left)
        for i in N[::-1]:
            # If the character is a digit and less than the base, calculate its decimal equivalent
            if i.isdigit() and int(i) < b:
                res += b**k * int(i)  # Add the corresponding value to result
            # If the character is a letter (A-Z), convert it to its corresponding base value
            elif not i.isdigit() and int(ord(i) - 55) < b:
                res += b**k * (int(ord(i) - 55))  # A = 10, B = 11, etc.
            else:
                return -1  # If the character is invalid for the base, return -1
            k += 1  # Increment the exponent (to shift the value by powers of the base)
        
        return res  # Return the final decimal equivalent

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        b = int(input())
        N = input()
        
        ob = Solution()
        print(ob.decimalEquivalent(N, b))
# } Driver Code Ends