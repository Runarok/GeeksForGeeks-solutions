# User function Template for Python3

class Solution:
    
    def check(self, a, b):
        """
        Compares two integers and returns a specific string based on the comparison result.
        
        Returns:
        "1" if a is less than b
        "2" if a is greater than b
        "3" if a is equal to b
        """
        if a < b:
            return "1"
        elif a > b:
            return "2"
        else:  # a == b
            return "3"

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        a= int(input())
        b = int(input())

        solObj = Solution()

        print(solObj.check(a,b))
# } Driver Code Ends