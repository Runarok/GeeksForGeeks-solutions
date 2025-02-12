# User function Template for python3

class Solution:
    def common_String(self, s1, s2):
        # Convert both strings into sets of unique characters
        set_s1 = set(s1)
        set_s2 = set(s2)
        
        # Find the common characters between both sets
        common_chars = set_s1.intersection(set_s2)
        
        # If there are no common characters, return 'nil'
        if not common_chars:
            return 'nil'
        
        # Return the common characters as a sorted string
        return ''.join(sorted(common_chars))
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		s1 = input()
		s2 = input()
		ob = Solution()
		ans = ob.common_String(s1, s2)
		print(ans)
# } Driver Code Ends