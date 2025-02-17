# User function Template for python3

class Solution:
    def gcd(self, a, b):
        r0, r1 = a, b  # Initializing the two numbers to find GCD of
        if r0 == r1:
            return r0  # If both numbers are the same, return the value directly
        else:
            rem = r0 % r1  # Calculate the remainder of r0 divided by r1
            
            if rem == 0:
                return r1, 0, 1  # If remainder is zero, return gcd and coefficients
            
            s0, s1 = 1, 0  # Initialize coefficients for x
            t0, t1 = 0, 1  # Initialize coefficients for y
            
            si = [s0, s1]  # Store values of x coefficients
            ti = [t0, t1]  # Store values of y coefficients
            
            while rem > 0:
                quo = r0 // r1  # Calculate quotient

                # Update the coefficients based on the quotient
                s2 = s0 - quo * s1
                t2 = t0 - quo * t1

                r0, r1 = r1, rem  # Update remainders
                s0, s1 = s1, s2   # Update x coefficients
                t0, t1 = t1, t2   # Update y coefficients
                
                rem = r0 % r1  # Calculate new remainder
            
            return r1, s2, t2  # Return the GCD and the coefficients for the equation
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        a,b = input().split()
        ob = Solution()
        v = ob.gcd(int(a), int(b))
        print(v[0],end=" ")
        print(v[1],end=" ")
        print(v[2])
        print("~")
# } Driver Code Ends