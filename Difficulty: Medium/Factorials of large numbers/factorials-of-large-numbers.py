class Solution:
    def factorial(self, n):
        # Function to calculate factorial of a number
        def fact(n):
            result = 1
            for i in range(1, n + 1):
                result *= i
            return result
        
        # Get the factorial of n
        factorial_result = fact(n)
        
        # Convert the factorial result to a list of digits
        return [int(digit) for digit in str(factorial_result)]


#{ 
 # Driver Code Starts
# Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        ob = Solution()
        ans = ob.factorial(N)
        print(" ".join(
            str(i) for i in
            ans))  # Join each digit to form the full number without spaces
        print("~")

# } Driver Code Ends