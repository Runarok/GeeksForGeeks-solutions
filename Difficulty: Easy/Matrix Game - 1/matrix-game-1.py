class Solution:
    def groupRows(self, M, n):
        # Dictionary to store the unique values of binary rows and their indices
        d = {}
        val = 0
        ans = []  # List to store the row indices with unique binary values
        k = 0  # Variable to keep track of the number of unique rows

        # Iterate through each row of the matrix
        for i in range(n):
            # Convert the row to a string and then to an integer
            s = str(M[i])
            val = int(s, 2)
            
            # If the value is not zero and not already in the dictionary, add it to the answer
            if val != 0 and (val not in d):
                ans.append(k)
                d[val] = i  # Store the value with its row index
                k += 1
        
        # If no unique rows are found, return [-1]
        if len(ans) == 0:
            return [-1]
        
        # Return the list of unique row indices
        return ans

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=='__main__':
    t = int(input())
    for i in range(t):
        n = int(input().strip())
        M = list(map(str,input().split()))
            
        ob= Solution()
        ans= ob.groupRows(M,n)
        
        for i in range(len(ans)):
            print(ans[i], end=" ")
            
        print()
# } Driver Code Ends