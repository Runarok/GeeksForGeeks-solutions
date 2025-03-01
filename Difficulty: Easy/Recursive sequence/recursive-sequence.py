# List to store intermediate results for memoization
result = []

class Solution:
    # Recursive helper function to calculate the product for the given current number and n
    def mul_rec(self, current_value, n):
        # Base case: if n is 1, return the current value
        if n == 1:
            return current_value
        # Recursive case: return the current value multiplied by the result of the recursive call
        return current_value * self.mul_rec(current_value - 1, n - 1)

    # Helper function to compute the final result using recursion and memoization
    def helper(self, n):
        # If the result for this n is already computed, return it from the memoized list
        if result[n - 1] is not None:
            return result[n - 1]
        
        # Base case: when n is 1, return the precomputed value from the result list
        if n == 1:
            return result[0]
        
        # Calculate the current value based on a given formula
        current_value = (((n * (n - 1)) // 2) + n)
        
        # Calculate the product recursively using mul_rec function
        product_result = self.mul_rec(current_value, n)
        
        # Store the computed result in the memoization list
        result[n - 1] = self.helper(n - 1) + product_result
        
        # Return the memoized result for the current n
        return result[n - 1]

    # Main function to initiate the calculation of the sequence for the given n
    def sequence(self, n):
        global result
        
        # Initialize the result list with None values for memoization and set the first element
        result = [None] * n
        result[0] = 1
        
        # Start the computation using the helper function
        self.helper(n)
        
        # Return the result for the nth value, modulo 10^9 + 7
        return result[n - 1] % (10**9 + 7)

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        
        ob = Solution()
        print(ob.sequence(N))
        print("~")
# } Driver Code Ends