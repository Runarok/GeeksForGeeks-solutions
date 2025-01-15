#User function Template for python3

class Solution:
    def findString(self, N, K):
        cand=['0']*N
        cnt=1
        seen=set([''.join(cand)])
        def bt():
            nonlocal N,K,cand,cnt,seen
            if cnt==K**N:
                return True
            prefix=[]
            if -N+1<0:
                prefix=cand[-N+1:]
            for c in range(K):
                trial=''.join(prefix+[str(c)])
                if trial not in seen:
                    cand.append(str(c))
                    seen.add(trial)
                    cnt+=1
                    if bt():
                        return True
                    cand.pop()
                    seen.discard(trial)
                    cnt-=1
            return False
        bt()
        return ''.join(cand)

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import sys
sys.setrecursionlimit(10**6)

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N,K=map(int,input().split())

        ob = Solution()
        ans = ob.findString(N,K)
        ok = 1
        for i in ans:
            if ord(i)<48 or ord(i)>K-1+48:
                ok = 0
        if not ok:
            print(-1)
            continue
        d = dict()
        i = 0
        while i+N-1<len(ans):
            d[ans[i:i+N]] = 1
            i += 1
        tot = pow(K,N)
        if len(d)==tot:
            print(len(ans))
        else:
            print(-1)
        print("~")
# } Driver Code Ends