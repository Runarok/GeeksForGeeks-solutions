class Solution:
    def findMaxRow(self, mat, N):
        # Initialize variables to store the row with maximum 1s and the count of 1s
        max_row = -1
        max_count = -1
        
        # Start from the top right corner of the matrix
        col = N - 1
        for row in range(N):
            # Move left across the row if we find 1s
            while col >= 0 and mat[row][col] == 1:
                col -= 1
            
            # Count of 1s in the current row is (N - 1 - col)
            count_ones = N - 1 - col
            
            # Update the max row if the current row has more 1s
            if count_ones > max_count:
                max_count = count_ones
                max_row = row
        
        # Return the result as a list [row number, count of 1s]
        return [max_row, max_count]

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n = int(input())
        mat = []
        for i in range(n):
            A = [int(x) for x in input().split()]
            mat.append(A)
        ob=Solution()
        ans = []
        ans = ob.findMaxRow(mat, n)
        for i in range(2):
            print(ans[i], end =" ")
        print()
        print("~")
# } Driver Code Ends