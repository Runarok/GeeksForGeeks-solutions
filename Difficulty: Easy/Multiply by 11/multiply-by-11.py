# User function Template for python3
import sys
sys.set_int_max_str_digits(0)

class Solution:
    def multiplyby11(self, number):
        # Convert the number from string to integer
        n = int(number)
        # Return the result of multiplying the number by 11
        return (11 * n)


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        number = input().strip()
        ob = Solution()
        print(ob.multiplyby11(number))
        print("~")
# } Driver Code Ends