class Solution:
    def findminoperation(self, n: int) -> int:
        # If n is 1, no operations are needed
        if n == 1:
            return 0  # No operations needed for single 'A'
        
        operations = 0  # To store the total number of operations
        factor = 2  # Start with the smallest prime factor
        
        # Continue while n is greater than 1
        while n > 1:
            # Check if the current factor divides n
            while n % factor == 0:
                operations += factor  # Add the factor to the operation count
                n //= factor  # Reduce n by dividing it by the factor
            factor += 1  # Move to the next possible factor
        
        # Return the total number of operations
        return operations

#{ 
 # Driver Code Starts
if __name__=="__main__":
    t = int(input())
    for _ in range(t):
        
        n = int(input())
        
        obj = Solution()
        res = obj.findminoperation(n)
        
        print(res)
        

        print("~")
# } Driver Code Ends