class Solution:
    def repUnit(self, N):
        # Initialize count to 1 and the remainder for the first number 1%N
        count = 1
        remain = 1 % N
        
        # Continue until the remainder becomes 0
        while remain:
            # Update remainder by multiplying by 10 and adding 1 (representing the next repunit number)
            remain = remain * 10 + 1
            
            # Keep the remainder modulo N
            remain = remain % N
            
            # Increment the count for each iteration
            count += 1
        
        # Return the number of iterations needed
        return count
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        N = int(input())
        
        ob = Solution()
        print(ob.repUnit(N))
# } Driver Code Ends