# User function Template for Python3

class Solution:
    def is_weird(self, n):
        """
        Determines if a given number is a "weird number."
        
        A number is considered weird if:
        1. The sum of its proper divisors is greater than the number itself.
        2. No subset of its divisors sums exactly to the number.

        :param n: The integer to check.
        :return: 1 if the number is weird, otherwise 0.
        """
        
        total_sum = 0  # Sum of proper divisors
        divisors = []  # List of proper divisors

        # Find all proper divisors and calculate their sum
        for i in range(1, n):
            if n % i == 0:
                divisors.append(i)
                total_sum += i

        # Condition 1: The sum of proper divisors must be greater than n
        if total_sum <= n:
            return 0

        # Condition 2: Check if any subset of divisors sums exactly to n
        subset_sums = {0}  # Initialize with sum 0 (empty subset)
        
        for divisor in divisors:
            new_sums = set()
            for s in subset_sums:
                new_sum = s + divisor
                if new_sum == n:
                    return 0  # Found a subset sum equal to n, not weird
                new_sums.add(new_sum)
            subset_sums.update(new_sums)
        
        return 1  # If no subset sums to n, it's a weird number

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n= int(input())
		ob = Solution()
		ans = ob.is_weird(n)
		print(ans)
# } Driver Code Ends