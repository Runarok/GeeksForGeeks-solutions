#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# User function Template for python3
class Solution:
    def findMaxProduct(self, arr):
        # If the array contains only one element, return it directly
        if len(arr) == 1:
            return arr[0]

        # Create separate lists for positive, negative, and zero numbers
        positive = []
        negative = []
        zero = []

        # Categorize numbers into positive, negative, or zero
        for i in arr:
            if i < 0:
                negative.append(i)
            if i > 0:
                positive.append(i)
            if i == 0:
                zero.append(i)

        # If all elements are zeros, the product will be zero
        if len(zero) == len(arr):
            return 0

        # If there are no positive numbers and only one negative number, the product is zero
        if len(positive) == 0 and len(negative) == 1:
            return 0

        # Sort the negative numbers in ascending order to pair them for maximum product
        negative.sort()

        # Multiply pairs of negative numbers to maximize the product
        multiply = 1
        for i in range(0, len(negative) - 1, 2):
            if negative[i] and negative[i + 1]:
                multiply *= negative[i] * negative[i + 1]

        # Multiply all positive numbers
        product = 1
        for num in positive:
            product *= num

        # MOD value to avoid overflow
        MOD = 10**9 + 7

        # Return the final product, modulo 10^9 + 7
        return (product * multiply) % MOD

#{ 
 # Driver Code Starts.
if __name__ == "__main__":
    import sys
    input = sys.stdin.read
    data = input().split()

    index = 0
    t = int(data[index])
    index += 1
    results = []
    
    for _ in range(t):
        n = int(data[index])
        index += 1
        arr = list(map(int, data[index:index + n]))
        index += n
        solution = Solution()
        ans = solution.findMaxProduct(arr)
        results.append(ans)
        results.append("~")
    
    for result in results:
        print(result)
# } Driver Code Ends