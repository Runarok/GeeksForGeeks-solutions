class Solution:
    def karyTree(self, k, m):
        mod = 10**9 + 7  # Define the modulo value
        return pow(k, m, mod)  # Calculate k^m % (10^9 + 7)
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        k,m=map(int,input().split())
        
        ob = Solution()
        print(ob.karyTree(k,m))
        print("~")
# } Driver Code Ends