class Solution:
    def isSuperSimilar(self, n, m, mat, x):
        # Create a deep copy of the input matrix to manipulate
        li = []
        for lis in mat:
            li.append(lis[:])

        r = 0
        i = x % m  # Calculate the shift amount within the bounds of column size (m)

        # Iterate through each row in the matrix
        while r < n:
            if r % 2 == 0:
                # For even-indexed rows, shift elements to the right
                li[r] = li[r][i:] + li[r][:i]
            else:
                # For odd-indexed rows, shift elements to the left
                li[r] = li[r][-i:] + li[r][:-i]
            r += 1

        # Compare the original matrix with the modified one and return 1 if they are equal, else 0
        return int(mat == li)

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        n, m = [int(x) for x in input().split()]
        mat = [[0]*m for x in range(n)]
        arr = input().split()
        for i in range(n*m):
            mat[i//m][i%m] = int(arr[i])
        x=int(input())
        
        ob = Solution()
        print(ob.isSuperSimilar(n, m, mat, x))
# } Driver Code Ends