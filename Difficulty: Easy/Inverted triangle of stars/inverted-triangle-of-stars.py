class Solution:
    def invIsoTriangle(self, N):
        # Initialize an empty list to store the rows of the triangle
        answer = list()
        
        # Loop through each row from 0 to N-1
        for i in range(0, N):
            # Create a string with leading spaces for the current row
            s = " " * i
            
            # Add stars for the current row (decreasing number of stars per row)
            s += "*" * (N * 2 - 1 - 2 * i)
            
            # Add trailing spaces for the current row
            s += " " * i
            
            # Append the row to the answer list
            answer.append(s)
        
        # Return the list containing all rows of the inverted isosceles triangle
        return answer
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N=int(input())
        
        ob = Solution()
        ans=(ob.invIsoTriangle(N))
        for i in ans:
            print(i)
# } Driver Code Ends