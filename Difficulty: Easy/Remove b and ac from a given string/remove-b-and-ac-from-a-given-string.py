#User function Template for python3

class Solution:
    def stringFilter(self, str):
        result = []  # To build the final string
        i = 0
        while i < len(s):
            
            if s[i] == 'b':
                i += 1
                continue
            
            if i < len(s) - 1 and s[i] == 'a' and s[i+1] == 'c':
                i += 2  # Skip both 'a' and 'c'
                continue
            
            result.append(s[i])
            i += 1
        
        
        return ''.join(result)
        # code here

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        s = input().strip()
        ob = Solution()
        ans = ob.stringFilter(s)
        print(ans)
# } Driver Code Ends
