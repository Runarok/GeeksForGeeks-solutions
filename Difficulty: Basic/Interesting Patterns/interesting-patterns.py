# User function Template for python3

class Solution:
    def interestingPattern(self, N):
        # Initialize a list to store the pattern rows
        an = []
        
        # Loop through each row to generate the pattern
        for i in range(N):
            n = N  # Start with the number N for each row
            a = ''  # Initialize an empty string for the current row
            
            # First part: Decreasing numbers starting from N down to (N-i)
            for j in range(i):
                a += str(n)
                n -= 1
            
            # Second part: Remaining numbers from (N-i) to 1
            for j in range(N-i):
                a += str(n)
            
            # Create a symmetric pattern by appending the reverse of the string (excluding last character)
            a = a[:-1] + a[::-1]
            
            # Append the generated row to the list
            an.append(a)
        
        # Reverse the list of rows to create the bottom half of the pattern
        k = an[::-1]
        
        # Add the reversed rows to the final pattern list
        for i in range(1, N):
            a = k[i]
            an.append(a)
        
        # Combine all rows into a final string with newlines
        s = ''
        for i in an:
            s += i + '\n'
        
        return s  # Return the complete pattern as a string

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N=int(input())
        
        ob = Solution()
        print(ob.interestingPattern(N), end="")
# } Driver Code Ends