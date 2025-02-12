# User function Template for Python3

def sum_digits(n):
    """
    Recursively calculates the sum of digits of a number.
    
    :param n: The number whose digit sum is to be calculated.
    :return: The sum of the digits of n.
    """
    return n % 10 + sum_digits(n // 10) if n else 0

class Solution:
    def findMax(self, n):
        """
        Finds the maximum possible number less than or equal to n 
        that has the highest sum of its digits.
        
        :param n: The given number.
        :return: The number with the maximum digit sum.
        """
        max_number = n
        max_digit_sum = sum_digits(max_number)
        multiplier = 1

        while n > 0:
            candidate = (n - 1) * multiplier + multiplier - 1
            candidate_digit_sum = sum_digits(candidate)

            if candidate_digit_sum > max_digit_sum:
                max_number = candidate
                max_digit_sum = candidate_digit_sum

            multiplier *= 10
            n //= 10
        
        return max_number

#{ 
 # Driver Code Starts
#Initial Template for Python 3


        

if __name__ == '__main__': 
    ob = Solution()
    t = int (input ())
    for _ in range (t):
        N = int(input())
        print(ob.findMax(N))




# } Driver Code Ends