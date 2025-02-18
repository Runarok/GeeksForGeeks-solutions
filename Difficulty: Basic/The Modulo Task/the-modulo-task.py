# User function Template for Python3

class Solution:
    def modTask(self, N):
        # Calculate the required value by dividing N by 2 and adding 1
        result = (N // 2) + 1  
        
        # Return the computed result
        return result
    
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N=int(input())
        
        ob = Solution()
        print(ob.modTask(N))
        print("~")
# } Driver Code Ends