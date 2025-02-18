class Solution:
    def is_prime(self, N):
        # Return False if N is less than or equal to 1 (not a prime)
        if N <= 1:
            return False
        # Check divisibility for numbers up to the square root of N
        for i in range(2, int(N**0.5) + 1):
            if N % i == 0:
                return False
        return True

    def fullPrime(self, N):
        # First check if N is prime
        if not self.is_prime(N):
            return 0
        
        # Define the allowed prime digits ('2', '3', '5', '7')
        primes = ['2', '3', '5', '7']
        
        # Check each digit of N
        for digits in str(N):
            # If a digit is not one of the allowed prime digits, return 0
            if digits not in primes:
                return 0
        
        # If all digits are prime digits, return 1
        return 1


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N=int(input())
        ob=Solution()
        print(ob.fullPrime(N))
        print("~")
# } Driver Code Ends