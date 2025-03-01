class Solution:
    def theLastDigit(self, a, b, c, d, e, f):
        # Find the last digit of each of the input numbers a, c, and e
        a = a % 10  # Last digit of 'a'
        b = b % 4 + 4  # Adjust the exponent for 'a' to be within its cycle length
        c = c % 10  # Last digit of 'c'
        d = d % 4 + 4  # Adjust the exponent for 'c' to be within its cycle length
        e = e % 10  # Last digit of 'e'
        f = f % 4 + 4  # Adjust the exponent for 'e' to be within its cycle length
        
        # Calculate the last digit of the power of 'a' raised to 'b'
        h = (((int)(pow(a, b))) % 10)
        
        # Calculate the last digit of the power of 'c' raised to 'd'
        i = (((int)(pow(c, d))) % 10)
        
        # Calculate the last digit of the power of 'e' raised to 'f'
        k = (((int)(pow(e, f))) % 10)
        
        # Multiply the results and find the last digit of the product
        l = (h * i * k) % 10
        
        return l  # Return the last digit of the product

#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        
        a,b,c,d,e,f=map(int,input().strip().split(" "))

        ob = Solution()
        print(ob.theLastDigit(a,b,c,d,e,f))
# } Driver Code Ends