class Solution:
    def findNext(self, n):
        # Convert number to a list of digits
        digits = list(str(n))
        length = len(digits)
        
        # Step 1: Find the first decreasing element from the right
        i = length - 2
        while i >= 0 and digits[i] >= digits[i + 1]:
            i -= 1
        
        # If no such element is found, it's the largest permutation
        if i == -1:
            return -1
        
        # Step 2: Find the smallest element larger than digits[i] to the right
        j = length - 1
        while digits[j] <= digits[i]:
            j -= 1
        
        # Step 3: Swap digits[i] and digits[j]
        digits[i], digits[j] = digits[j], digits[i]
        
        # Step 4: Sort the digits after position i to get the smallest possible number
        digits[i + 1:] = sorted(digits[i + 1:])
        
        # Convert the list of digits back to an integer and return
        return int(''.join(digits))


#{ 
 # Driver Code Starts
#Initial Template for Python 3

t = int (input ())
for tc in range (t):
    n = int (input ())
    ob = Solution();
    res = ob.findNext (n)
    
    if res == -1:
        print ("not possible")
    else:
        print (res)
    print("~")
# } Driver Code Ends