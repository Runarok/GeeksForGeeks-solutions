class Solution:
    def LexicographicallyMinimum(self, str):
        # Convert input string to a list A
        A = str
        
        # Sort and remove duplicates from the string to get the lexicographically smallest characters
        s = sorted(set(A))
        
        # Initialize variables to store the characters to be swapped
        swap_a = None
        swap_b = None
        
        # Iterate through the string A to find a character greater than the lexicographically smallest character
        for item in A:
            # If a character larger than the smallest is found, set the swap characters
            if ord(item) > ord(s[0]):
                swap_a = item
                swap_b = s[0]
                break
            # If character equals the smallest, remove it from the sorted list
            elif ord(item) == ord(s[0]): 
                s.pop(0)
            
            # If no characters are left in the sorted list, return the string as is
            if len(s) == 0: 
                return A
        
        # Convert string to a list for mutable operations
        A = list(A)
        
        # Iterate through the list and swap the characters found earlier
        for index in range(len(A)):
            if A[index] == swap_a: 
                A[index] = swap_b
            elif A[index] == swap_b: 
                A[index] = swap_a
        
        # Join the list back into a string and return it
        return "".join(A)


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		str = input()
		ob = Solution()
		ans = ob.LexicographicallyMinimum(str)
		print(ans)

# } Driver Code Ends