class Solution:
    def celebrity(self, mat):
        n = len(mat)
        
        # Step 1: Find the potential celebrity using a two-pointer approach.
        left, right = 0, n - 1
        while left < right:
            if mat[left][right] == 1:  # left knows right, so left cannot be a celebrity
                left += 1
            else:  # left does not know right, so right cannot be a celebrity
                right -= 1
        
        # Step 2: Check if the left pointer is indeed the celebrity
        candidate = left
        
        # Check if the candidate knows anyone or if everyone knows the candidate
        for i in range(n):
            if i != candidate:
                if mat[candidate][i] == 1 or mat[i][candidate] == 0:
                    return -1
        
        return candidate

#{ 
 # Driver Code Starts
# Main function to handle input and output
if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        n = int(input())
        M = []
        for _ in range(n):
            M.append(list(map(int, input().split())))

        ob = Solution()
        print(ob.celebrity(M))
        print("~")

# } Driver Code Ends