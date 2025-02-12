# User function Template for Python3

class Solution:
    def countDecimal(self, x, y):
        # Initialize the count of decimal places
        decimal_count = 0
        
        # Dictionary to track remainders to detect repeating decimals
        remainder_map = {}

        # If x is exactly divisible by y, no decimal places
        if x % y == 0:
            return 0

        # Process the decimal division
        while x % y != 0:
            x %= y  # Update x to the remainder
            decimal_count += 1  # Increment decimal place count

            # If the remainder repeats, it means the decimal is recurring
            if x in remainder_map:
                return -1  # Indicating repeating decimal
            
            # Store the remainder in the map
            remainder_map[x] = 1
            
            x *= 10  # Move to the next decimal place
        
        return decimal_count  # Return the number of decimal places
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        A, B = [int(x) for x in input().split()]
        
        ob = Solution()
        print(ob.countDecimal(A, B))
# } Driver Code Ends