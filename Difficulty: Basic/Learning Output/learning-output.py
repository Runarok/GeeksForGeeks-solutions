# User function Template for python3
from math import ceil

class Solution:
    
    # Function to calculate the division result with specific rounding and length rules
    def div(self, a, b):
        # Check if a is perfectly divisible by b
        if a % b == 0:
            return a // b
        else:
            # Round the result to 5 decimal places
            ans = round(a / b, 5)
            # Convert result to string
            ans = str(ans)
            # Truncate the result to 7 characters (if it's longer)
            if len(ans) > 7:
                ans = ans[:7]
            return ans
    
    # Function to calculate the percentage of positive, negative, and zero elements
    def Learning(self, arr, n):
        # Initialize the result array to store the counts of positive, negative, and zero numbers
        ans = [0] * 3
        
        # Iterate through the array and count positives, negatives, and zeros
        for i in range(n):
            if arr[i] > 0:
                ans[0] += 1  # Positive numbers
            elif arr[i] < 0:
                ans[1] += 1  # Negative numbers
            elif arr[i] == 0:
                ans[2] += 1  # Zero numbers
        
        # Calculate the ratios using the div method
        ans[0] = self.div(n, ans[0])  # Ratio of positive numbers
        ans[1] = self.div(n, ans[1])  # Ratio of negative numbers
        ans[2] = self.div(n, ans[2])  # Ratio of zero numbers
        
        # Return the result array
        return ans
#{ 
 # Driver Code Starts
#Initial Template for Python 3

def main():

    T = int(input())

    while(T > 0):
        n = int(input())
        a = [int(x) for x in input().strip().split()]
        ob=Solution()
        ans = ob.Learning(a, n)
        pos, neg, zero = ans[0], ans[1], ans[2]
        
        print(pos)
        print(neg)
        print(zero)

        T -= 1


if __name__ == "__main__":
    main()





    
# } Driver Code Ends