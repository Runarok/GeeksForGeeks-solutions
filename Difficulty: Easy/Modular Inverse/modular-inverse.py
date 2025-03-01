#{ 
 # Driver Code Starts
#Initial Template for Python 3


import math



# } Driver Code Ends

class Solution:
    def modInverse(self, a, m):
        """
        Finds the smallest modular multiplicative inverse of 'a' under modulo 'm'.
        The modular inverse of 'a' is an integer 'x' such that (a * x) % m == 1.

        Args:
            a (int): The number for which the inverse is to be found.
            m (int): The modulo value.

        Returns:
            int: The smallest modular inverse of 'a' under modulo 'm', or -1 if it does not exist.
        """
        # Iterate through all possible values from 1 to m-1
        for i in range(1, m):
            # Check if (a * i) % m == 1
            if (a * i) % m == 1:
                # If true, return the current value of i as the modular inverse
                return i
        
        # If no modular inverse is found, return -1
        return -1



#{ 
 # Driver Code Starts.
    
    
def main():
    
    T=int(input())
    
    while(T>0):
        
        
        am=[int(x) for x in input().strip().split()]
        a=am[0]
        m=am[1]
        ob=Solution()
        print(ob.modInverse(a,m))
        
        
        T-=1
        print("~")
    
    




if __name__=="__main__":
    main()
# } Driver Code Ends