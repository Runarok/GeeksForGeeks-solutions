#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

class Solution:

    def checktree(self, preorder, inorder, postorder, N):
        # Base case: If the size of the arrays is 0, they represent an empty tree, hence valid
        if N == 0:
            return 1

        # Base case: If the size of the arrays is 1, check if all elements are equal
        if N == 1:
            return (preorder[0] == inorder[0]) and (inorder[0] == postorder[0])

        # Find the root (first element of preorder) in the inorder array
        idx = -1
        for i in range(N):
            if inorder[i] == preorder[0]:
                idx = i
                break

        # If the root is not found in inorder, the tree is invalid
        if idx == -1:
            return 0

        # Validate that the root matches the last element of the postorder array
        if preorder[0] != postorder[N - 1]:
            return 0

        # Recursively check the left subtree
        ret1 = self.checktree(preorder[1:], inorder[:idx], postorder[:idx], idx)

        # Recursively check the right subtree
        ret2 = self.checktree(preorder[idx + 1:], inorder[idx + 1:], postorder[idx:-1], N - idx - 1)

        # Return true if both left and right subtrees are valid, otherwise false
        return (ret1 and ret2)


#{ 
 # Driver Code Starts.

# Driver Code 
if __name__ == "__main__": 
	t = int(input())
	for _ in range(t):
		n = int(input())
		preorder = list(map(int, input().strip().split()))
		inorder = list(map(int, input().strip().split()))
		postorder = list(map(int, input().strip().split()))
		obj = Solution()
		if(obj.checktree(preorder, inorder, postorder, n)):
			print("Yes") 
		else: 
			print("No")
		print("~")
# } Driver Code Ends