class TrieNode:
    def __init__(self):
        self.children = {}  # Dictionary to store the children nodes
        

class Solution:
    def max_xor(self, arr, n):
        # Function to insert a number into the Trie
        def insert(num, root):
            node = root
            for i in range(31, -1, -1):  # Process each bit from the most significant to least significant
                bit = (num >> i) & 1
                if bit not in node.children:
                    node.children[bit] = TrieNode()
                node = node.children[bit]
        
        # Function to find the maximum XOR of num with numbers in the Trie
        def find_max_xor(num, root):
            node = root
            xor_value = 0
            for i in range(31, -1, -1):
                bit = (num >> i) & 1
                opposite_bit = 1 - bit
                # Try to take the opposite bit to maximize XOR
                if opposite_bit in node.children:
                    xor_value |= (1 << i)
                    node = node.children[opposite_bit]
                else:
                    node = node.children[bit]
            return xor_value

        # Initialize Trie
        root = TrieNode()
        
        # Insert the first number into the Trie
        insert(arr[0], root)
        
        max_xor = 0
        # Process the remaining numbers
        for i in range(1, n):
            # Find the maximum XOR of arr[i] with numbers already in the Trie
            max_xor = max(max_xor, find_max_xor(arr[i], root))
            # Insert arr[i] into the Trie
            insert(arr[i], root)
        
        return max_xor

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		arr = list(map(int,input().split()))
		ob = Solution();
		print(ob.max_xor(arr,n))
	
# } Driver Code Ends