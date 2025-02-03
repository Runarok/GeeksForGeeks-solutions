class Solution:
    def computeBeforeMatrix(self, N, M, after):
        # Initialize the 'before' matrix with zeros
        before = [[0] * M for _ in range(N)]
        
        # Loop through each cell in the 'after' matrix to calculate the corresponding 'before' values
        for i in range(N):
            for j in range(M):
                # Handle edge cases where the cell is on the top row or the leftmost column
                if i == 0 and j == 0:
                    before[i][j] = after[i][j]
                elif i == 0:
                    before[i][j] = after[i][j] - after[i][j - 1]  # Top row, subtract left cell value
                elif j == 0:
                    before[i][j] = after[i][j] - after[i - 1][j]  # Left column, subtract top cell value
                else:
                    # General case for other cells, subtract left and top values and add the diagonal value
                    before[i][j] = after[i][j] - after[i - 1][j] - after[i][j - 1] + after[i - 1][j - 1]
        
        return before

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    
    T = int(input())
    while T > 0: 
        N, M =[int(i) for i in input().split()]
        after= []
        for j in range (N):
            after.append([int(i) for i in input().split()])
        ob = Solution()
        before=ob.computeBeforeMatrix(N,M,after)
        for i in range(len(before)): 
            for j in range(len(before[i])):
                print(before[i][j],end=' ')
            print()
        
        
        T -= 1
        print("~")
# } Driver Code Ends