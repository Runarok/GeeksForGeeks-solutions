#User function Template for python3

class Solution:
    def longestSubstring(self, s):
        ans=1
        l=len(s)
        f={0:-1}
        x=0
        for i in range(l):
            z=ord(s[i])-97
            x=x^(1<<z)
            if x in f:
                ans=max(ans,i-f[x])
            for j in range(26):
                t=x^(1<<j)
                if t in f:
                    ans=max(ans,i-f[t])
            if x not in f:
                f[x]=i
        return ans


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        S=input()
        
        ob = Solution()
        print(ob.longestSubstring(S))
        print("~")
# } Driver Code Ends