class Solution:
    def reverseWithSpacesIntact(self, s):
        # Convert the input string into a list for easier manipulation
        l = list(s)
        
        # Initialize two pointers: left at the beginning and right at the end of the list
        left = 0
        right = len(s) - 1
        
        # Loop until the left pointer is less than or equal to the right pointer
        while left <= right:
            # If both characters are not spaces, swap them
            if l[left] != " " and l[right] != " ":
                l[left], l[right] = l[right], l[left]
                left += 1
                right -= 1
            # If the left character is a space, move the left pointer to the right
            elif l[left] == " ":
                left += 1
            # If the right character is a space, move the right pointer to the left
            else:
                right -= 1
        
        # Convert the list back to a string and return it
        s = "".join(l)
        return s


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        s = input()
        ob = Solution()
        ans = ob.reverseWithSpacesIntact(s)
        print(ans)
# } Driver Code Ends