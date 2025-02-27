#User function Template for python3

class Solution:
    def rightmostNonZeroDigit(self, N, A):
        # Initialize counters for factors of 2 and 5
        count_twos = 0
        count_fives = 0

        # Initialize result product (ignoring factors of 2 and 5 initially)
        product = 1

        # Iterate over each number in the array
        for number in A:
            # Count how many times the number can be divided by 2
            while number % 2 == 0 and number > 0:
                count_twos += 1
                number //= 2

            # Count how many times the number can be divided by 5
            while number % 5 == 0 and number > 0:
                count_fives += 1
                number //= 5

            # Multiply the remaining part (after removing 2s and 5s) into product
            product = (product * number) % 10

        # Balance extra factors (e.g., if there are more 2s than 5s or vice versa)
        for _ in range(count_twos - count_fives):
            product = (product * 2) % 10
        for _ in range(count_fives - count_twos):
            product = (product * 5) % 10

        # Return the final rightmost non-zero digit, or -1 if for some reason it's zero
        return product if product != 0 else -1
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        
        n=int(input())
        A=list(map(int,input().split()))

        ob = Solution()
        print(ob.rightmostNonZeroDigit(n, A))
        print("~")
# } Driver Code Ends