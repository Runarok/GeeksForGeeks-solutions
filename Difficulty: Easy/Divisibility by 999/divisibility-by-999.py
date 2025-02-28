#User function Template for python3

class Solution:

    def isDivisible999(self, N):
        # Check if the given number (as string) is divisible by 999
        if int(N) % 999 == 0:
            return True
        else:
            return False


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        N = input()

        solObj = Solution()

        if solObj.isDivisible999(N):
            print('Divisible')
        else:
            print('Not divisible')
# } Driver Code Ends