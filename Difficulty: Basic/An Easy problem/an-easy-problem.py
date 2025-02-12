# User function Template for Python3

class Solution:
    def easyProblem(self, K, L, R, X, Y):
        """
        Determines if there exists a multiple of K within the range [L, R]
        by multiplying K with values in the range [X, Y].

        :param K: The base number to be multiplied.
        :param L: The lower bound of the valid range.
        :param R: The upper bound of the valid range.
        :param X: The lower bound of the multiplier range.
        :param Y: The upper bound of the multiplier range.
        :return: 1 if a valid multiple exists, otherwise 0.
        """
        
        # Iterate through the given range [X, Y] to check multiples of K
        for multiplier in range(X, Y + 1):
            if multiplier == 0:
                continue  # Skip zero to avoid a trivial zero result
            
            product = K * multiplier  # Compute the product
            
            # Check if the product falls within the given range [L, R]
            if L <= product <= R:
                return 1  # Found a valid multiple, return success
        
        return 0  # No valid multiple found within range

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        K,L,R,X,Y=map(int,input().strip().split(' '))
        ob=Solution()
        print(ob.easyProblem(K,L,R,X,Y))
        print("~")
# } Driver Code Ends