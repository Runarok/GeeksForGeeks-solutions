# User function Template for python3

class Solution:
    def swapDigits(self, n1, n2):
        # Convert both numbers to lists for easy swapping of characters
        n1 = list(n1)
        n2 = list(n2)
        
        # Swap the first digit of n1 with the last digit of n2
        n1[0], n2[-1] = n2[-1], n1[0]
        
        # Swap the first digit of n2 with the last digit of n1
        n2[0], n1[-1] = n1[-1], n2[0]
        
        # Join the lists back into strings after swapping
        global s, n
        s = "".join(n1)
        n = "".join(n2)


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        s = input().strip()
        n = input().strip()
        ob = Solution()
        ob.swapDigits(s,n)
        print(s,n)
# } Driver Code Ends