# User function Template for Python3

class Solution:
    def divide(self, dividend, divisor):
        """
        Function to perform division without using multiplication, division, or mod operator.

        :param dividend: int - The dividend value.
        :param divisor: int - The divisor value.
        :return: int - The quotient after division.
        """

        # If both numbers are equal, the quotient is 1
        if dividend == divisor:
            return 1

        # Determine the sign of the result
        is_positive = (dividend > 0) == (divisor > 0)

        # Convert both numbers to their absolute values
        n = abs(dividend)
        d = abs(divisor)
        quotient = 0

        # Perform bitwise division using repeated subtraction with powers of 2
        while n >= d:
            power = 0

            # Find the highest power of 2 such that d * 2^power ≤ n
            while n >= (d * (2 ** (power + 1))):
                power += 1

            # Add the corresponding power of 2 to the quotient
            quotient += 2 ** power
            # Subtract the equivalent multiple of divisor from n
            n -= d * (2 ** power)

        # Clamp result to 32-bit integer limits
        if quotient > (2**31) - 1:
            return (2**31) - 1 if is_positive else (-2**31)

        # Apply the correct sign and return the result
        return quotient if is_positive else -quotient
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    for _ in range(0, t):
        inp = list(map(int, input().split()))

        a = inp[0]
        b = inp[1]

        ob = Solution()

        print(ob.divide(a, b))

        print("~")

# } Driver Code Ends