# User function Template for python3
def const(i, s, root):
    if i < 0:
        return 
    
    node = et(s[i])  # Create a new node from the element at index i in string s


def constructTree(postfix):
    i = len(postfix)  # Initialize i to the length of the postfix expression
    
    def build():
        nonlocal i, postfix
        i -= 1  # Decrease the index to process the current element
        
        if isOperator(postfix[i]):  # If the current element is an operator
            root = et(f" {postfix[i]} ")  # Create a node for the operator
            root.right = build()  # Recursively build the right subtree
            root.left = build()  # Recursively build the left subtree
        else:  # If the current element is an operand
            root = et(postfix[i])  # Create a node for the operand
        
        return root  # Return the constructed subtree
    
    return build()  # Start the tree construction and return the root

#{ 
 # Driver Code Starts
#Initial Template for Python 3

class et():
	def __init__(self, x):
		self.value= x
		self.left = None
		self.right = None

def isOperator(c):

	if (c == '+' or c == '-' or c == '*' or c == '/' or c == '^'):
		return True
	return False


def inorder(t):
	if t:
		inorder(t.left)
		print(t.value,end = "")
		inorder(t.right)




for _ in range(int(input())):
	postfix = input()
	r = constructTree(postfix)
	inorder(r)
	print()

# } Driver Code Ends